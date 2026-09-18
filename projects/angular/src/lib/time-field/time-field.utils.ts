export type AvTimeFieldClassOptions = {
  fullWidth?: boolean;
};

export function avTimeFieldClasses(options: AvTimeFieldClassOptions = {}): string {
  const { fullWidth = false } = options;
  return ['av-time-field', fullWidth ? 'av-time-field--full-width' : ''].filter(Boolean).join(' ');
}
