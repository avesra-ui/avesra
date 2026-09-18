import { DOWN_ARROW, END, ESCAPE, HOME, O, UP_ARROW } from '@angular/cdk/keycodes';
import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { AvButtonComponent } from '../button/button.component';
import { AvMenuItemComponent } from '../menu-item/menu-item.component';
import { AvDropdownMenuComponent } from './dropdown-menu.component';
import { AvDropdownPopoverComponent } from './dropdown-popover.component';
import { AvDropdownTriggerDirective } from './dropdown-trigger.directive';
import { AvDropdownComponent } from './dropdown.component';
import { AV_DROPDOWN_ENTER_MS, AV_DROPDOWN_EXIT_MS } from './dropdown.utils';

function keydown(target: EventTarget, key: string, keyCode: number): void {
  const event = new KeyboardEvent('keydown', {
    key,
    bubbles: true,
    cancelable: true,
  });
  // Chromium ignores `keyCode` in the KeyboardEvent constructor; ListKeyManager still reads it.
  Object.defineProperty(event, 'keyCode', { get: () => keyCode });
  Object.defineProperty(event, 'which', { get: () => keyCode });
  target.dispatchEvent(event);
}

@Component({
  template: `
    <av-dropdown [(open)]="open">
      <button av-button av-dropdown-trigger>Actions</button>
      <av-dropdown-popover>
        <div av-dropdown-menu (action)="onAction($event)">
          <div av-menu-item id="new-file" textValue="New file">New file</div>
          <div av-menu-item id="open-file" textValue="Open file">Open file</div>
          <div av-menu-item id="delete-file" textValue="Delete file" variant="danger">
            Delete
          </div>
        </div>
      </av-dropdown-popover>
    </av-dropdown>
  `,
  imports: [
    AvDropdownComponent,
    AvDropdownTriggerDirective,
    AvDropdownPopoverComponent,
    AvDropdownMenuComponent,
    AvMenuItemComponent,
    AvButtonComponent,
  ],
})
class DropdownHostComponent {
  open = signal(false);
  lastAction = '';
  actionCount = 0;

  onAction(key: string): void {
    this.lastAction = key;
    this.actionCount += 1;
  }
}

@Component({
  template: `
    <av-dropdown [(open)]="open">
      <button av-button av-dropdown-trigger>Fruit</button>
      <av-dropdown-popover>
        <div
          av-dropdown-menu
          [selection-mode]="mode"
          [(selectedKeys)]="selectedKeys"
          (action)="onAction($event)"
        >
          <div av-menu-item id="apple" textValue="Apple">Apple</div>
          <div av-menu-item id="banana" textValue="Banana">Banana</div>
        </div>
      </av-dropdown-popover>
    </av-dropdown>
  `,
  imports: [
    AvDropdownComponent,
    AvDropdownTriggerDirective,
    AvDropdownPopoverComponent,
    AvDropdownMenuComponent,
    AvMenuItemComponent,
    AvButtonComponent,
  ],
})
class SelectionHostComponent {
  open = signal(false);
  mode: 'single' | 'multiple' = 'single';
  selectedKeys = signal<string[]>([]);
  lastAction = '';

  onAction(key: string): void {
    this.lastAction = key;
  }
}

