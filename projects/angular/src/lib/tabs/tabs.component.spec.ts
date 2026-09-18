import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvTabsIndicatorComponent } from './tabs-indicator.component';
import { AvTabsComponent } from './tabs.component';
import { AvTabsListContainerComponent } from './tabs-list-container.component';
import { AvTabsListComponent } from './tabs-list.component';
import { AvTabsPanelComponent } from './tabs-panel.component';
import { AvTabsTabComponent } from './tabs-tab.component';

const TABS_IMPORTS = [
  AvTabsIndicatorComponent,
  AvTabsComponent,
  AvTabsListContainerComponent,
  AvTabsListComponent,
  AvTabsTabComponent,
  AvTabsPanelComponent,
] as const;

@Component({
  template: `
    <av-tabs [(selectedKey)]="selected">
      <div av-tabs-list-container>
        <div av-tabs-list>
          <span av-tabs-indicator></span>
          <button av-tabs-tab id="a">A</button>
          <button av-tabs-tab id="b">B</button>
        </div>
      </div>
      <div av-tabs-panel id="a">Panel A</div>
      <div av-tabs-panel id="b">Panel B</div>
    </av-tabs>
  `,
  imports: [...TABS_IMPORTS],
})
class TabsHostComponent {
  selected: string | null = 'a';
}

@Component({
  template: `
    <av-tabs default-selected-key="a">
      <div av-tabs-list-container>
        <div av-tabs-list>
          <span av-tabs-indicator></span>
          <button av-tabs-tab id="a">A</button>
          <button av-tabs-tab id="b" disabled>B</button>
        </div>
      </div>
      <div av-tabs-panel id="a">Panel A</div>
      <div av-tabs-panel id="b">Panel B</div>
    </av-tabs>
  `,
  imports: [...TABS_IMPORTS],
})
class DisabledTabsHostComponent {}

@Component({
  template: `
    <av-tabs
      [selectedKey]="selected"
      (selectedKeyChange)="onSelectedKeyChange($event)"
    >
      <div av-tabs-list-container>
        <div av-tabs-list>
          <span av-tabs-indicator></span>
          <button av-tabs-tab id="a">A</button>
          <button av-tabs-tab id="b">B</button>
        </div>
      </div>
      <div av-tabs-panel id="a">Panel A</div>
      <div av-tabs-panel id="b">Panel B</div>
    </av-tabs>
  `,
  imports: [...TABS_IMPORTS],
})
class ControlledTabsHostComponent {
  selected: string | null = 'a';

  onSelectedKeyChange(_key: string | null): void {
    // Parent rejects tab changes.
  }
}

@Component({
  template: `
    <div style="width: 220px">
      <av-tabs default-selected-key="a">
        <div av-tabs-list-container>
          <div av-tabs-list aria-label="Overflow">
            <span av-tabs-indicator></span>
            <button av-tabs-tab id="a">Overview</button>
            <button av-tabs-tab id="b">Analytics</button>
            <button av-tabs-tab id="c">Reports</button>
            <button av-tabs-tab id="d">Performance</button>
            <button av-tabs-tab id="e">Engagement</button>
          </div>
        </div>
      </av-tabs>
    </div>
  `,
  imports: [...TABS_IMPORTS],
})
class OverflowTabsHostComponent {}

describe('AvTabsComponent', () => {
  let fixture: ComponentFixture<TabsHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TabsHostComponent);
    fixture.detectChanges();
  });

  it('should render tabs with selected state', () => {
    const tabs = fixture.nativeElement.querySelectorAll('button[av-tabs-tab]');
    expect(tabs.length).toBe(2);
    expect(tabs[0].getAttribute('aria-selected')).toBe('true');
    expect(tabs[1].getAttribute('aria-selected')).toBe('false');
  });

  it('should switch tabs on click', () => {
    const tabs = fixture.nativeElement.querySelectorAll('button[av-tabs-tab]');
    tabs[1].click();
    fixture.detectChanges();

    expect(fixture.componentInstance.selected).toBe('b');
    expect(tabs[1].getAttribute('aria-selected')).toBe('true');
  });
});

describe('AvTabsComponent disabled tabs', () => {
  let fixture: ComponentFixture<DisabledTabsHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisabledTabsHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DisabledTabsHostComponent);
    fixture.detectChanges();
  });

  it('should block selection and use aria-disabled without the native disabled attribute', () => {
    const tabs = fixture.nativeElement.querySelectorAll('button[av-tabs-tab]');
    expect(tabs[1].hasAttribute('disabled')).toBe(false);
    expect(tabs[1].getAttribute('aria-disabled')).toBe('true');
    expect(tabs[1].getAttribute('data-disabled')).toBe('true');

    tabs[1].click();
    fixture.detectChanges();
    expect(tabs[0].getAttribute('aria-selected')).toBe('true');
  });
});

describe('AvTabsComponent controlled mode', () => {
  let fixture: ComponentFixture<ControlledTabsHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlledTabsHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ControlledTabsHostComponent);
    fixture.detectChanges();
  });

  it('should not update selection when parent rejects selectedKeyChange', () => {
    const tabs = fixture.nativeElement.querySelectorAll('button[av-tabs-tab]');
    tabs[1].click();
    fixture.detectChanges();

    expect(fixture.componentInstance.selected).toBe('a');
    expect(tabs[0].getAttribute('aria-selected')).toBe('true');
    expect(tabs[1].getAttribute('aria-selected')).toBe('false');
  });
});

describe('AvTabsListContainerComponent overflow', () => {
  let fixture: ComponentFixture<OverflowTabsHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverflowTabsHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OverflowTabsHostComponent);
    fixture.detectChanges();
  });

  it('should render scroller and chevron controls', () => {
    const host = fixture.nativeElement as HTMLElement;
    expect(host.querySelector('.av-tabs__list-container__scroller')).toBeTruthy();
    expect(host.querySelector('.av-tabs__list-container__scroll-prev')).toBeTruthy();
    expect(host.querySelector('.av-tabs__list-container__scroll-next')).toBeTruthy();
  });
});
