import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvFieldsetActionsComponent } from './fieldset-actions.component';
import { AvFieldsetGroupComponent } from './fieldset-group.component';
import { AvFieldsetLegendComponent } from './fieldset-legend.component';
import { AvFieldsetComponent } from './fieldset.component';

@Component({
  template: `
    <fieldset av-fieldset [disabled]="disabled" class="w-96">
      <legend av-fieldset-legend>Profile Settings</legend>
      <div av-fieldset-group>
        <input name="name" />
      </div>
      <div av-fieldset-actions>
        <button type="submit">Save</button>
      </div>
    </fieldset>
  `,
  imports: [
    AvFieldsetComponent,
    AvFieldsetLegendComponent,
    AvFieldsetGroupComponent,
    AvFieldsetActionsComponent,
  ],
})
class FieldsetHostComponent {
  disabled = false;
}

describe('AvFieldsetComponent', () => {
  let fixture: ComponentFixture<FieldsetHostComponent>;
  let fieldset: HTMLFieldSetElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldsetHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FieldsetHostComponent);
    fixture.detectChanges();
    fieldset = fixture.nativeElement.querySelector('fieldset')!;
  });

  it('should create with compound structure and classes', () => {
    expect(fieldset.classList.contains('av-fieldset')).toBeTrue();
    expect(fieldset.classList.contains('w-96')).toBeTrue();
    expect(fieldset.getAttribute('data-slot')).toBe('fieldset');

    const legend = fixture.nativeElement.querySelector('legend')!;
    expect(legend.classList.contains('av-fieldset__legend')).toBeTrue();
    expect(legend.getAttribute('data-slot')).toBe('fieldset-legend');
    expect(legend.textContent?.trim()).toBe('Profile Settings');

    const group = fixture.nativeElement.querySelector('[av-fieldset-group]')!;
    expect(group.classList.contains('av-fieldset__field-group')).toBeTrue();
    expect(group.getAttribute('data-slot')).toBe('fieldset-field-group');

    const actions = fixture.nativeElement.querySelector('[av-fieldset-actions]')!;
    expect(actions.classList.contains('av-fieldset__actions')).toBeTrue();
    expect(actions.getAttribute('data-slot')).toBe('fieldset-actions');
  });

  it('should reflect disabled state on fieldset', () => {
    fixture.componentInstance.disabled = true;
    fixture.detectChanges();

    expect(fieldset.disabled).toBeTrue();
    expect(fieldset.getAttribute('data-disabled')).toBe('true');
  });
});
