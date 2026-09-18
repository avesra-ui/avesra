import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { AvLabelComponent } from '../label/label.component';
import { AvListBoxComponent } from '../list-box/list-box.component';
import { AvListBoxItemComponent } from '../list-box-item/list-box-item.component';
import { AvListBoxItemIndicatorComponent } from '../list-box-item/list-box-item-indicator.component';
import { AvSelectIndicatorComponent } from './select-indicator.component';
import { AvSelectPopoverComponent } from './select-popover.component';
import { AvSelectTriggerComponent } from './select-trigger.component';
import { AvSelectValueComponent } from './select-value.component';
import { AvSelectComponent } from './select.component';
import { AV_SELECT_ENTER_MS, AV_SELECT_EXIT_MS } from './select.utils';

@Component({
  template: `
    <div av-select [(open)]="open" [(selectedKeys)]="selectedKeys" [placeholder]="placeholder">
      <label av-label>State</label>
      <button av-select-trigger>
        <span av-select-value></span>
        <span av-select-indicator></span>
      </button>
      <av-select-popover>
        <div av-list-box aria-label="States" selection-mode="single">
          <div av-list-box-item id="florida" textValue="Florida">
            Florida
            <span av-list-box-item-indicator></span>
          </div>
          <div av-list-box-item id="texas" textValue="Texas">
            Texas
            <span av-list-box-item-indicator></span>
          </div>
        </div>
      </av-select-popover>
    </div>
  `,
  imports: [
    AvSelectComponent,
    AvSelectTriggerComponent,
    AvSelectValueComponent,
    AvSelectIndicatorComponent,
    AvSelectPopoverComponent,
    AvListBoxComponent,
    AvListBoxItemComponent,
    AvListBoxItemIndicatorComponent,
    AvLabelComponent,
  ],
})
class SelectHostComponent {
  open = signal(false);
  selectedKeys = signal<string[]>([]);
  placeholder = 'Select one';
}

@Component({
  template: `
    <div av-select [formControl]="control" selection-mode="single" [(selectedKeys)]="selectedKeys">
      <button av-select-trigger>
        <span av-select-value></span>
        <span av-select-indicator></span>
      </button>
      <av-select-popover>
        <div av-list-box aria-label="Options" selection-mode="single"></div>
      </av-select-popover>
    </div>
  `,
  imports: [
    ReactiveFormsModule,
    AvSelectComponent,
    AvSelectTriggerComponent,
    AvSelectValueComponent,
    AvSelectIndicatorComponent,
    AvSelectPopoverComponent,
    AvListBoxComponent,
  ],
})
class SelectFormHostComponent {
  control = new FormControl<string | null>(null);
  selectedKeys = signal<string[]>([]);
}

describe('AvSelectComponent', () => {
  let fixture: ComponentFixture<SelectHostComponent>;
  let host: SelectHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
  });

  function openByClick(): void {
    const trigger: HTMLButtonElement = fixture.nativeElement.querySelector(
      '[data-slot="select-trigger"]',
    );
    trigger.click();
    fixture.detectChanges();
  }

  function listItems(): NodeListOf<HTMLElement> {
    return document.querySelectorAll('[av-list-box-item]');
  }

  it('renders select root and trigger classes', () => {
    const root = fixture.nativeElement.querySelector('[data-slot="select"]');
    const trigger = fixture.nativeElement.querySelector('[data-slot="select-trigger"]');

    expect(root.className).toContain('av-select');
    expect(trigger.className).toContain('av-select__trigger');
  });

  it('shows placeholder when nothing is selected', () => {
    const value = fixture.nativeElement.querySelector('[data-slot="select-value"]');
    expect(value.textContent.trim()).toBe('Select one');
    expect(value.getAttribute('data-placeholder')).toBe('true');
  });

  it('opens on trigger click and closes after animation', fakeAsync(() => {
    const trigger: HTMLButtonElement = fixture.nativeElement.querySelector(
      '[data-slot="select-trigger"]',
    );

    openByClick();
    expect(host.open()).toBe(true);
    expect(trigger.getAttribute('aria-expanded')).toBe('true');
    expect(document.querySelector('[data-slot="select-popover"]')).toBeTruthy();

    host.open.set(false);
    fixture.detectChanges();
    tick(AV_SELECT_EXIT_MS + 60);
    fixture.detectChanges();
    expect(trigger.getAttribute('aria-expanded')).toBe('false');
  }));

  it('opens with ArrowDown', () => {
    const trigger: HTMLButtonElement = fixture.nativeElement.querySelector(
      '[data-slot="select-trigger"]',
    );

    trigger.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
    fixture.detectChanges();
    expect(host.open()).toBe(true);
  });

  it('updates selected keys when an option is chosen', fakeAsync(() => {
    openByClick();
    tick(AV_SELECT_ENTER_MS + 10);
    fixture.detectChanges();

    const items = listItems();
    expect(items.length).toBeGreaterThan(0);
    items[0].click();
    fixture.detectChanges();
    tick(AV_SELECT_EXIT_MS + 60);
    fixture.detectChanges();

    expect(host.selectedKeys()).toEqual(['florida']);
    expect(host.open()).toBe(false);

    const value = fixture.nativeElement.querySelector('[data-slot="select-value"]');
    expect(value.textContent.trim()).toBe('Florida');
    expect(value.getAttribute('data-placeholder')).toBeNull();
  }));

  it('reflects controlled selectedKeys in the value slot', () => {
    host.selectedKeys.set(['texas']);
    fixture.detectChanges();

    const value = fixture.nativeElement.querySelector('[data-slot="select-value"]');
    // Label cache fills after items mount in the overlay; fallback is the key.
    expect(value.textContent.trim()).toMatch(/texas|Texas/i);
    expect(value.getAttribute('data-placeholder')).toBeNull();
  });
});

describe('AvSelectComponent forms', () => {
  it('implements ControlValueAccessor for single selection', () => {
    const fixture = TestBed.createComponent(SelectFormHostComponent);
    fixture.detectChanges();

    fixture.componentInstance.control.setValue('b');
    fixture.detectChanges();

    expect(fixture.componentInstance.selectedKeys()).toEqual(['b']);

    fixture.componentInstance.control.setValue(null);
    fixture.detectChanges();
    expect(fixture.componentInstance.selectedKeys()).toEqual([]);
  });
});
