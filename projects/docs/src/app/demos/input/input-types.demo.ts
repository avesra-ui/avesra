import { Component } from '@angular/core';
import { AvInputComponent, AvLabelComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-1">
        <label av-label for="input-type-email">Email</label>
        <input
          av-input
          id="input-type-email"
          type="email"
          placeholder="jane&#64;example.com"
        />
      </div>
      <div class="flex flex-col gap-1">
        <label av-label for="input-type-number">Age</label>
        <input
          av-input
          id="input-type-number"
          type="number"
          min="0"
          placeholder="30"
        />
      </div>
      <div class="flex flex-col gap-1">
        <label av-label for="input-type-password">Password</label>
        <input
          av-input
          id="input-type-password"
          type="password"
          placeholder="••••••••"
        />
      </div>`;

export const DEMO_NAME = 'input-input-types';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvInputComponent, AvLabelComponent } from '@avesra/angular';

@Component({
  selector: 'app-input-input-types-demo',
  imports: [AvInputComponent, AvLabelComponent],
  host: { class: 'flex w-full max-w-xs flex-col gap-4' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class InputInputTypesDemo {}`;

@Component({
  selector: 'app-input-input-types-demo',
  imports: [AvInputComponent, AvLabelComponent],
  host: { class: 'flex w-full max-w-xs flex-col gap-4' },
  template: DEMO_TEMPLATE,
})
export class InputInputTypesDemo {}
