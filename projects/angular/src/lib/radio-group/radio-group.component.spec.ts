import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { AvRadioComponent } from '../radio/radio.component';
import { AvRadioControlComponent } from '../radio/radio-control.component';
import { AvRadioIndicatorComponent } from '../radio/radio-indicator.component';
import { AvLabelComponent } from '../label/label.component';
import { AvRadioGroupComponent } from './radio-group.component';

@Component({
  template: `
    <av-radio-group [(value)]="selectedValue">
      <div av-radio value="coding">
        <span av-radio-control>
          <span av-radio-indicator></span>
        </span>
        <label av-label>Coding</label>
      </div>
      <div av-radio value="design">
        <span av-radio-control>
          <span av-radio-indicator></span>
        </span>
        <label av-label>Design</label>
      </div>
    </av-radio-group>
  `,
  imports: [
    AvRadioGroupComponent,
    AvRadioComponent,
    AvRadioControlComponent,
    AvRadioIndicatorComponent,
    AvLabelComponent,
  ],
})
class RadioGroupHostComponent {
  readonly selectedValue = signal<string | null>(null);
}

describe('AvRadioGroupComponent', () => {
  let fixture: ComponentFixture<RadioGroupHostComponent>;
  let host: RadioGroupHostComponent;
  let group: HTMLElement;
  let radios: HTMLElement[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioGroupHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RadioGroupHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();

    group = fixture.nativeElement.querySelector('av-radio-group')!;
    radios = Array.from(group.querySelectorAll('[av-radio]')) as HTMLElement[];
  });

  it('should render group with default classes', () => {
    expect(group.classList.contains('av-radio-group')).toBeTrue();
    expect(group.classList.contains('av-radio-group--primary')).toBeTrue();
    expect(group.classList.contains('av-radio-group--vertical')).toBeTrue();
    expect(group.getAttribute('data-slot')).toBe('radio-group');
    expect(group.getAttribute('role')).toBe('radiogroup');
  });

  it('should render child radios', () => {
    expect(radios.length).toBe(2);
  });

  it('should select a single value in the group', () => {
    radios[0].click();
    fixture.detectChanges();

    expect(host.selectedValue()).toBe('coding');
    expect(radios[0].getAttribute('aria-checked')).toBe('true');
    expect(radios[1].getAttribute('aria-checked')).toBe('false');

    radios[1].click();
    fixture.detectChanges();

    expect(host.selectedValue()).toBe('design');
    expect(radios[0].getAttribute('aria-checked')).toBe('false');
    expect(radios[1].getAttribute('aria-checked')).toBe('true');
  });

  it('should not deselect when clicking the selected radio again', () => {
    radios[0].click();
    fixture.detectChanges();
    radios[0].click();
    fixture.detectChanges();

    expect(host.selectedValue()).toBe('coding');
    expect(radios[0].getAttribute('aria-checked')).toBe('true');
  });
});

@Component({
  template: `
    <av-radio-group [formControl]="control">
      <div av-radio value="coding">
        <span av-radio-control>
          <span av-radio-indicator></span>
        </span>
      </div>
      <div av-radio value="design">
        <span av-radio-control>
          <span av-radio-indicator></span>
        </span>
      </div>
    </av-radio-group>
  `,
  imports: [
    ReactiveFormsModule,
    AvRadioGroupComponent,
    AvRadioComponent,
    AvRadioControlComponent,
    AvRadioIndicatorComponent,
  ],
})
class ReactiveRadioGroupHostComponent {
  readonly control = new FormControl<string | null>('design');
}

describe('AvRadioGroupComponent with reactive forms', () => {
  let fixture: ComponentFixture<ReactiveRadioGroupHostComponent>;
  let host: ReactiveRadioGroupHostComponent;
  let radios: HTMLElement[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveRadioGroupHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReactiveRadioGroupHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();

    radios = Array.from(
      fixture.nativeElement.querySelectorAll('[av-radio]'),
    ) as HTMLElement[];
  });

  it('should reflect initial form control value', () => {
    expect(radios[0].getAttribute('aria-checked')).toBe('false');
    expect(radios[1].getAttribute('aria-checked')).toBe('true');
    expect(host.control.value).toBe('design');
  });

  it('should reflect form control value changes', () => {
    host.control.setValue('coding');
    fixture.detectChanges();

    expect(radios[0].getAttribute('aria-checked')).toBe('true');
    expect(radios[1].getAttribute('aria-checked')).toBe('false');
  });

  it('should update form control value on click', () => {
    radios[0].click();
    fixture.detectChanges();

    expect(host.control.value).toBe('coding');
  });
});
