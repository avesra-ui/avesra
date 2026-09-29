import {
  afterNextRender,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  input,
  signal,
} from '@angular/core';

let iconifyLoadPromise: Promise<void> | null = null;

function loadIconify(): Promise<void> {
  if (!iconifyLoadPromise) {
    iconifyLoadPromise = import('../../../iconify.setup').then(() => undefined);
  }
  return iconifyLoadPromise;
}

@Component({
  selector: 'app-icon',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  host: {
    class: 'app-icon',
    ngSkipHydration: 'true',
    '[style.width.px]': 'sizePx()',
    '[style.height.px]': 'sizePx()',
    '[style.minWidth.px]': 'sizePx()',
    '[style.minHeight.px]': 'sizePx()',
  },
  styles: `
    :host {
      display: inline-flex;
      flex-shrink: 0;
      align-items: center;
      justify-content: center;
      vertical-align: middle;
    }

    iconify-icon {
      display: block;
      flex-shrink: 0;
    }
  `,
  template: `
    <iconify-icon
      [attr.icon]="icon()"
      [attr.width]="sizePx()"
      [attr.height]="sizePx()"
      [class]="class()"
      [style.visibility]="ready() ? 'visible' : 'hidden'"
      aria-hidden="true"
    ></iconify-icon>
  `,
})
export class AppIconComponent {
  readonly icon = input.required<string>();
  readonly size = input('16');
  readonly class = input('', { alias: 'class' });
  readonly ready = signal(false);

  protected readonly sizePx = computed(() => {
    const parsed = Number.parseInt(String(this.size()), 10);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 16;
  });

  constructor() {
    afterNextRender(() => {
      loadIconify().then(() => this.ready.set(true));
    });
  }
}
