import { Component, signal } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import {
  AvButtonComponent,
  AvModalImports,
  type AvModalScroll,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-4">
  <div class="flex flex-wrap gap-2">
    <button
      av-button
      size="sm"
      [variant]="scrollMode() === 'inside' ? 'primary' : 'secondary'"
      (click)="setScrollMode('inside')"
    >
      Inside
    </button>
    <button
      av-button
      size="sm"
      [variant]="scrollMode() === 'outside' ? 'primary' : 'secondary'"
      (click)="setScrollMode('outside')"
    >
      Outside
    </button>
  </div>

  <av-modal [scroll]="scrollMode()">
    <button av-button variant="secondary" av-modal-trigger>
      Open Modal ({{ scrollMode() | titlecase }})
    </button>
    <ng-template avModalContent>
      <div av-modal-dialog class="sm:max-w-[360px]">
        <av-modal-close-trigger />
        <div av-modal-header>
          <h2 av-modal-heading>Scroll: {{ scrollMode() | titlecase }}</h2>
          <p class="text-sm leading-5 text-muted">
            Compare scroll behaviors — inside keeps content scrollable within the modal, outside
            allows scrolling the entire dialog in the viewport.
          </p>
        </div>
        <div av-modal-body>
          @for (paragraph of scrollParagraphs; track paragraph) {
            <p class="mb-3">
              Paragraph {{ paragraph }}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit
              risus, sed porttitor quam.
            </p>
          }
        </div>
        <div av-modal-footer>
          <button av-button variant="secondary" av-modal-close>Cancel</button>
          <button av-button av-modal-close>Confirm</button>
        </div>
      </div>
    </ng-template>
  </av-modal>
</div>`;

export const DEMO_NAME = 'modal-scroll-behavior';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import {
  AvButtonComponent,
  AvModalImports,
  type AvModalScroll,
} from '@avesra/angular';

@Component({
  selector: 'app-modal-scroll-behavior-demo',
  imports: [
    AvModalImports,
    AvButtonComponent,
    TitleCasePipe,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ModalScrollBehaviorDemo {
  readonly scrollMode = signal<AvModalScroll>('inside');
  readonly scrollParagraphs = Array.from({ length: 30 }, (_, index) => index + 1);

  setScrollMode(mode: AvModalScroll): void {
    this.scrollMode.set(mode);
  }
}`;

@Component({
  selector: 'app-modal-scroll-behavior-demo',
  imports: [
    AvModalImports,
    AvButtonComponent,
    TitleCasePipe,
  ],
  template: DEMO_TEMPLATE,
})
export class ModalScrollBehaviorDemo {
  readonly scrollMode = signal<AvModalScroll>('inside');
  readonly scrollParagraphs = Array.from({ length: 30 }, (_, index) => index + 1);

  setScrollMode(mode: AvModalScroll): void {
    this.scrollMode.set(mode);
  }
}
