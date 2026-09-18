import { Component } from '@angular/core';

import {
  AvButtonComponent,
  AvCardImports,
  AvFormComponent,
  AvInputComponent,
  AvLabelComponent,
  AvLinkImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-card class="w-full max-w-md">
      <div av-card-header>
        <h3 av-card-title>Login</h3>
        <p av-card-description>Enter your credentials to access your account</p>
      </div>
      <form av-form (submit)="onSubmit($event)">
        <div av-card-content>
          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-1">
              <label av-label for="card-form-email">Email</label>
              <input
                av-input
                full-width
                id="card-form-email"
                name="email"
                type="email"
                placeholder="email&#64;example.com"
                variant="secondary"
              />
            </div>
            <div class="flex flex-col gap-1">
              <label av-label for="card-form-password">Password</label>
              <input
                av-input
                full-width
                id="card-form-password"
                name="password"
                type="password"
                placeholder="••••••••"
                variant="secondary"
              />
            </div>
          </div>
        </div>
        <div av-card-footer class="mt-4 flex flex-col gap-2">
          <button av-button class="w-full" type="submit">Sign In</button>
          <a av-link class="text-center text-sm" href="#">Forgot password?</a>
        </div>
      </form>
    </div>`;

export const DEMO_NAME = 'card-with-form';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvCardImports,
  AvFormComponent,
  AvInputComponent,
  AvLabelComponent,
  AvLinkImports,
} from '@avesra/angular';

@Component({
  selector: 'app-card-with-form-demo',
  imports: [
    AvCardImports,
    AvFormComponent,
    AvLabelComponent,
    AvInputComponent,
    AvButtonComponent,
    AvLinkImports,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class CardWithFormDemo {
  onSubmit(event: Event): void {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data: Record<string, string> = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    alert('Form submitted successfully!');
  }
}`;

@Component({
  selector: 'app-card-with-form-demo',
  imports: [
    AvCardImports,
    AvFormComponent,
    AvLabelComponent,
    AvInputComponent,
    AvButtonComponent,
    AvLinkImports,
  ],
  template: DEMO_TEMPLATE,
})
export class CardWithFormDemo {
  onSubmit(event: Event): void {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data: Record<string, string> = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    alert('Form submitted successfully!');
  }
}
