/** Segment keyboard helpers. */

export function isDigitKey(key: string): boolean {
  return key.length === 1 && key >= '0' && key <= '9';
}

export function appendSegmentDigit(
  current: number | null,
  digit: number,
  maxLength: number,
  maxValue: number,
): { value: number; advance: boolean } {
  const next =
    current === null || String(current).length >= maxLength
      ? digit
      : Number(`${current}${digit}`);

  const clamped = Math.min(next, maxValue);
  const advance = String(clamped).length >= maxLength || next * 10 > maxValue;
  return { value: clamped, advance };
}

export function cycleSegmentValue(
  current: number | null,
  delta: number,
  minValue: number,
  maxValue: number,
): number {
  const base = current ?? (delta > 0 ? minValue - 1 : maxValue + 1);
  let next = base + delta;
  if (next > maxValue) {
    next = minValue;
  }
  if (next < minValue) {
    next = maxValue;
  }
  return next;
}

export function findEditableSegmentIndex(
  types: readonly { isEditable: boolean }[],
  from: number,
  direction: 1 | -1,
): number {
  let index = from;
  for (let step = 0; step < types.length; step++) {
    index = (index + direction + types.length) % types.length;
    if (types[index]?.isEditable) {
      return index;
    }
  }
  return from;
}
