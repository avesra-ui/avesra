import { Component, computed, input } from '@angular/core';

import { getComponentImportSnippet } from '../../config/docs-components.config';
import { getAnatomySnippet } from '../../demos/snippets/anatomy-snippets';
import { DocCodeBlockComponent } from '../doc-code-block/doc-code-block.component';

@Component({
  selector: 'app-doc-snippet',
  imports: [DocCodeBlockComponent],
  template: `
    @if (resolvedSource(); as source) {
      <app-doc-code-block
        [variant]="codeVariant()"
        [rawCode]="source"
        [lang]="resolvedLang()"
      />
    }
  `,
})
export class DocSnippetComponent {
  readonly source = input<string>();
  readonly lang = input<string>();

  /** Shorthand for \`{component}\` import or anatomy snippets. */
  readonly component = input<string>();

  /** Snippet section when using \`component\`, e.g. \`import\` or \`anatomy\`. */
  readonly section = input<'import' | 'anatomy'>('import');

  protected readonly codeVariant = computed(() =>
    this.section() === 'anatomy' ? 'anatomy' : 'import',
  );

  protected readonly resolvedSource = computed(() => {
    const explicitSource = this.source();

    if (explicitSource) {
      return explicitSource;
    }

    const slug = this.component();

    if (!slug) {
      return '';
    }

    if (this.section() === 'anatomy') {
      return getAnatomySnippet(slug)?.source ?? '';
    }

    return getComponentImportSnippet(slug);
  });

  protected readonly resolvedLang = computed(() => {
    const explicitLang = this.lang();

    if (explicitLang) {
      return explicitLang;
    }

    const slug = this.component();

    if (slug && this.section() === 'anatomy') {
      return getAnatomySnippet(slug)?.lang ?? 'html';
    }

    return 'typescript';
  });
}
