import {
  AfterViewInit,
  afterRenderEffect,
  booleanAttribute,
  Component,
  computed,
  contentChild,
  contentChildren,
  DestroyRef,
  effect,
  inject,
  input,
  signal,
  TemplateRef,
  untracked,
  viewChild,
  ViewContainerRef,
} from '@angular/core';

import { AvListBoxComponent } from '../list-box/list-box.component';
import { AvListBoxItemComponent } from '../list-box-item/list-box-item.component';
import { AvSelectContext } from './select.context';
import type { AvSelectListPanel } from './select.context';
import {
  avSelectAnchorPoint,
  avSelectPopoverClasses,
  avSelectPositions,
  AV_SELECT_OFFSET_DEFAULT,
} from './select.utils';
import type { AvSelectOpenOrigin, AvSelectPlacement, AvSelectPlacementAxis } from './select.utils';

let nextSelectPanelId = 0;

@Component({
  selector: 'av-select-popover',
  template: `
    <ng-template #panel>
      <div
        [id]="panelId"
        [class]="classes()"
        [attr.data-placement]="placementAxis()"
        [attr.data-entering]="context.animationState() === 'entering' ? 'true' : null"
        [attr.data-exiting]="context.animationState() === 'exiting' ? 'true' : null"
        [style.--trigger-anchor-point]="anchorPoint()"
        [style.--trigger-width.px]="context.triggerWidth()"
        data-slot="select-popover"
        (animationend)="onAnimationEnd($event)"
      >
        <ng-content />
      </div>
    </ng-template>
  `,
})
export class AvSelectPopoverComponent implements AfterViewInit, AvSelectListPanel {
  protected readonly context = inject(AvSelectContext);
  private readonly viewContainerRef = inject(ViewContainerRef);
  private readonly destroyRef = inject(DestroyRef);

  private readonly panelTemplate = viewChild.required<TemplateRef<unknown>>('panel');
  private readonly listBox = contentChild(AvListBoxComponent);
  private readonly items = contentChildren(AvListBoxItemComponent, { descendants: true });

  /** Preferred placement relative to the trigger. */
  readonly placement = input<AvSelectPlacement>('bottom');

  /** Distance between trigger and popover in pixels. */
  readonly offset = input(AV_SELECT_OFFSET_DEFAULT);

  /** Extra classes applied to the overlay panel. */
  readonly customClass = input('', { alias: 'class' });

  /** Whether the popover can flip to fit the viewport. */
  readonly shouldFlip = input(true, { alias: 'should-flip', transform: booleanAttribute });

  readonly panelId = `av-select-panel-${++nextSelectPanelId}`;

  protected readonly placementAxis = signal<AvSelectPlacementAxis>('bottom');

  protected readonly classes = computed(() => avSelectPopoverClasses(this.customClass()));

  protected readonly anchorPoint = computed(() => avSelectAnchorPoint(this.placementAxis()));

  private syncingFromSelect = false;

  constructor() {
    this.context.registerListPanel(this);

    // Push select → list-box selection (list-box never imports select).
    effect(() => {
      const listBox = this.listBox();
      const keys = this.context.selectedKeys();

      untracked(() => {
        if (!listBox) {
          return;
        }

        if (!this.arraysEqual(keys, listBox.selectedKeys())) {
          this.syncingFromSelect = true;
          listBox.selectedKeys.set([...keys]);
          queueMicrotask(() => {
            this.syncingFromSelect = false;
          });
        }
      });
    });

    // Pull list-box → select selection; close on single select.
    effect(() => {
      const listBox = this.listBox();
      if (!listBox) {
        return;
      }

      const keys = listBox.selectedKeys();

      untracked(() => {
        if (this.syncingFromSelect) {
          return;
        }

        if (!this.arraysEqual(keys, this.context.selectedKeys())) {
          this.context.setSelectedKeys(keys);

          if (this.context.selectionMode() === 'single' && keys.length > 0) {
            this.context.close('selection');
          }
        }
      });
    });

    // Collect labels after render so required item `id` inputs are bound (avoids NG0950).
    // Only write when the map changes — afterRenderEffect + signal writes otherwise loop (NG0103).
    afterRenderEffect(() => {
      const items = this.items();

      if (items.length === 0) {
        return;
      }

      const next = new Map<string, string>();
      for (const item of items) {
        const id = item.itemId();
        next.set(id, item.textValue() || id);
      }

      untracked(() => {
        this.context.replaceItemLabels(next);
      });
    });

    this.destroyRef.onDestroy(() => {
      this.context.unregisterListPanel();
      this.context.unregisterPanel();
    });
  }

  ngAfterViewInit(): void {
    this.context.registerPanel({
      templateRef: this.panelTemplate(),
      viewContainerRef: this.viewContainerRef,
      getPositions: () => avSelectPositions(this.placement(), this.offset()),
      shouldFlip: () => this.shouldFlip(),
      setPlacementAxis: (axis) => this.placementAxis.set(axis),
    });
  }

  focusList(origin: AvSelectOpenOrigin = 'program'): void {
    if (origin === 'mouse') {
      return;
    }

    const panel = document.getElementById(this.panelId);
    const listBox = panel?.querySelector<HTMLElement>('[data-slot="list-box"]');
    listBox?.focus();
  }

  handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      if (
        this.context.keyboardDismissDisabled() ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey
      ) {
        return;
      }

      event.preventDefault();
      this.context.close('keydown');
    }
  }

  protected onAnimationEnd(event: AnimationEvent): void {
    if (this.context.animationState() !== 'exiting') {
      return;
    }

    if (event.target === event.currentTarget) {
      this.context.notifyExitAnimationEnd();
    }
  }

  private arraysEqual(a: string[], b: string[]): boolean {
    if (a.length !== b.length) {
      return false;
    }

    return a.every((value, index) => value === b[index]);
  }
}
