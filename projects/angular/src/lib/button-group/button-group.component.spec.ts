import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvButtonComponent } from '../button/button.component';
import { AvButtonGroupComponent } from './button-group.component';
import { AvButtonGroupSeparatorComponent } from './button-group-separator.component';

@Component({
  template: `
    <av-button-group variant="tertiary" size="sm" [disabled]="groupDisabled">
      <button av-button>First</button>
      <button av-button>
        <span av-button-group-separator></span>
        Second
      </button>
    </av-button-group>
  `,
  imports: [AvButtonGroupComponent, AvButtonComponent, AvButtonGroupSeparatorComponent],
})
class ButtonGroupHostComponent {
  groupDisabled = false;
}

@Component({
  template: `
    <av-button-group [disabled]="true">
      <button av-button>Disabled</button>
      <button av-button [disabled]="false">Enabled</button>
    </av-button-group>
  `,
  imports: [AvButtonGroupComponent, AvButtonComponent],
})
class ButtonGroupOverrideHostComponent {}

describe('AvButtonGroupComponent', () => {
  let fixture: ComponentFixture<ButtonGroupHostComponent>;
  let group: HTMLElement;
  let buttons: HTMLButtonElement[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonGroupHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonGroupHostComponent);
    fixture.detectChanges();

    group = fixture.nativeElement.querySelector('av-button-group')!;
    buttons = [...fixture.nativeElement.querySelectorAll('button[av-button]')];
  });

  it('should render group with orientation class', () => {
    expect(group.classList.contains('av-button-group')).toBeTrue();
    expect(group.classList.contains('av-button-group--horizontal')).toBeTrue();
    expect(group.getAttribute('role')).toBe('group');
  });

  it('should inherit variant and size on child buttons', () => {
    expect(buttons[0].classList.contains('av-button--tertiary')).toBeTrue();
    expect(buttons[0].classList.contains('av-button--sm')).toBeTrue();
    expect(buttons[1].classList.contains('av-button--tertiary')).toBeTrue();
  });

  it('should disable all buttons when group is disabled', () => {
    fixture.componentInstance.groupDisabled = true;
    fixture.detectChanges();

    expect(buttons.every((button) => button.disabled)).toBeTrue();
  });

  it('should render separator inside button', () => {
    const separator = buttons[1].querySelector('[av-button-group-separator]');

    expect(separator).toBeTruthy();
    expect(separator?.classList.contains('av-button-group__separator')).toBeTrue();
    expect(separator?.getAttribute('aria-hidden')).toBe('true');
  });
});

describe('AvButtonGroupComponent disabled override', () => {
  let fixture: ComponentFixture<ButtonGroupOverrideHostComponent>;
  let buttons: HTMLButtonElement[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonGroupOverrideHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonGroupOverrideHostComponent);
    fixture.detectChanges();

    buttons = [...fixture.nativeElement.querySelectorAll('button[av-button]')];
  });

  it('should let a button override group disabled with [disabled]="false"', () => {
    expect(buttons[0].disabled).toBeTrue();
    expect(buttons[1].disabled).toBeFalse();
  });
});
