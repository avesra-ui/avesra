import {
  avTooltipAlign,
  avTooltipAlignPosition,
  avTooltipAnchorPoint,
  avTooltipClasses,
  avTooltipIsOutOfBounds,
  avTooltipTextClasses,
} from './tooltip.utils';

describe('avTooltipClasses', () => {
  it('should return the tooltip base class', () => {
    expect(avTooltipClasses()).toBe('av-tooltip');
  });
});

describe('avTooltipTextClasses', () => {
  it('should return the text class', () => {
    expect(avTooltipTextClasses()).toBe('av-tooltip__text');
  });
});

describe('avTooltipAnchorPoint', () => {
  it('should return anchor points per axis', () => {
    expect(avTooltipAnchorPoint('top')).toBe('bottom center');
    expect(avTooltipAnchorPoint('bottom')).toBe('top center');
  });
});

describe('avTooltipAlign', () => {
  const baseMetrics = {
    hostLeft: 100,
    hostTop: 100,
    hostWidth: 40,
    hostHeight: 24,
    tooltipWidth: 80,
    tooltipHeight: 32,
    viewportWidth: 800,
    viewportHeight: 600,
    offset: 8,
    positionTop: 0,
    positionLeft: 0,
  };

  it('should align top placement above the host', () => {
    const result = avTooltipAlignPosition('top', baseMetrics);

    expect(result.top).toBe(60);
    expect(result.left).toBe(80);
  });

  it('should align bottom placement below the host', () => {
    const result = avTooltipAlignPosition('bottom', baseMetrics);

    expect(result.top).toBe(132);
    expect(result.left).toBe(80);
  });

  it('should prefer the requested placement when in bounds', () => {
    const result = avTooltipAlign('top', baseMetrics);

    expect(result.placement).toBe('top');
  });

  it('should detect out-of-bounds coordinates', () => {
    expect(avTooltipIsOutOfBounds(-10, 50, baseMetrics)).toBe(true);
    expect(avTooltipIsOutOfBounds(50, 50, baseMetrics)).toBe(false);
  });

  it('should fall back when preferred placement is out of bounds', () => {
    const result = avTooltipAlign('top', {
      ...baseMetrics,
      hostTop: 0,
      tooltipHeight: 200,
    });

    expect(result.placement).not.toBe('top');
  });
});
