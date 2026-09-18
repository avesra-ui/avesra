import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvAccordionBodyComponent } from './accordion-body.component';
import { AvAccordionComponent } from './accordion.component';
import { AvAccordionHeadingComponent } from './accordion-heading.component';
import { AvAccordionIndicatorComponent } from './accordion-indicator.component';
import { AvAccordionItemComponent } from './accordion-item.component';
import { AvAccordionPanelComponent } from './accordion-panel.component';
import { AvAccordionTriggerComponent } from './accordion-trigger.component';

@Component({
  template: `
    <av-accordion allows-multiple [(expandedKeys)]="expandedKeys">
      <av-accordion-item id="a">
        <h3 av-accordion-heading>
          <button av-accordion-trigger>
            Item A
            <svg av-accordion-indicator></svg>
          </button>
        </h3>
        <div av-accordion-panel>
          <div av-accordion-body>Content A</div>
        </div>
      </av-accordion-item>
      <av-accordion-item id="b">
        <h3 av-accordion-heading>
          <button av-accordion-trigger>
            Item B
            <svg av-accordion-indicator></svg>
          </button>
        </h3>
        <div av-accordion-panel>
          <div av-accordion-body>Content B</div>
        </div>
      </av-accordion-item>
    </av-accordion>
  `,
  imports: [
    AvAccordionComponent,
    AvAccordionItemComponent,
    AvAccordionHeadingComponent,
    AvAccordionTriggerComponent,
    AvAccordionPanelComponent,
    AvAccordionBodyComponent,
    AvAccordionIndicatorComponent,
  ],
})
class AccordionHostComponent {
  expandedKeys: string[] = [];
}

describe('AvAccordionComponent', () => {
  let fixture: ComponentFixture<AccordionHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccordionHostComponent);
    fixture.detectChanges();
  });

  it('should toggle expanded keys', () => {
    const triggers = fixture.nativeElement.querySelectorAll('[av-accordion-trigger]');
    triggers[0].click();
    fixture.detectChanges();
    expect(fixture.componentInstance.expandedKeys).toEqual(['a']);

    triggers[1].click();
    fixture.detectChanges();
    expect(fixture.componentInstance.expandedKeys).toEqual(['a', 'b']);
  });

  it('should collapse when clicking expanded item', () => {
    const triggers = fixture.nativeElement.querySelectorAll('[av-accordion-trigger]');
    triggers[0].click();
    fixture.detectChanges();
    triggers[0].click();
    fixture.detectChanges();
    expect(fixture.componentInstance.expandedKeys).toEqual([]);
  });
});

@Component({
  template: `
    <av-accordion [(expandedKeys)]="expandedKeys">
      <av-accordion-item id="a">
        <h3 av-accordion-heading>
          <button av-accordion-trigger>
            Item A
            <svg av-accordion-indicator></svg>
          </button>
        </h3>
        <div av-accordion-panel>
          <div av-accordion-body>Content A</div>
        </div>
      </av-accordion-item>
      <av-accordion-item id="b">
        <h3 av-accordion-heading>
          <button av-accordion-trigger>
            Item B
            <svg av-accordion-indicator></svg>
          </button>
        </h3>
        <div av-accordion-panel>
          <div av-accordion-body>Content B</div>
        </div>
      </av-accordion-item>
    </av-accordion>
  `,
  imports: [
    AvAccordionComponent,
    AvAccordionItemComponent,
    AvAccordionHeadingComponent,
    AvAccordionTriggerComponent,
    AvAccordionPanelComponent,
    AvAccordionBodyComponent,
    AvAccordionIndicatorComponent,
  ],
})
class SingleExpandHostComponent {
  expandedKeys: string[] = [];
}

describe('AvAccordionComponent single expand', () => {
  it('should only allow one expanded item', () => {
    const fixture = TestBed.createComponent(SingleExpandHostComponent);
    fixture.detectChanges();

    const triggers = fixture.nativeElement.querySelectorAll('[av-accordion-trigger]');
    triggers[0].click();
    fixture.detectChanges();
    triggers[1].click();
    fixture.detectChanges();

    expect(fixture.componentInstance.expandedKeys).toEqual(['b']);
  });
});
