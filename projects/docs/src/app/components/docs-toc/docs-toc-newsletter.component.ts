import { Component } from '@angular/core';

import {
  AvButtonComponent,
  AvChipComponent,
  AvInputComponent,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-docs-toc-newsletter',
  imports: [AvLabelComponent, AvInputComponent, AvButtonComponent, AvChipComponent],
  template: `
    <div class="av-docs-toc-newsletter">
      <div class="av-docs-toc-newsletter__inner">
        <form
          class="av-docs-toc-newsletter__form"
          aria-disabled="true"
          (submit)="onSubmit($event)"
        >
          <div class="av-docs-toc-newsletter__heading">
            <label av-label class="av-docs-toc-newsletter__label" for="docs-toc-newsletter-email">
              Avesra Newsletter
            </label>
            <span av-chip size="sm" color="warning" variant="secondary" label="Coming soon"></span>
          </div>
          <input
            av-input
            id="docs-toc-newsletter-email"
            name="email"
            type="email"
            placeholder="name@email.com"
            autocomplete="email"
            disabled
          />
          <button av-button type="submit" variant="tertiary" full-width disabled>Subscribe</button>
        </form>
      </div>
    </div>
  `,
  styleUrl: './docs-toc-newsletter.component.scss',
})
export class DocsTocNewsletterComponent {
  onSubmit(event: Event): void {
    event.preventDefault();
  }
}
