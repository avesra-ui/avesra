import {
  avDrawerBackdropClasses,
  avDrawerContentClasses,
  avDrawerDialogClasses,
  avDrawerResolveBackdropClasses,
} from './drawer.utils';

describe('avDrawerClasses', () => {
  it('should build backdrop variant classes', () => {
    expect(avDrawerBackdropClasses('blur')).toBe(
      'av-drawer__backdrop av-drawer__backdrop--opaque av-drawer__backdrop--blur',
    );
  });

  it('should drop opaque tint when custom bg utilities are present', () => {
    expect(
      avDrawerResolveBackdropClasses(
        'blur',
        'bg-linear-to-t from-black/80 via-black/40 to-transparent',
      ),
    ).toEqual([
      'av-drawer__backdrop',
      'av-drawer__backdrop--blur',
      'bg-linear-to-t',
      'from-black/80',
      'via-black/40',
      'to-transparent',
    ]);
  });

  it('should build content placement classes', () => {
    expect(avDrawerContentClasses('right')).toBe('av-drawer__content av-drawer__content--right');
    expect(avDrawerContentClasses({ placement: 'left', className: 'z-10' })).toBe(
      'av-drawer__content av-drawer__content--left z-10',
    );
  });

  it('should build dialog placement classes', () => {
    expect(avDrawerDialogClasses('top')).toBe('av-drawer__dialog av-drawer__dialog--top');
    expect(avDrawerDialogClasses('bottom')).toBe('av-drawer__dialog');
  });
});
