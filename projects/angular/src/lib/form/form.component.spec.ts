import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvFormComponent } from './form.component';
import { AvFormContext } from './form.context';

@Component({
  template: `
    <form
      av-form
      action="/submit"
      method="post"
      novalidate
      aria-label="Profile form"
      [validationErrors]="validationErrors"
    >
      <input name="email" required />
    </form>
  `,
  imports: [AvFormComponent],
})
class FormHostComponent {
  validationErrors = { email: 'Invalid email' };
}

describe('AvFormComponent', () => {
  let fixture: ComponentFixture<FormHostComponent>;
  let form: HTMLFormElement;
  let context: AvFormContext;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormHostComponent);
    fixture.detectChanges();
    form = fixture.nativeElement.querySelector('form')!;
    context = fixture.debugElement.children[0].injector.get(AvFormContext);
  });

  it('should create with default classes and data slot', () => {
    expect(form.classList.contains('av-form')).toBeTrue();
    expect(form.getAttribute('data-slot')).toBe('form');
  });

  it('should bind native form attributes', () => {
    expect(form.getAttribute('action')).toBe('/submit');
    expect(form.getAttribute('method')).toBe('post');
    expect(form.hasAttribute('novalidate')).toBeTrue();
    expect(form.getAttribute('aria-label')).toBe('Profile form');
  });

  it('should expose validation state through context', () => {
    expect(context.validationBehavior()).toBe('native');
    expect(context.validationErrors()).toEqual({ email: 'Invalid email' });
  });

  it('should focus the first invalid field on invalid event', () => {
    const input = form.querySelector('input') as HTMLInputElement;
    const focusSpy = spyOn(input, 'focus');

    input.dispatchEvent(new Event('invalid', { bubbles: false, cancelable: true }));

    expect(focusSpy).toHaveBeenCalled();
  });

  it('should not focus when invalid event is prevented', () => {
    const input = form.querySelector('input') as HTMLInputElement;
    const focusSpy = spyOn(input, 'focus');

    const preventedEvent = new Event('invalid', { bubbles: false, cancelable: true });
    preventedEvent.preventDefault();
    input.dispatchEvent(preventedEvent);

    expect(focusSpy).not.toHaveBeenCalled();
  });
});
