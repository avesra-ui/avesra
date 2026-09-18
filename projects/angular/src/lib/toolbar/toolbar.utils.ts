export type AvToolbarOrientation = 'horizontal' | 'vertical';

export interface AvToolbarClassOptions {
  orientation?: AvToolbarOrientation;
  attached?: boolean;
}

const AV_TOOLBAR_BASE = 'av-toolbar';

export function avToolbarClasses(options: AvToolbarClassOptions = {}): string {
  const { orientation = 'horizontal', attached = false } = options;

  return [
    AV_TOOLBAR_BASE,
    `${AV_TOOLBAR_BASE}--${orientation}`,
    attached && `${AV_TOOLBAR_BASE}--attached`,
  ]
    .filter(Boolean)
    .join(' ');
}
