import { Component } from '@angular/core';

import { AvTagGroupImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<av-tag-group selection-mode="single" aria-label="Tags">
      <div av-tag-group-list>
        <div av-tag value="news">News</div>
        <div av-tag value="travel">Travel</div>
        <div av-tag value="gaming">Gaming</div>
        <div av-tag value="shopping">Shopping</div>
      </div>
    </av-tag-group>`;

export const DEMO_NAME = 'tag-group-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvTagGroupImports } from '@avesra/angular';

@Component({
  selector: 'app-tag-group-basic-demo',
  imports: [AvTagGroupImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class TagGroupBasicDemo {}`;

@Component({
  selector: 'app-tag-group-basic-demo',
  imports: [AvTagGroupImports],
  template: DEMO_TEMPLATE,
})
export class TagGroupBasicDemo {}
