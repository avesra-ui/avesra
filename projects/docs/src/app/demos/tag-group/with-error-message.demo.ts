import { Component, computed, signal } from '@angular/core';

import {
  AvDescriptionComponent,
  AvErrorMessageComponent,
  AvLabelComponent,
  AvTagGroupImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<av-tag-group selection-mode="multiple" [(selectedKeys)]="selected">
  <label av-label>Amenities</label>
  <div av-tag-group-list>
    <div av-tag value="laundry">Laundry</div>
    <div av-tag value="fitness">Fitness center</div>
    <div av-tag value="parking">Parking</div>
    <div av-tag value="pool">Swimming pool</div>
    <div av-tag value="breakfast">Breakfast</div>
  </div>
  <p av-description>
    {{
      isInvalid()
        ? 'Select at least one category'
        : 'Selected: ' + selected().join(', ')
    }}
  </p>
  @if (isInvalid()) {
    <p av-error-message>Please select at least one category</p>
  }
</av-tag-group>`;

export const DEMO_NAME = 'tag-group-with-error-message';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, computed, signal } from '@angular/core';
import {
  AvDescriptionComponent,
  AvErrorMessageComponent,
  AvLabelComponent,
  AvTagGroupImports,
} from '@avesra/angular';

@Component({
  selector: 'app-tag-group-with-error-message-demo',
  imports: [
    AvTagGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvErrorMessageComponent,
  ],
  template: \`
${DEMO_TEMPLATE}
\`,
})
export class TagGroupWithErrorMessageDemo {
  readonly selected = signal<string[]>([]);
  readonly isInvalid = computed(() => this.selected().length === 0);
}`;

@Component({
  selector: 'app-tag-group-with-error-message-demo',
  imports: [
    AvTagGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvErrorMessageComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class TagGroupWithErrorMessageDemo {
  readonly selected = signal<string[]>([]);
  readonly isInvalid = computed(() => this.selected().length === 0);
}
