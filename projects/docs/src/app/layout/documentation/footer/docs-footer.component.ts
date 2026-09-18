import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { AvLinkComponent } from '@avesra/angular';

import { AppIconComponent } from '../../../components/app-icon/app-icon.component';
import { DOCS_SOCIAL_MEDIAS } from '../../../config/docs-nav.config';

/**
 * Docs site footer.
 */
@Component({
  selector: 'app-docs-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AppIconComponent, AvLinkComponent],
  host: {
    class:
      'mx-auto mt-14 flex w-full max-w-[1728px] flex-wrap items-center justify-between gap-1 border-t border-border px-3.5 py-4 text-sm font-normal text-muted lg:px-7 xl:px-14',
  },
  template: `
    <div class="flex items-center gap-1">
      @for (social of socialMedias(); track social.name) {
        <a
          [href]="social.url"
          target="_blank"
          rel="noopener noreferrer"
          [title]="social.name"
          class="flex size-9 items-center justify-center rounded-md text-muted transition-colors hover:text-foreground"
        >
          <app-icon [icon]="social.icon" size="16" class="opacity-60 transition-opacity hover:opacity-100" />
        </a>
      }
    </div>

    <p class="text-center text-xs leading-loose sm:text-end sm:text-sm">
      Made with
      <span class="text-red-500">❤</span>
      by SyntaxHertz. Open source and available on
      <a av-link href="https://github.com/avesra-ui" underline="always">GitHub</a>.
    </p>
  `,
})
export class DocsFooterComponent {
  readonly socialMedias = signal([...DOCS_SOCIAL_MEDIAS]);
}
