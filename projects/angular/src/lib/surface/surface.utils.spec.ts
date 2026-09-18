import { avSurfaceClasses } from './surface.utils';

describe('surface.utils', () => {
  it('should return default surface classes', () => {
    expect(avSurfaceClasses()).toBe('av-surface av-surface--default');
  });

  it('should return variant modifier classes', () => {
    expect(avSurfaceClasses({ variant: 'secondary' })).toBe('av-surface av-surface--secondary');
    expect(avSurfaceClasses({ variant: 'transparent' })).toBe('av-surface av-surface--transparent');
    expect(avSurfaceClasses({ variant: 'tertiary' })).toBe('av-surface av-surface--tertiary');
  });
});
