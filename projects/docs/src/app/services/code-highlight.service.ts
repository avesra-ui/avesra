import { Injectable } from '@angular/core';

import type { Highlighter } from 'shiki';

@Injectable({ providedIn: 'root' })
export class CodeHighlightService {
  private highlighter?: Highlighter;
  private highlighterPromise?: Promise<Highlighter>;

  async highlight(code: string, lang: string): Promise<string> {
    const highlighter = await this.getHighlighter();

    return highlighter.codeToHtml(code.trim(), {
      lang,
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    });
  }

  private async getHighlighter(): Promise<Highlighter> {
    if (this.highlighter) {
      return this.highlighter;
    }

    if (!this.highlighterPromise) {
      this.highlighterPromise = import('shiki').then(async ({ createHighlighter }) => {
        const highlighter = await createHighlighter({
          themes: ['github-light', 'github-dark'],
          langs: ['typescript', 'html', 'css', 'json', 'bash'],
        });

        this.highlighter = highlighter;
        return highlighter;
      });
    }

    return this.highlighterPromise;
  }
}
