import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvLabelComponent,
  AvModalImports,
  AvSurfaceComponent,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<av-modal placement="auto">
  <button av-button variant="secondary" av-modal-trigger>Open Contact Form</button>
  <ng-template avModalContent>
    <div av-modal-dialog class="sm:max-w-md">
      <av-modal-close-trigger />
      <div av-modal-header>
        <div av-modal-icon class="bg-accent-soft text-accent-soft-foreground">
          <app-icon icon="solar:letter-linear" size="20" />
        </div>
        <h2 av-modal-heading>Contact Us</h2>
        <p class="mt-1.5 text-sm leading-5 text-muted">
          Fill out the form below and we'll get back to you. The modal adapts when the keyboard
          appears on mobile.
        </p>
      </div>
      <div av-modal-body class="p-6">
        <div av-surface variant="default" class="rounded-2xl p-4">
          <form class="flex flex-col gap-4" (submit)="$event.preventDefault()">
            <div class="flex w-full flex-col gap-1.5">
              <label av-label for="modal-contact-name">Name</label>
              <input
                id="modal-contact-name"
                class="h-10 w-full rounded-xl border border-border bg-transparent px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-focus"
                placeholder="Enter your name"
              />
            </div>
            <div class="flex w-full flex-col gap-1.5">
              <label av-label for="modal-contact-email">Email</label>
              <input
                id="modal-contact-email"
                type="email"
                class="h-10 w-full rounded-xl border border-border bg-transparent px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-focus"
                placeholder="Enter your email"
              />
            </div>
            <div class="flex w-full flex-col gap-1.5">
              <label av-label for="modal-contact-phone">Phone</label>
              <input
                id="modal-contact-phone"
                type="tel"
                class="h-10 w-full rounded-xl border border-border bg-transparent px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-focus"
                placeholder="Enter your phone number"
              />
            </div>
            <div class="flex w-full flex-col gap-1.5">
              <label av-label for="modal-contact-company">Company</label>
              <input
                id="modal-contact-company"
                class="h-10 w-full rounded-xl border border-border bg-transparent px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-focus"
                placeholder="Enter your company name"
              />
            </div>
            <div class="flex w-full flex-col gap-1.5">
              <label av-label for="modal-contact-message">Message</label>
              <input
                id="modal-contact-message"
                class="h-10 w-full rounded-xl border border-border bg-transparent px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-focus"
                placeholder="Enter your message"
              />
            </div>
          </form>
        </div>
      </div>
      <div av-modal-footer>
        <button av-button variant="secondary" av-modal-close>Cancel</button>
        <button av-button av-modal-close>Send Message</button>
      </div>
    </div>
  </ng-template>
</av-modal>`;

export const DEMO_NAME = 'modal-with-form';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvLabelComponent,
  AvModalImports,
  AvSurfaceComponent,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-modal-with-form-demo',
  imports: [
    AppIconComponent,
    AvModalImports,
    AvButtonComponent,
    AvLabelComponent,
    AvSurfaceComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ModalWithFormDemo {}`;

@Component({
  selector: 'app-modal-with-form-demo',
  imports: [
    AppIconComponent,
    AvModalImports,
    AvButtonComponent,
    AvLabelComponent,
    AvSurfaceComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class ModalWithFormDemo {}
