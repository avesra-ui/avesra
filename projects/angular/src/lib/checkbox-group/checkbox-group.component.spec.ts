import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { AvCheckboxComponent } from '../checkbox/checkbox.component';
import { AvCheckboxControlComponent } from '../checkbox/checkbox-control.component';
import { AvCheckboxIndicatorComponent } from '../checkbox/checkbox-indicator.component';
import { AvLabelComponent } from '../label/label.component';
import { AvCheckboxGroupComponent } from './checkbox-group.component';

@Component({
  template: `
    <av-checkbox-group [(value)]="selectedValues">
      <div av-checkbox value="coding">
        <span av-checkbox-control>
          <span av-checkbox-indicator></span>
        </span>
        <label av-label>Coding</label>
      </div>
      <div av-checkbox value="design">
        <span av-checkbox-control>
          <span av-checkbox-indicator></span>
        </span>
        <label av-label>Design</label>
      </div>
    </av-checkbox-group>
  `,
  imports: [
    AvCheckboxGroupComponent,
    AvCheckboxComponent,
    AvCheckboxControlComponent,
    AvCheckboxIndicatorComponent,
    AvLabelComponent,
  ],
})
class CheckboxGroupHostComponent {
  readonly selectedValues = signal<string[]>([]);
}

describe('AvCheckboxGroupComponent', () => {
  let fixture: ComponentFixture<CheckboxGroupHostComponent>;
  let host: CheckboxGroupHostComponent;
  let group: HTMLElement;
  let checkboxes: HTMLElement[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxGroupHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckboxGroupHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();

    group = fixture.nativeElement.querySelector('av-checkbox-group')!;
    checkboxes = Array.from(group.querySelectorAll('[av-checkbox]')) as HTMLElement[];
  });

  it('should render group with default classes', () => {
    expect(group.classList.contains('av-checkbox-group')).toBeTrue();
    expect(group.classList.contains('av-checkbox-group--primary')).toBeTrue();
    expect(group.getAttribute('data-slot')).toBe('checkbox-group');
    expect(group.getAttribute('role')).toBe('group');
  });

  it('should render child checkboxes', () => {
    expect(checkboxes.length).toBe(2);
  });

  it('should toggle values in the group', () => {
    checkboxes[0].click();
    fixture.detectChanges();

    expect(host.selectedValues()).toEqual(['coding']);
    expect(checkboxes[0].getAttribute('aria-checked')).toBe('true');
    expect(checkboxes[1].getAttribute('aria-checked')).toBe('false');

    checkboxes[1].click();
    fixture.detectChanges();

    expect(host.selectedValues()).toEqual(['coding', 'design']);
  });

  it('should deselect a value when clicked again', () => {
    checkboxes[0].click();
    fixture.detectChanges();
    checkboxes[0].click();
    fixture.detectChanges();

    expect(host.selectedValues()).toEqual([]);
    expect(checkboxes[0].getAttribute('aria-checked')).toBe('false');
  });
});

@Component({
  template: `
    <av-checkbox-group [formControl]="control">
      <div av-checkbox value="coding">
        <span av-checkbox-control>
          <span av-checkbox-indicator></span>
        </span>
      </div>
      <div av-checkbox value="design">
        <span av-checkbox-control>
          <span av-checkbox-indicator></span>
        </span>
      </div>
    </av-checkbox-group>
  `,
  imports: [
    ReactiveFormsModule,
    AvCheckboxGroupComponent,
    AvCheckboxComponent,
    AvCheckboxControlComponent,
    AvCheckboxIndicatorComponent,
  ],
})
class ReactiveCheckboxGroupHostComponent {
  readonly control = new FormControl<string[]>(['design']);
}

describe('AvCheckboxGroupComponent with reactive forms', () => {
  let fixture: ComponentFixture<ReactiveCheckboxGroupHostComponent>;
  let host: ReactiveCheckboxGroupHostComponent;
  let checkboxes: HTMLElement[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveCheckboxGroupHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReactiveCheckboxGroupHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();

    checkboxes = Array.from(
      fixture.nativeElement.querySelectorAll('[av-checkbox]'),
    ) as HTMLElement[];
  });

  it('should reflect initial form control value', () => {
    expect(checkboxes[0].getAttribute('aria-checked')).toBe('false');
    expect(checkboxes[1].getAttribute('aria-checked')).toBe('true');
    expect(host.control.value).toEqual(['design']);
  });

  it('should reflect form control value changes', () => {
    host.control.setValue(['coding']);
    fixture.detectChanges();

    expect(checkboxes[0].getAttribute('aria-checked')).toBe('true');
    expect(checkboxes[1].getAttribute('aria-checked')).toBe('false');
  });

  it('should update form control value on click', () => {
    checkboxes[0].click();
    fixture.detectChanges();

    expect(host.control.value).toEqual(['design', 'coding']);
  });

  it('should remove value from form control when deselected', () => {
    checkboxes[1].click();
    fixture.detectChanges();

    expect(host.control.value).toEqual([]);
  });
});
