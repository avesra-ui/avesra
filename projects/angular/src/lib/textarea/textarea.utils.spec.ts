import { avTextareaClasses } from './textarea.utils';

describe('avTextareaClasses', () => {
  it('should return default classes', () => {
    expect(avTextareaClasses()).toBe('av-textarea av-textarea--primary');
  });

  it('should apply variant modifier', () => {
    expect(avTextareaClasses({ variant: 'secondary' })).toBe('av-textarea av-textarea--secondary');
  });

  it('should apply full width modifier', () => {
    expect(avTextareaClasses({ fullWidth: true })).toBe(
      'av-textarea av-textarea--primary av-textarea--full-width',
    );
  });

  it('should combine variant and full width modifiers', () => {
    expect(avTextareaClasses({ variant: 'secondary', fullWidth: true })).toBe(
      'av-textarea av-textarea--secondary av-textarea--full-width',
    );
  });
});
