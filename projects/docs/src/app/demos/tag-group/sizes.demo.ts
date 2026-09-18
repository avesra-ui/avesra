import { Component } from '@angular/core';

import {
  AvLabelComponent,
  AvTagGroupImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-6">
      <av-tag-group selection-mode="single" size="sm">
        <label av-label>Small</label>
        <div av-tag-group-list>
          <div av-tag value="news">News</div>
          <div av-tag value="travel">Travel</div>
          <div av-tag value="gaming">Gaming</div>
        </div>
      </av-tag-group>
      <av-tag-group selection-mode="single" size="md">
        <label av-label>Medium</label>
        <div av-tag-group-list>
          <div av-tag value="news">News</div>
          <div av-tag value="travel">Travel</div>
          <div av-tag value="gaming">Gaming</div>
        </div>
      </av-tag-group>
      <av-tag-group selection-mode="single" size="lg">
        <label av-label>Large</label>
        <div av-tag-group-list>
          <div av-tag value="news">News</div>
          <div av-tag value="travel">Travel</div>
          <div av-tag value="gaming">Gaming</div>
        </div>
      </av-tag-group>
    </div>`;

export const DEMO_NAME = 'tag-group-sizes';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvLabelComponent,
  AvTagGroupImports,
} from '@avesra/angular';

@Component({
  selector: 'app-tag-group-sizes-demo',
  imports: [
    AvTagGroupImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class TagGroupSizesDemo {}`;

@Component({
  selector: 'app-tag-group-sizes-demo',
  imports: [
    AvTagGroupImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class TagGroupSizesDemo {}
