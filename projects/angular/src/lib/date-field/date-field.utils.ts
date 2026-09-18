export type AvDateFieldClassOptions = {
  fullWidth?: boolean;
};

export function avDateFieldClasses(options: AvDateFieldClassOptions = {}): string {
  const { fullWidth = false } = options;
  return ['av-date-field', fullWidth ? 'av-date-field--full-width' : ''].filter(Boolean).join(' ');
}
