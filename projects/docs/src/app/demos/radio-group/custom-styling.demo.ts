import { Component } from '@angular/core';

import { AvRadioGroupImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<av-radio-group default-value="premium" name="plan" class="gap-3">
      <div
        av-radio
        value="basic"
        class="group cursor-pointer rounded-xl border-2 border-border p-4 hover:border-blue-300 data-[selected=true]:border-blue-500 data-[selected=true]:bg-blue-500/10"
      >
        <span
          av-radio-control
          class="border-2 border-border group-hover:border-blue-400 group-data-[selected=true]:border-blue-500 group-data-[selected=true]:bg-blue-500"
        >
          <span av-radio-indicator></span>
        </span>
        Basic Plan
      </div>
      <div
        av-radio
        value="premium"
        class="group cursor-pointer rounded-xl border-2 border-border p-4 hover:border-purple-300 data-[selected=true]:border-purple-500 data-[selected=true]:bg-purple-500/10"
      >
        <span
          av-radio-control
          class="border-2 border-border group-hover:border-purple-400 group-data-[selected=true]:border-purple-500 group-data-[selected=true]:bg-purple-500"
        >
          <span av-radio-indicator></span>
        </span>
        Premium Plan
      </div>
      <div
        av-radio
        value="business"
        class="group cursor-pointer rounded-xl border-2 border-border p-4 hover:border-emerald-300 data-[selected=true]:border-emerald-500 data-[selected=true]:bg-emerald-500/10"
      >
        <span
          av-radio-control
          class="border-2 border-border group-hover:border-emerald-400 group-data-[selected=true]:border-emerald-500 group-data-[selected=true]:bg-emerald-500"
        >
          <span av-radio-indicator></span>
        </span>
        Business Plan
      </div>
    </av-radio-group>`;

export const DEMO_NAME = 'radio-group-custom-styling';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvRadioGroupImports } from '@avesra/angular';

@Component({
  selector: 'app-radio-group-custom-styling-demo',
  imports: [AvRadioGroupImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class RadioGroupCustomStylingDemo {}`;

@Component({
  selector: 'app-radio-group-custom-styling-demo',
  imports: [AvRadioGroupImports],
  template: DEMO_TEMPLATE,
})
export class RadioGroupCustomStylingDemo {}
