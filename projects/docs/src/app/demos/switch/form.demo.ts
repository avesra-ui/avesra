import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvSwitchImports,
  AvSwitchGroupComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<form class="flex flex-col gap-4" (submit)="onSubmit($event)">
      <av-switch-group>
        <div av-switch name="notifications" value="on">
          <span av-switch-control>
            <span av-switch-thumb></span>
          </span>
          <span av-switch-content>Enable notifications</span>
        </div>
        <div av-switch default-selected name="newsletter" value="on">
          <span av-switch-control>
            <span av-switch-thumb></span>
          </span>
          <span av-switch-content>Subscribe to newsletter</span>
        </div>
        <div av-switch name="marketing" value="on">
          <span av-switch-control>
            <span av-switch-thumb></span>
          </span>
          <span av-switch-content>Receive marketing updates</span>
        </div>
      </av-switch-group>
      <button av-button class="mt-4" size="sm" type="submit" variant="primary">
        Submit
      </button>
    </form>`;

export const DEMO_NAME = 'switch-form';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvSwitchImports,
  AvSwitchGroupComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-switch-form-demo',
  imports: [
    AvSwitchGroupComponent,
    AvSwitchImports,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class SwitchFormDemo {
  onSubmit(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const entries = Array.from(formData.entries())
      .map(([key, value]) => \`\${key}: \${value}\`)
      .join('\\n');
    alert(\`Form submitted with:\\n\${entries}\`);
  }
}`;

@Component({
  selector: 'app-switch-form-demo',
  imports: [
    AvSwitchGroupComponent,
    AvSwitchImports,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class SwitchFormDemo {
  onSubmit(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const entries = Array.from(formData.entries())
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');
    alert(`Form submitted with:\n${entries}`);
  }
}
