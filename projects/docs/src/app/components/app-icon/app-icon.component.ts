import {
  afterNextRender,
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
  },
  template: `
    @if (ready()) {
      <iconify-icon
        [attr.icon]="icon()"
        [attr.width]="size()"
        [attr.height]="size()"
        [class]="class()"
        aria-hidden="true"
      ></iconify-icon>
    }
  `,
})
export class AppIconComponent {
  readonly icon = input.required<string>();
  readonly size = input('16');
  readonly class = input('', { alias: 'class' });
  readonly ready = signal(false);

  constructor() {
    afterNextRender(() => {
      loadIconify().then(() => this.ready.set(true));
    });
  }
}
