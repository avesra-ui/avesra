import {
  avTypographyClasses,
  avTypographyHeadingType,
  avTypographyParagraphType,
  avTypographyProseClasses,
} from './typography.utils';

describe('avTypographyClasses', () => {
  it('returns body defaults', () => {
    expect(avTypographyClasses()).toBe(
      'av-typography av-typography--body av-typography--align-start av-typography--color-default',
    );
  });

  it('applies type, align, color, weight, and truncate', () => {
    expect(
      avTypographyClasses({
        type: 'h1',
        align: 'center',
        color: 'muted',
        weight: 'bold',
        truncate: true,
      }),
    ).toBe(
      'av-typography av-typography--h1 av-typography--align-center av-typography--color-muted av-typography--weight-bold av-typography--truncate',
    );
  });
});

describe('avTypography helpers', () => {
  it('maps heading level and paragraph size', () => {
    expect(avTypographyHeadingType(3)).toBe('h3');
    expect(avTypographyParagraphType('base')).toBe('body');
    expect(avTypographyParagraphType('sm')).toBe('body-sm');
    expect(avTypographyParagraphType('xs')).toBe('body-xs');
  });

  it('returns prose class', () => {
    expect(avTypographyProseClasses()).toBe('av-typography-prose');
  });
});
