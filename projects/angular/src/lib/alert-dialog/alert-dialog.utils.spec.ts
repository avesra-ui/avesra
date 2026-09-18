import {
  avAlertDialogBodyClasses,
  avAlertDialogContainerClasses,
  avAlertDialogDialogClasses,
  avAlertDialogIconClasses,
  avAlertDialogResolveBackdropClasses,
} from './alert-dialog.utils';

describe('avAlertDialogDialogClasses', () => {
  it('should return inside scroll and md classes by default', () => {
    expect(avAlertDialogDialogClasses()).toBe(
      'av-alert-dialog__dialog av-alert-dialog__dialog--scroll-inside av-alert-dialog__dialog--md',
    );
  });

  it('should apply cover modifier', () => {
    expect(avAlertDialogDialogClasses({ size: 'cover' })).toBe(
      'av-alert-dialog__dialog av-alert-dialog__dialog--scroll-inside av-alert-dialog__dialog--cover',
    );
  });

  it('should apply outside scroll modifier', () => {
    expect(avAlertDialogDialogClasses({ scroll: 'outside' })).toBe(
      'av-alert-dialog__dialog av-alert-dialog__dialog--scroll-outside av-alert-dialog__dialog--md',
    );
  });
});

describe('avAlertDialogContainerClasses', () => {
  it('should apply outside scroll modifier on container', () => {
    expect(avAlertDialogContainerClasses({ scroll: 'outside' })).toBe(
      'av-alert-dialog__container av-alert-dialog__container--scroll-outside',
    );
  });

  it('should merge custom container utilities', () => {
    expect(
      avAlertDialogContainerClasses({
        className: 'data-[entering]:zoom-in-95 data-[entering]:duration-400',
      }),
    ).toBe(
      'av-alert-dialog__container data-[entering]:zoom-in-95 data-[entering]:duration-400',
    );
  });
});

describe('avAlertDialogBodyClasses', () => {
  it('should apply inside scroll modifier by default', () => {
    expect(avAlertDialogBodyClasses()).toBe(
      'av-alert-dialog__body av-alert-dialog__body--scroll-inside',
    );
  });
});

describe('avAlertDialogIconClasses', () => {
  it('should default to danger status', () => {
    expect(avAlertDialogIconClasses()).toBe(
      'av-alert-dialog__icon av-alert-dialog__icon--danger',
    );
  });

  it('should apply status modifier', () => {
    expect(avAlertDialogIconClasses({ status: 'success' })).toBe(
      'av-alert-dialog__icon av-alert-dialog__icon--success',
    );
  });
});

describe('avAlertDialogResolveBackdropClasses', () => {
  it('should default blur to opaque tint plus blur', () => {
    expect(avAlertDialogResolveBackdropClasses('blur')).toEqual([
      'av-alert-dialog__backdrop',
      'av-alert-dialog__backdrop--opaque',
      'av-alert-dialog__backdrop--blur',
    ]);
  });

  it('should drop default tint when custom background utilities are provided', () => {
    expect(
      avAlertDialogResolveBackdropClasses(
        'blur',
        'bg-linear-to-t from-red-950/90 via-red-950/50 to-transparent',
      ),
    ).toEqual([
      'av-alert-dialog__backdrop',
      'av-alert-dialog__backdrop--blur',
      'bg-linear-to-t',
      'from-red-950/90',
      'via-red-950/50',
      'to-transparent',
    ]);
  });
});
