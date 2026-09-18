import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvDisclosureGroupComponent } from '../disclosure-group/disclosure-group.component';
import { AvDisclosureComponent } from './disclosure.component';
import { AvDisclosureContentComponent } from './disclosure-content.component';
import { AvDisclosureTriggerDirective } from './disclosure-trigger.directive';
import { measureDisclosurePanelHeight } from './disclosure.utils';

@Component({
  template: `
    <av-disclosure [(expanded)]="expanded">
      <button type="button" av-disclosure-trigger>Toggle</button>
      <div av-disclosure-content>Content</div>
    </av-disclosure>
  `,
  imports: [
    AvDisclosureComponent,
    AvDisclosureTriggerDirective,
    AvDisclosureContentComponent,
  ],
})
class DisclosureHostComponent {
  expanded = false;
}

@Component({
  template: `
    <av-disclosure default-expanded [(expanded)]="expanded">
      <button type="button" av-disclosure-trigger>Toggle</button>
      <div av-disclosure-content>Content</div>
    </av-disclosure>
  `,
  imports: [
    AvDisclosureComponent,
    AvDisclosureTriggerDirective,
    AvDisclosureContentComponent,
  ],
})
class DefaultExpandedHostComponent {
  expanded = false;
}

@Component({
  template: `
    <av-disclosure-group [expandedKeys]="['a']">
      <av-disclosure id="a">
        <button type="button" av-disclosure-trigger>A</button>
        <div av-disclosure-content>Panel A</div>
      </av-disclosure>
      <av-disclosure id="b">
        <button type="button" av-disclosure-trigger>B</button>
        <div av-disclosure-content>Panel B</div>
      </av-disclosure>
    </av-disclosure-group>
  `,
  imports: [
    AvDisclosureGroupComponent,
    AvDisclosureComponent,
    AvDisclosureTriggerDirective,
    AvDisclosureContentComponent,
  ],
})
class GroupHostComponent {}

describe('AvDisclosureComponent', () => {
  let fixture: ComponentFixture<DisclosureHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisclosureHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DisclosureHostComponent);
    fixture.detectChanges();
  });

  it('should toggle expanded state', () => {
    fixture.nativeElement.querySelector('[av-disclosure-trigger]').click();
    fixture.detectChanges();
    expect(fixture.componentInstance.expanded).toBeTrue();
  });

  it('should measure content height', () => {
    const panel = document.createElement('div');
    panel.style.setProperty('--av-disclosure-panel-height', '0px');
    const inner = document.createElement('div');
    inner.style.height = '80px';
    panel.appendChild(inner);
    document.body.appendChild(panel);
    expect(measureDisclosurePanelHeight(panel)).toBe(80);
    document.body.removeChild(panel);
  });
});

describe('AvDisclosureComponent default-expanded', () => {
  it('should start expanded', () => {
    const fixture = TestBed.createComponent(DefaultExpandedHostComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance.expanded).toBeTrue();
    fixture.nativeElement.querySelector('[av-disclosure-trigger]').click();
    fixture.detectChanges();
    expect(fixture.componentInstance.expanded).toBeFalse();
  });
});

describe('AvDisclosureComponent in group', () => {
  it('should toggle group disclosures', () => {
    const fixture = TestBed.createComponent(GroupHostComponent);
    fixture.detectChanges();

    const triggers = fixture.nativeElement.querySelectorAll('[av-disclosure-trigger]');
    triggers[1].click();
    fixture.detectChanges();

    const panels = fixture.nativeElement.querySelectorAll('[av-disclosure-content]');
    expect(panels[0].getAttribute('data-expanded')).toBeNull();
    expect(panels[1].getAttribute('data-expanded')).toBe('true');
  });
});
