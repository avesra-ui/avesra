import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { inputOtpDemos } from '../../../demos/input-otp';

@Component({
  selector: 'app-input-otp-doc-page',
  imports: [
    DocPageComponent,
    ComponentPreviewComponent,
    DocApiTableComponent,
    DocSnippetComponent,
    RouterLink,
  ],
  templateUrl: './input-otp-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class InputOtpDocPage {
  readonly demos = inputOtpDemos;
  readonly apiProps = getComponentProps('input-otp');

  readonly cssOverrideExample = `@layer components {
  .av-input-otp {
    @apply gap-3;
  }

  .av-input-otp__slot {
    @apply size-12 rounded-xl border-2 font-bold;
  }

  .av-input-otp__slot[data-active="true"] {
    @apply border-accent ring-2 ring-accent/20;
  }

  .av-input-otp__separator {
    @apply h-1 w-2 rounded-full bg-border;
  }
}`;

  readonly exportedPatternsExample = `import {
  AV_REGEXP_ONLY_DIGITS,
  AV_REGEXP_ONLY_CHARS,
  AV_REGEXP_ONLY_DIGITS_AND_CHARS,
} from '@avesra/angular';

@Component({
  // ...
  template: \`
    <div av-input-otp [pattern]="regexpOnlyDigits" [maxLength]="6">
      <!-- ... -->
    </div>
  \`,
})
export class Example {
  readonly regexpOnlyDigits = AV_REGEXP_ONLY_DIGITS;
}`;

  readonly toc: DocTocItem[] = [
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'variants', title: 'Variants' },
    { id: 'in-surface', title: 'In Surface' },
    { id: 'disabled-state', title: 'Disabled State' },
    { id: 'four-digits', title: 'Four Digits' },
    { id: 'controlled', title: 'Controlled' },
    { id: 'on-complete', title: 'On Complete' },
    { id: 'form-example', title: 'Form Example' },
    { id: 'with-pattern', title: 'With Pattern' },
    { id: 'with-validation', title: 'With Validation' },
    { id: 'styling', title: 'Styling' },
    { id: 'passing-tailwind-classes', title: 'Passing Tailwind CSS classes', depth: 2 },
    { id: 'customizing-classes', title: 'Customizing the component classes', depth: 2 },
    { id: 'css-classes', title: 'CSS Classes', depth: 2 },
    { id: 'interactive-states', title: 'Interactive States', depth: 2 },
    { id: 'api', title: 'API' },
    { id: 'exported-patterns', title: 'Exported Patterns', depth: 2 },
  ];
}
