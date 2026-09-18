import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  AvKbdAbbrComponent,
  AvKbdComponent,
  AvKbdContentComponent,
} from './index';
import type { AvKbdKey, AvKbdVariant } from './index';

@Component({
  template: `
    <kbd av-kbd [variant]="variant">
      <abbr av-kbd-abbr [key-value]="keyValue"></abbr>
      <span av-kbd-content>{{ content }}</span>
    </kbd>
  `,
  imports: [AvKbdComponent, AvKbdAbbrComponent, AvKbdContentComponent],
})
class KbdHostComponent {
  variant: AvKbdVariant = 'default';
  keyValue: AvKbdKey = 'command';
  content = 'K';
}

describe('AvKbdComponent', () => {
  let fixture: ComponentFixture<KbdHostComponent>;
  let host: KbdHostComponent;
  let kbd: HTMLElement;
  let abbr: HTMLElement;
  let content: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KbdHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KbdHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();

    kbd = fixture.nativeElement.querySelector('kbd')!;
    abbr = fixture.nativeElement.querySelector('abbr')!;
    content = fixture.nativeElement.querySelector('span[av-kbd-content]')!;
  });

  it('should render with base classes', () => {
    expect(kbd.classList.contains('av-kbd')).toBe(true);
    expect(kbd.getAttribute('data-slot')).toBe('kbd');
  });

  it('should apply light variant', () => {
    host.variant = 'light';
    fixture.detectChanges();

    expect(kbd.classList.contains('av-kbd--light')).toBe(true);
  });

  it('should render abbr with symbol and title', () => {
    expect(abbr.classList.contains('av-kbd__abbr')).toBe(true);
    expect(abbr.textContent?.trim()).toBe('⌘');
    expect(abbr.getAttribute('title')).toBe('Command');
  });

  it('should render content with slot class', () => {
    expect(content.classList.contains('av-kbd__content')).toBe(true);
    expect(content.textContent?.trim()).toBe('K');
  });

  it('should update abbr when key changes', () => {
    host.keyValue = 'shift';
    fixture.detectChanges();

    expect(abbr.textContent?.trim()).toBe('⇧');
    expect(abbr.getAttribute('title')).toBe('Shift');
  });
});
