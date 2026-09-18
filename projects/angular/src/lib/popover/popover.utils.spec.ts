import {
  avPopoverAnchorPoint,
  avPopoverClasses,
  avPopoverDialogClasses,
  avPopoverHeadingClasses,
  avPopoverPlacementAxisFromConnection,
  avPopoverPositions,
  avPopoverTriggerClasses,
} from './popover.utils';

describe('avPopoverClasses', () => {
  it('should return the popover base class', () => {
    expect(avPopoverClasses()).toBe('av-popover');
  });
});

describe('avPopoverTriggerClasses', () => {
  it('should return the trigger class', () => {
    expect(avPopoverTriggerClasses()).toBe('av-popover__trigger');
  });
});

describe('avPopoverDialogClasses', () => {
  it('should return the dialog class', () => {
    expect(avPopoverDialogClasses()).toBe('av-popover__dialog');
  });
});

describe('avPopoverHeadingClasses', () => {
  it('should return the heading class', () => {
    expect(avPopoverHeadingClasses()).toBe('av-popover__heading');
  });
});

describe('avPopoverPlacementAxisFromConnection', () => {
  it('should resolve bottom placement', () => {
    expect(
      avPopoverPlacementAxisFromConnection({
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top',
      }),
    ).toBe('bottom');
  });
});

describe('avPopoverAnchorPoint', () => {
  it('should return anchor points per axis', () => {
    expect(avPopoverAnchorPoint('bottom')).toBe('top center');
  });
});

describe('avPopoverPositions', () => {
  it('should return primary placement first', () => {
    const positions = avPopoverPositions('bottom', 8);

    expect(positions[0]).toEqual({
      originX: 'center',
      originY: 'bottom',
      overlayX: 'center',
      overlayY: 'top',
      offsetY: 8,
    });
  });
});
