import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvInputComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<input
      av-input
      class="w-full"
      type="text"
      placeholder="domain"
      aria-label="Domain"
      [(ngModel)]="value"
    />
    <span class="px-1 text-sm text-muted">https://{{ value || 'your-domain' }}</span>`;

export const DEMO_NAME = 'input-controlled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvInputComponent } from '@avesra/angular';

@Component({
  selector: 'app-input-controlled-demo',
  imports: [FormsModule, AvInputComponent],
  host: { class: 'flex w-full max-w-xs flex-col gap-2' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class InputControlledDemo {
  value = 'avesra.dev';
}`;

@Component({
  selector: 'app-input-controlled-demo',
  imports: [FormsModule, AvInputComponent],
  host: { class: 'flex w-full max-w-xs flex-col gap-2' },
  template: DEMO_TEMPLATE,
})
export class InputControlledDemo {
  value = 'avesra.dev';
}
