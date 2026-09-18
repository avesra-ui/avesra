import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvToggleButtonComponent } from '../toggle-button/toggle-button.component';
import { AvToggleButtonGroupComponent } from './toggle-button-group.component';
import { AvToggleButtonGroupSeparatorComponent } from './toggle-button-group-separator.component';

@Component({
  template: `
    <av-toggle-button-group
      size="sm"
      selection-mode="multiple"
      [disabled]="groupDisabled"
      [(selectedKeys)]="selectedKeys"
    >
      <button av-toggle-button value="bold" icon-only aria-label="Bold">B</button>
      <button av-toggle-button value="italic" icon-only aria-label="Italic">
        <span av-toggle-button-group-separator></span>
        I
      </button>
    </av-toggle-button-group>
  `,
  imports: [
    AvToggleButtonGroupComponent,
    AvToggleButtonComponent,
    AvToggleButtonGroupSeparatorComponent,
  ],
})
class ToggleButtonGroupHostComponent {
  groupDisabled = false;
  selectedKeys = signal<string[]>([]);
}

describe('AvToggleButtonGroupComponent', () => {
  let fixture: ComponentFixture<ToggleButtonGroupHostComponent>;
  let host: ToggleButtonGroupHostComponent;
  let group: HTMLElement;
  let buttons: HTMLButtonElement[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleButtonGroupHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToggleButtonGroupHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();

    group = fixture.nativeElement.querySelector('av-toggle-button-group')!;
    buttons = [...fixture.nativeElement.querySelectorAll('button[av-toggle-button]')];
  });

  it('should render group with orientation class', () => {
    expect(group.classList.contains('av-toggle-button-group')).toBeTrue();
    expect(group.classList.contains('av-toggle-button-group--horizontal')).toBeTrue();
    expect(group.getAttribute('role')).toBe('group');
  });

  it('should inherit size on child toggle buttons', () => {
    expect(buttons[0].classList.contains('av-toggle-button--sm')).toBeTrue();
    expect(buttons[1].classList.contains('av-toggle-button--sm')).toBeTrue();
  });

  it('should manage multiple selection through the group', () => {
    buttons[0].click();
    buttons[1].click();
    fixture.detectChanges();

    expect(host.selectedKeys()).toEqual(['bold', 'italic']);
    expect(buttons[0].getAttribute('aria-pressed')).toBe('true');
    expect(buttons[1].getAttribute('aria-pressed')).toBe('true');
  });

  it('should disable all buttons when group is disabled', () => {
    host.groupDisabled = true;
    fixture.detectChanges();

    expect(buttons.every((button) => button.disabled)).toBeTrue();
  });

  it('should render separator inside button', () => {
    const separator = buttons[1].querySelector('[av-toggle-button-group-separator]');

    expect(separator).toBeTruthy();
    expect(separator?.classList.contains('av-toggle-button-group__separator')).toBeTrue();
    expect(separator?.getAttribute('aria-hidden')).toBe('true');
  });
});
