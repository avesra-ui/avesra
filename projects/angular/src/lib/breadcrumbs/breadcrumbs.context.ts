import { Injectable, signal, type TemplateRef } from '@angular/core';

@Injectable()
export class AvBreadcrumbsContext {
  readonly disabled = signal(false);
  readonly separatorTemplate = signal<TemplateRef<unknown> | null>(null);
}
