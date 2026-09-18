import {
  afterNextRender,
  Component,
  computed,
  inject,
  Injector,
  TemplateRef,
  Type,
  viewChild,
  ViewContainerRef,
} from '@angular/core';

import { AvDrawerContext } from './drawer.context';
import {
  AV_DRAWER_CONFIG,
  AV_DRAWER_CONTENT,
  AV_DRAWER_REF,
  type AvDrawerConfig,
  type AvDrawerContent,
} from './drawer.tokens';
import {
  avDrawerContentClasses,
  avDrawerResolveBackdropClasses,
} from './drawer.utils';

/**
 * Internal shell used by {@link AvDrawerService} — backdrop + content + projected panel.
 */
@Component({
  selector: 'av-drawer-shell',
  template: `
    <div
      [class]="backdropClasses()"
      [attr.data-entering]="animationState() === 'entering' ? 'true' : null"
      [attr.data-exiting]="animationState() === 'exiting' ? 'true' : null"
      data-slot="drawer-backdrop"
      aria-hidden="true"
    ></div>
    <div
      [class]="contentClasses()"
      [attr.data-placement]="config.placement ?? 'bottom'"
      [attr.data-entering]="animationState() === 'entering' ? 'true' : null"
      [attr.data-exiting]="animationState() === 'exiting' ? 'true' : null"
      data-slot="drawer-content"
      (animationend)="onPanelAnimationEnd($event)"
      (transitionend)="onPanelTransitionEnd($event)"
    >
      <ng-template #contentHost />
    </div>
  `,
  providers: [AvDrawerContext],
  host: {
    'data-slot': 'drawer-shell',
    style: 'display: contents',
  },
})
export class AvDrawerShellComponent {
  private readonly context = inject(AvDrawerContext);
  private readonly drawerRef = inject(AV_DRAWER_REF);
  private readonly content = inject<AvDrawerContent>(AV_DRAWER_CONTENT);
  private readonly injector = inject(Injector);
  readonly config = inject<AvDrawerConfig>(AV_DRAWER_CONFIG);

  private readonly contentHost = viewChild.required('contentHost', { read: ViewContainerRef });

  protected readonly animationState = computed(() => this.context.animationState());

  protected readonly backdropClasses = computed(() =>
    avDrawerResolveBackdropClasses(
      this.config.backdrop ?? 'opaque',
      this.config.backdropClass ?? '',
    ).join(' '),
  );

  protected readonly contentClasses = computed(() =>
    avDrawerContentClasses({
      placement: this.config.placement ?? 'bottom',
      className: this.config.contentClass ?? '',
    }),
  );

  constructor() {
    this.context.placement.set(this.config.placement ?? 'bottom');
    this.context.backdropVariant.set(this.config.backdrop ?? 'opaque');
    this.context.dismissable.set(this.config.dismissable ?? true);
    this.context.keyboardDismissDisabled.set(this.config.keyboardDismissDisabled ?? false);

    this.drawerRef._registerCloseHandler((result) => {
      this.context.close(result);
    });

    this.context.registerClosed((result) => {
      this.drawerRef._notifyClosed(result);
    });

    afterNextRender(() => {
      this.attachContent();
      this.context.open();
    });
  }

  protected onPanelAnimationEnd(event: AnimationEvent): void {
    if (this.context.animationState() !== 'exiting') {
      return;
    }

    const target = event.target as HTMLElement | null;
    if (target?.classList.contains('av-drawer__dialog')) {
      this.context.notifyExitAnimationEnd();
    }
  }

  protected onPanelTransitionEnd(event: TransitionEvent): void {
    if (this.context.animationState() !== 'exiting') {
      return;
    }

    const target = event.target as HTMLElement | null;
    if (
      target?.classList.contains('av-drawer__dialog') &&
      (event.propertyName === 'translate' || event.propertyName === 'transform')
    ) {
      this.context.notifyExitAnimationEnd();
    }
  }

  private attachContent(): void {
    const host = this.contentHost();
    host.clear();

    if (this.content instanceof TemplateRef) {
      host.createEmbeddedView(this.content);
      return;
    }

    host.createComponent(this.content as Type<unknown>, { injector: this.injector });
  }
}
