import { NgComponentOutlet } from '@angular/common';
import { Component, computed, input } from '@angular/core';

import type { DocDemo } from '../../models/doc-demo.model';
import { DocCodeBlockComponent } from '../doc-code-block/doc-code-block.component';

@Component({
  selector: 'app-component-preview',
  imports: [NgComponentOutlet, DocCodeBlockComponent],
  templateUrl: './component-preview.component.html',
  styleUrl: './component-preview.component.scss',
})
export class ComponentPreviewComponent {
  readonly demo = input.required<DocDemo>();
  readonly title = input<string>();

  protected readonly demoComponent = computed(() => this.demo().component);
  protected readonly demoSource = computed(() => this.demo().source);
  protected readonly demoLang = computed(() => this.demo().lang);
}
