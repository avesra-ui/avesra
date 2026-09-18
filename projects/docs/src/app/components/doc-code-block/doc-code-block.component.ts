import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  Component,
  computed,
  effect,
  inject,
  input,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { AvButtonComponent } from '@avesra/angular';

import { CodeHighlightService } from '../../services/code-highlight.service';
import { AppIconComponent } from '../app-icon/app-icon.component';

@Component({
  selector: 'app-doc-code-block',
  imports: [AvButtonComponent, AppIconComponent],
  templateUrl: './doc-code-block.component.html',
  styleUrl: './doc-code-block.component.scss',
})
export class DocCodeBlockComponent {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly codeHighlight = inject(CodeHighlightService);

  readonly rawCode = input.required<string>();
  readonly lang = input('typescript');
  /**
   * `import` — soft gray import snippet (multi-line when needed);
   * `anatomy` — multi-line full snippet (no collapse / no clip);
   * `demo` — collapsible preview code.
   */
  readonly variant = input<'demo' | 'import' | 'anatomy'>('demo');

  readonly collapsed = signal(true);
  readonly copied = signal(false);
  readonly highlightedHtml = signal('');

  readonly isCollapsed = computed(() => this.variant() === 'demo' && this.collapsed());
  readonly showLineNumbers = computed(() => this.variant() === 'demo');
  readonly isInlineSnippet = computed(
    () => this.variant() === 'import' || this.variant() === 'anatomy',
  );

  readonly safeHighlightedHtml = computed(() => {
    const html = this.highlightedHtml();

    if (html) {
      return this.sanitizer.bypassSecurityTrustHtml(html);
    }

    return this.sanitizer.bypassSecurityTrustHtml(
      `<pre class="shiki"><code>${this.escapeHtml(this.rawCode())}</code></pre>`,
    );
  });

  constructor() {
    effect(() => {
      const code = this.rawCode();
      const language = this.lang();

      if (!isPlatformBrowser(this.platformId) || !code) {
        this.highlightedHtml.set('');
        return;
      }

      void this.codeHighlight.highlight(code, language).then((html) => {
        this.highlightedHtml.set(html);
      });
    });
  }

  toggleCollapsed(): void {
    this.collapsed.update((value) => !value);
  }

  async copyCode(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.rawCode());
      this.copied.set(true);
      window.setTimeout(() => this.copied.set(false), 2000);
    } catch {
      const textarea = this.document.createElement('textarea');
      textarea.value = this.rawCode();
      this.document.body.appendChild(textarea);
      textarea.select();
      this.document.execCommand('copy');
      this.document.body.removeChild(textarea);
      this.copied.set(true);
      window.setTimeout(() => this.copied.set(false), 2000);
    }
  }

  private escapeHtml(value: string): string {
    return value
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;');
  }
}