describe('AvDropdownComponent', () => {
  let fixture: ComponentFixture<DropdownHostComponent>;
  let trigger: HTMLButtonElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DropdownHostComponent);
    fixture.detectChanges();
    trigger = fixture.nativeElement.querySelector('[av-dropdown-trigger]')!;
  });

  function openByClick(): void {
    trigger.dispatchEvent(new MouseEvent('mousedown', { button: 0, bubbles: true }));
    trigger.click();
    fixture.detectChanges();
  }

  function menuItems(): NodeListOf<HTMLElement> {
    return document.querySelectorAll('[av-menu-item]');
  }

  function menuPanel(): HTMLElement | null {
    return document.querySelector('[av-dropdown-menu]');
  }

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('opens on trigger click', () => {
    openByClick();
    expect(fixture.componentInstance.open()).toBe(true);
    expect(menuPanel()).toBeTruthy();
  });

  it('sets aria-expanded and aria-controls while open', () => {
    openByClick();
    expect(trigger.getAttribute('aria-expanded')).toBe('true');
    expect(trigger.getAttribute('aria-controls')).toContain('av-dropdown-menu-');
  });

  it('closes after selecting an item in default mode', fakeAsync(() => {
    openByClick();
    tick(AV_DROPDOWN_ENTER_MS);
    fixture.detectChanges();

    menuItems()[0].click();
    fixture.detectChanges();

    expect(fixture.componentInstance.lastAction).toBe('new-file');
    expect(fixture.componentInstance.actionCount).toBe(1);
    expect(fixture.componentInstance.open()).toBe(false);
  }));

  it('fires action only once per activation', fakeAsync(() => {
    openByClick();
    tick(AV_DROPDOWN_ENTER_MS);
    fixture.detectChanges();

    menuItems()[0].click();
    fixture.detectChanges();

    expect(fixture.componentInstance.actionCount).toBe(1);
  }));

  it('applies danger variant class', () => {
    openByClick();
    fixture.detectChanges();

    const dangerItem = menuItems()[2];
    expect(dangerItem.classList.contains('av-menu-item--danger')).toBe(true);
  });

  it('closes on Escape and restores focus to trigger', fakeAsync(() => {
    openByClick();
    tick(AV_DROPDOWN_ENTER_MS);
    fixture.detectChanges();

    keydown(menuPanel()!, 'Escape', ESCAPE);
    fixture.detectChanges();
    tick(AV_DROPDOWN_EXIT_MS + 50);
    tick(1);
    fixture.detectChanges();

    expect(fixture.componentInstance.open()).toBe(false);
    expect(document.activeElement).toBe(trigger);
  }));

  it('closes on backdrop click', fakeAsync(() => {
    openByClick();
    tick(AV_DROPDOWN_ENTER_MS);
    fixture.detectChanges();

    const backdrop = document.querySelector('.cdk-overlay-backdrop') as HTMLElement;
    expect(backdrop).toBeTruthy();
    backdrop.click();
    fixture.detectChanges();

    expect(fixture.componentInstance.open()).toBe(false);
  }));

  it('focuses first item when opened via keyboard', fakeAsync(() => {
    trigger.focus();
    keydown(trigger, 'ArrowDown', DOWN_ARROW);
    fixture.detectChanges();
    tick(AV_DROPDOWN_ENTER_MS);
    fixture.detectChanges();

    expect(fixture.componentInstance.open()).toBe(true);
    expect(document.activeElement).toBe(menuItems()[0]);
  }));

  it('does not force-focus first item when opened via mouse', fakeAsync(() => {
    trigger.focus();
    openByClick();
    tick(AV_DROPDOWN_ENTER_MS);
    fixture.detectChanges();

    expect(fixture.componentInstance.open()).toBe(true);
    expect(document.activeElement).not.toBe(menuItems()[0]);
  }));

  it('navigates items with ArrowDown and ArrowUp', fakeAsync(() => {
    trigger.focus();
    keydown(trigger, 'ArrowDown', DOWN_ARROW);
    fixture.detectChanges();
    tick(AV_DROPDOWN_ENTER_MS);
    fixture.detectChanges();

    const panel = menuPanel()!;
    keydown(panel, 'ArrowDown', DOWN_ARROW);
    fixture.detectChanges();
    expect(document.activeElement).toBe(menuItems()[1]);

    keydown(panel, 'ArrowUp', UP_ARROW);
    fixture.detectChanges();
    expect(document.activeElement).toBe(menuItems()[0]);
  }));

  it('supports Home and End keys', fakeAsync(() => {
    trigger.focus();
    keydown(trigger, 'ArrowDown', DOWN_ARROW);
    fixture.detectChanges();
    tick(AV_DROPDOWN_ENTER_MS);
    fixture.detectChanges();

    const panel = menuPanel()!;
    keydown(panel, 'End', END);
    fixture.detectChanges();
    expect(document.activeElement).toBe(menuItems()[2]);

    keydown(panel, 'Home', HOME);
    fixture.detectChanges();
    expect(document.activeElement).toBe(menuItems()[0]);
  }));

  it('supports typeahead focus', fakeAsync(() => {
    trigger.focus();
    keydown(trigger, 'ArrowDown', DOWN_ARROW);
    fixture.detectChanges();
    tick(AV_DROPDOWN_ENTER_MS);
    fixture.detectChanges();

    keydown(menuPanel()!, 'o', O);
    tick(200);
    fixture.detectChanges();
    expect(document.activeElement).toBe(menuItems()[1]);
  }));
});

describe('AvDropdownComponent selection modes', () => {
  let fixture: ComponentFixture<SelectionHostComponent>;
  let trigger: HTMLButtonElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectionHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectionHostComponent);
    fixture.detectChanges();
    trigger = fixture.nativeElement.querySelector('[av-dropdown-trigger]')!;
  });

  function openMenu(): void {
    trigger.click();
    fixture.detectChanges();
  }

  it('keeps menu open in single selection mode', fakeAsync(() => {
    fixture.componentInstance.mode = 'single';
    fixture.detectChanges();
    openMenu();
    tick(AV_DROPDOWN_ENTER_MS);
    fixture.detectChanges();

    const item = document.querySelector('[av-menu-item]') as HTMLElement;
    expect(item.getAttribute('role')).toBe('menuitemradio');
    item.click();
    fixture.detectChanges();

    expect(fixture.componentInstance.lastAction).toBe('apple');
    expect(fixture.componentInstance.selectedKeys()).toEqual(['apple']);
    expect(fixture.componentInstance.open()).toBe(true);
  }));

  it('keeps menu open in multiple selection mode', fakeAsync(() => {
    fixture.componentInstance.mode = 'multiple';
    fixture.detectChanges();
    openMenu();
    tick(AV_DROPDOWN_ENTER_MS);
    fixture.detectChanges();

    const items = document.querySelectorAll('[av-menu-item]');
    expect(items[0].getAttribute('role')).toBe('menuitemcheckbox');
    (items[0] as HTMLElement).click();
    fixture.detectChanges();
    (items[1] as HTMLElement).click();
    fixture.detectChanges();

    expect(fixture.componentInstance.selectedKeys()).toEqual(['apple', 'banana']);
    expect(fixture.componentInstance.open()).toBe(true);
  }));
});
