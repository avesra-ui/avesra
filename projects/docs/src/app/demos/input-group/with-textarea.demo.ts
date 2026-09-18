import { Component, signal } from '@angular/core';
import {
  AvButtonComponent,
  AvInputGroupImports,
  AvSpinnerComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div
      av-input-group
      full-width
      class="flex flex-col gap-2 rounded-3xl py-2"
      aria-label="Prompt input"
    >
      <div av-input-group-prefix class="px-3 py-0">
        <button av-button type="button" size="sm" variant="outline">
          <app-icon icon="solar:mention-circle-linear" size="16" />
          Add Context
        </button>
      </div>
      <textarea
        av-input-group-textarea
        class="w-full resize-none px-3.5 py-0"
        placeholder="Assign tasks or ask anything..."
        rows="5"
        [value]="promptValue()"
        (input)="onPromptInput($event)"
      ></textarea>
      <div av-input-group-suffix class="flex w-full items-center gap-1.5 px-3 py-0">
        <button av-button type="button" size="sm" variant="tertiary" icon-only aria-label="Attach file">
          <app-icon icon="solar:add-circle-linear" size="16" />
        </button>
        <div class="ml-auto flex items-center gap-1.5">
          <button av-button type="button" size="sm" variant="ghost" icon-only aria-label="Voice input">
            <app-icon icon="solar:microphone-linear" size="16" />
          </button>
          <button
            av-button
            type="button"
            size="sm"
            icon-only
            aria-label="Send prompt"
            [disabled]="!promptValue().trim() || isSubmitting()"
            (click)="handleSubmit()"
          >
            @if (isSubmitting()) {
              <span av-spinner size="sm" color="current"></span>
            } @else {
              <app-icon icon="solar:arrow-up-linear" size="16" />
            }
          </button>
        </div>
      </div>
    </div>`;

export const DEMO_NAME = 'input-group-with-textarea';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import {
  AvButtonComponent,
  AvInputGroupImports,
  AvSpinnerComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-input-group-with-textarea-demo',
  imports: [
    AvInputGroupImports,
    AvButtonComponent,
    AvSpinnerComponent,
    AppIconComponent,
  ],
  host: { class: 'flex w-full max-w-lg flex-col' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class InputGroupWithTextareaDemo {
  readonly promptValue = signal('');
  readonly isSubmitting = signal(false);

  onPromptInput(event: Event): void {
    this.promptValue.set((event.target as HTMLTextAreaElement).value);
  }

  handleSubmit(): void {
    if (!this.promptValue().trim()) {
      return;
    }

    this.isSubmitting.set(true);
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.promptValue.set('');
    }, 1000);
  }
}`;

@Component({
  selector: 'app-input-group-with-textarea-demo',
  imports: [
    AvInputGroupImports,
    AvButtonComponent,
    AvSpinnerComponent,
    AppIconComponent,
  ],
  host: { class: 'flex w-full max-w-lg flex-col' },
  template: DEMO_TEMPLATE,
})
export class InputGroupWithTextareaDemo {
  readonly promptValue = signal('');
  readonly isSubmitting = signal(false);

  onPromptInput(event: Event): void {
    this.promptValue.set((event.target as HTMLTextAreaElement).value);
  }

  handleSubmit(): void {
    if (!this.promptValue().trim()) {
      return;
    }

    this.isSubmitting.set(true);
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.promptValue.set('');
    }, 1000);
  }
}
