import { Component } from '@angular/core';
import { AvLinkImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-6">
      <div class="flex flex-col gap-2">
        <p class="text-sm font-medium text-muted">Default hover underline</p>
        <a av-link href="#">
          Hover to see the underline
          <span av-link-icon></span>
        </a>
      </div>

      <div class="flex flex-col gap-2">
        <p class="text-sm font-medium text-muted">Always visible underline</p>
        <a av-link underline="always" href="#">
          Underline always visible
          <span av-link-icon></span>
        </a>
      </div>

      <div class="flex flex-col gap-2">
        <p class="text-sm font-medium text-muted">No underline</p>
        <a av-link underline="none" href="#">
          Link without any underline
          <span av-link-icon></span>
        </a>
      </div>

      <div class="flex flex-col gap-2">
        <p class="text-sm font-medium text-muted">Changing the underline offset</p>
        <div class="flex flex-col gap-3">
          <a av-link class="underline-offset-1" href="#">
            Offset 1 (1px space)
            <span av-link-icon></span>
          </a>
          <a av-link class="underline-offset-2" href="#">
            Offset 2 (2px space)
            <span av-link-icon></span>
          </a>
          <a av-link class="underline-offset-4" href="#">
            Offset 4 (4px space)
            <span av-link-icon></span>
          </a>
          <a av-link class="underline-offset-8" href="#">
            Offset 8 (8px space)
            <span av-link-icon></span>
          </a>
        </div>
      </div>
    </div>`;

export const DEMO_NAME = 'link-underline-and-offset';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvLinkImports } from '@avesra/angular';

@Component({
  selector: 'app-link-underline-and-offset-demo',
  imports: [AvLinkImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class LinkUnderlineAndOffsetDemo {}`;

@Component({
  selector: 'app-link-underline-and-offset-demo',
  imports: [AvLinkImports],
  template: DEMO_TEMPLATE,
})
export class LinkUnderlineAndOffsetDemo {}
