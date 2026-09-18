import { Component } from '@angular/core';

import { AvAvatarImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex items-center gap-4">
      <span av-avatar color="default">
        <span av-avatar-fallback>DF</span>
      </span>
      <span av-avatar color="accent">
        <span av-avatar-fallback>AC</span>
      </span>
      <span av-avatar color="success">
        <span av-avatar-fallback>SC</span>
      </span>
      <span av-avatar color="warning">
        <span av-avatar-fallback>WR</span>
      </span>
      <span av-avatar color="danger">
        <span av-avatar-fallback>DG</span>
      </span>
    </div>`;

export const DEMO_NAME = 'avatar-with-colors';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvAvatarImports } from '@avesra/angular';

@Component({
  selector: 'app-avatar-with-colors-demo',
  imports: [AvAvatarImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class AvatarWithColorsDemo {}`;

@Component({
  selector: 'app-avatar-with-colors-demo',
  imports: [AvAvatarImports],
  template: DEMO_TEMPLATE,
})
export class AvatarWithColorsDemo {}
