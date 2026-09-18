import {
  avAccordionBodyClasses,
  avAccordionBodyInnerClasses,
  avAccordionClasses,
  avAccordionHeadingClasses,
  avAccordionIndicatorClasses,
  avAccordionItemClasses,
  avAccordionPanelClasses,
  avAccordionTriggerClasses,
} from './accordion.utils';

describe('accordion utils', () => {
  it('should return BEM class names', () => {
    expect(avAccordionClasses()).toBe('av-accordion');
    expect(avAccordionClasses({ variant: 'surface' })).toBe(
      'av-accordion av-accordion--surface',
    );
    expect(avAccordionItemClasses()).toBe('av-accordion__item');
    expect(avAccordionHeadingClasses()).toBe('av-accordion__heading');
    expect(avAccordionTriggerClasses()).toBe('av-accordion__trigger');
    expect(avAccordionPanelClasses()).toBe('av-accordion__panel');
    expect(avAccordionBodyClasses()).toBe('av-accordion__body');
    expect(avAccordionIndicatorClasses()).toBe('av-accordion__indicator');
  });

  it('should merge inner body classes', () => {
    expect(avAccordionBodyInnerClasses()).toBe('av-accordion__body-inner');
    expect(avAccordionBodyInnerClasses('p-2')).toBe('av-accordion__body-inner p-2');
  });
});
