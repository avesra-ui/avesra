export interface AvLabelClassOptions {
  required?: boolean;
  disabled?: boolean;
  invalid?: boolean;
}

const AV_LABEL_BASE = 'av-label';

export function avLabelClasses(options: AvLabelClassOptions = {}): string {
  const { required = false, disabled = false, invalid = false } = options;

  return [
    AV_LABEL_BASE,
    required && `${AV_LABEL_BASE}--required`,
    disabled && `${AV_LABEL_BASE}--disabled`,
    invalid && `${AV_LABEL_BASE}--invalid`,
  ]
    .filter(Boolean)
    .join(' ');
}
