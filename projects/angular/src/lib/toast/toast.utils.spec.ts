import {
  avToastClasses,
  avToastIsBottomPlacement,
  avToastNextId,
  avToastOffset,
  avToastRegionClasses,
  avToastStackStyles,
} from './toast.utils';

describe('toast.utils', () => {
  it('should generate unique toast ids', () => {
    const first = avToastNextId();
    const second = avToastNextId();

    expect(first).not.toBe(second);
    expect(first.startsWith('av-toast-')).toBe(true);
  });

  it('should build region classes for placement', () => {
    expect(avToastRegionClasses('bottom')).toBe('av-toast-region av-toast-region--bottom');
    expect(avToastRegionClasses('top-end')).toBe('av-toast-region av-toast-region--top-end');
  });

  it('should build toast classes for variant and placement', () => {
    expect(avToastClasses('success', 'bottom')).toBe(
      'av-toast av-toast--success av-toast--bottom',
    );
  });

  it('should detect bottom placements', () => {
    expect(avToastIsBottomPlacement('bottom')).toBe(true);
    expect(avToastIsBottomPlacement('bottom-start')).toBe(true);
    expect(avToastIsBottomPlacement('top')).toBe(false);
  });

  it('should compute cumulative offset', () => {
    expect(avToastOffset({ index: 2, gap: 12, heightsBefore: 100 })).toBe(124);
  });

  it('should compute stack styles', () => {
    const styles = avToastStackStyles({
      index: 1,
      total: 3,
      gap: 12,
      scaleFactor: 0.05,
      placement: 'bottom',
      offset: 92,
      frontHeight: 80,
      initialHeight: 64,
    });

    expect(styles['zIndex']).toBe('2');
    expect(styles['--offset']).toBe('92px');
    expect(styles['--front-toast-height']).toBe('80px');
    expect(styles['--initial-height']).toBe('64px');
    expect(styles['--toasts-before']).toBe('1');
  });
});
