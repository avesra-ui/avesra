export type {
  AvToastAddOptions,
  AvToastConfig,
  AvToastHeightEntry,
  AvToastItemCloseEvent,
  AvToastMessage,
  AvToastPlacement,
  AvToastPromiseMessage,
  AvToastPromiseOptions,
  AvToastVariant,
} from './toast.types';

export { AV_TOAST_CONFIG } from './toast.token';

export {
  AV_TOAST_ENTER_MS,
  AV_TOAST_EXIT_MS,
  AV_TOAST_GAP_DEFAULT,
  AV_TOAST_MAX_VISIBLE_DEFAULT,
  AV_TOAST_SCALE_FACTOR_DEFAULT,
  AV_TOAST_SWIPE_THRESHOLD_DEFAULT,
  AV_TOAST_TIMEOUT_DEFAULT,
  AV_TOAST_WIDTH_DEFAULT,
  avToastActionClasses,
  avToastClasses,
  avToastCloseClasses,
  avToastContentClasses,
  avToastDescriptionClasses,
  avToastIndicatorClasses,
  avToastIsBottomPlacement,
  avToastNextId,
  avToastOffset,
  avToastRegionClasses,
  avToastStackStyles,
  avToastTitleClasses,
} from './toast.utils';

export { provideAvesraToast } from './provide-avesra-toast';
export { AvToastService } from './toast.service';
export { AvToastComponent } from './toast.component';
export { AvToastItemComponent } from './toast-item.component';
