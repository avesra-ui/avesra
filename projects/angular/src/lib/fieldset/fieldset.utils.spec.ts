import {
  avFieldsetActionsClasses,
  avFieldsetClasses,
  avFieldsetGroupClasses,
  avFieldsetLegendClasses,
} from './fieldset.utils';

describe('avFieldsetClasses', () => {
  it('should return base class', () => {
    expect(avFieldsetClasses()).toBe('av-fieldset');
  });
});

describe('avFieldset slot classes', () => {
  it('should return legend class', () => {
    expect(avFieldsetLegendClasses()).toBe('av-fieldset__legend');
  });

  it('should return field group class', () => {
    expect(avFieldsetGroupClasses()).toBe('av-fieldset__field-group');
  });

  it('should return actions class', () => {
    expect(avFieldsetActionsClasses()).toBe('av-fieldset__actions');
  });
});
