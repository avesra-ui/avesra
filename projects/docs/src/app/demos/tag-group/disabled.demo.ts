import { Component } from '@angular/core';

import {
  AvDescriptionComponent,
  AvLabelComponent,
  AvTagGroupImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-4">
  <av-tag-group selection-mode="single">
    <label av-label>Disabled Tags</label>
    <div av-tag-group-list>
      <div av-tag value="news" disabled>News</div>
      <div av-tag value="travel">Travel</div>
      <div av-tag value="gaming" disabled>Gaming</div>
    </div>
    <p av-description>Some tags are disabled</p>
  </av-tag-group>

  <av-tag-group selection-mode="single" [disabled-keys]="['travel']">
    <label av-label>Disabled Keys</label>
    <div av-tag-group-list>
      <div av-tag value="news">News</div>
      <div av-tag value="travel">Travel</div>
      <div av-tag value="gaming">Gaming</div>
    </div>
    <p av-description>Tags disabled via disabled-keys prop</p>
  </av-tag-group>
</div>`;

export const DEMO_NAME = 'tag-group-disabled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvDescriptionComponent,
  AvLabelComponent,
  AvTagGroupImports,
} from '@avesra/angular';

@Component({
  selector: 'app-tag-group-disabled-demo',
  imports: [
    AvTagGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  template: \`
${DEMO_TEMPLATE}
\`,
})
export class TagGroupDisabledDemo {}`;

@Component({
  selector: 'app-tag-group-disabled-demo',
  imports: [
    AvTagGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class TagGroupDisabledDemo {}
