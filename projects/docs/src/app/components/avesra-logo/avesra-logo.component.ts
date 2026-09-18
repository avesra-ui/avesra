import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

const AV_WORDMARK_LIGHT_SRC = '/images/brand/avesra-logo-light.webp';
const AV_WORDMARK_DARK_SRC = '/images/brand/avesra-logo-dark.webp';
const AV_MARK_LIGHT_SRC = '/images/brand/avesra-mark-light.webp';
const AV_MARK_DARK_SRC = '/images/brand/avesra-mark-dark.webp';
/** Cropped wordmark intrinsic ratio (light asset). */
const AV_WORDMARK_ASPECT_RATIO = 1844 / 348;
/** Icon mark intrinsic ratio (light asset). */
const AV_MARK_ASPECT_RATIO = 1009 / 732;

export type AvLogoVariant = 'wordmark' | 'mark';

/** Header logo — wordmark or compact mark, with light/dark WebPs from `public/images/brand`. */
@Component({
  selector: 'app-avesra-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'hostClass()',
  },
  template: `
    <img
      [src]="lightSrc()"
      alt=""
      aria-hidden="true"
      class="block dark:hidden"
      [attr.height]="imgHeight()"
      [attr.width]="imgWidth()"
      [style.height.px]="imgHeight()"
      [style.width.px]="imgWidth()"
    />
    <img
      [src]="darkSrc()"
      alt=""
      aria-hidden="true"
      class="hidden dark:block"
      [attr.height]="imgHeight()"
      [attr.width]="imgWidth()"
      [style.height.px]="imgHeight()"
      [style.width.px]="imgWidth()"
    />
    <span class="sr-only">Avesra</span>
  `,
})
export class AvesraLogoComponent {
  readonly class = input('', { alias: 'class' });
  readonly variant = input<AvLogoVariant>('wordmark');
  readonly size = input(28);
  readonly height = input<number | undefined>(undefined);
  readonly width = input<number | undefined>(undefined);

  protected readonly lightSrc = computed(() =>
    this.variant() === 'mark' ? AV_MARK_LIGHT_SRC : AV_WORDMARK_LIGHT_SRC,
  );
  protected readonly darkSrc = computed(() =>
    this.variant() === 'mark' ? AV_MARK_DARK_SRC : AV_WORDMARK_DARK_SRC,
  );

  protected readonly hostClass = computed(() =>
    ['inline-flex', 'shrink-0', 'items-center', this.class()].filter(Boolean).join(' '),
  );

  protected readonly imgHeight = computed(() => this.height() ?? this.size());
  protected readonly imgWidth = computed(() => {
    const explicitWidth = this.width();
    if (explicitWidth !== undefined) {
      return explicitWidth;
    }

    const ratio = this.variant() === 'mark' ? AV_MARK_ASPECT_RATIO : AV_WORDMARK_ASPECT_RATIO;
    return Math.round(this.imgHeight() * ratio);
  });
}
