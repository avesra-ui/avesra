import {
  avModalBackdropClasses,
  avModalContainerClasses,
  avModalDialogClasses,
  avModalResolveBackdropClasses,
} from './modal.utils';

describe('avModalClasses', () => {
  it('should default blur to opaque tint plus blur', () => {
    expect(avModalBackdropClasses('blur')).toBe(
      'av-modal__backdrop av-modal__backdrop--opaque av-modal__backdrop--blur',
    );
  });

  it('should build dialog size and scroll classes', () => {
    expect(avModalDialogClasses({ size: 'sm', scroll: 'inside' })).toBe(
      'av-modal__dialog av-modal__dialog--scroll-inside av-modal__dialog--sm',
    );
  });

  it('should build full dialog classes', () => {
    expect(avModalDialogClasses({ size: 'full', scroll: 'outside' })).toBe(
      'av-modal__dialog av-modal__dialog--scroll-outside av-modal__dialog--full',
    );
  });

  it('should merge custom container utilities', () => {
    expect(
      avModalContainerClasses({
        className: 'data-[entering]:zoom-in-95 data-[entering]:duration-400',
      }),
    ).toBe('av-modal__container data-[entering]:zoom-in-95 data-[entering]:duration-400');
  });
});

describe('avModalResolveBackdropClasses', () => {
  it('should drop default tint when custom background utilities are provided', () => {
    expect(
      avModalResolveBackdropClasses(
        'blur',
        'bg-linear-to-t from-black/80 via-black/40 to-transparent',
      ),
    ).toEqual([
      'av-modal__backdrop',
      'av-modal__backdrop--blur',
      'bg-linear-to-t',
      'from-black/80',
      'via-black/40',
      'to-transparent',
    ]);
  });
});
