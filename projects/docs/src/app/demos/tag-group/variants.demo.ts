import { Component } from '@angular/core';

import {
  AvLabelComponent,
  AvTagGroupImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-8">
      <av-tag-group selection-mode="single" variant="default">
        <label av-label>Default</label>
        <div av-tag-group-list>
          <div av-tag value="news">News</div>
          <div av-tag value="travel">Travel</div>
          <div av-tag value="gaming">Gaming</div>
        </div>
      </av-tag-group>
      <av-tag-group selection-mode="single" variant="surface">
        <label av-label>Surface</label>
        <div av-tag-group-list>
          <div av-tag value="news">News</div>
          <div av-tag value="travel">Travel</div>
          <div av-tag value="gaming">Gaming</div>
        </div>
      </av-tag-group>
    </div>`;

export const DEMO_NAME = 'tag-group-variants';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvLabelComponent,
  AvTagGroupImports,
} from '@avesra/angular';

@Component({
  selector: 'app-tag-group-variants-demo',
  imports: [
    AvTagGroupImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class TagGroupVariantsDemo {}`;

@Component({
  selector: 'app-tag-group-variants-demo',
  imports: [
    AvTagGroupImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class TagGroupVariantsDemo {}
