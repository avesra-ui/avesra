import { ComponentFixture, TestBed } from '@angular/core/testing';

import { avButtonClasses } from './button.utils';

describe('avButtonClasses', () => {
  it('should return base and default variant classes', () => {
    expect(avButtonClasses()).toBe('av-button av-button--primary av-button--md');
  });

  it('should append modifier classes', () => {
    expect(
      avButtonClasses({
        variant: 'outline',
        size: 'sm',
        fullWidth: true,
        iconOnly: true,
      }),
    ).toBe(
      'av-button av-button--outline av-button--sm av-button--full-width av-button--icon-only',
    );
  });
});
