export type AvTableVariant = 'primary' | 'secondary';

export interface AvTableRootClassOptions {
  variant?: AvTableVariant;
}

const AV_TABLE_ROOT = 'av-table-root';

export function avTableRootClasses(options: AvTableRootClassOptions = {}): string {
  const { variant = 'primary' } = options;

  return [AV_TABLE_ROOT, `${AV_TABLE_ROOT}--${variant}`].join(' ');
}

export function avTableScrollContainerClasses(): string {
  return 'av-table__scroll-container';
}

export function avTableContentClasses(): string {
  return 'av-table__content';
}

export function avTableHeaderClasses(): string {
  return 'av-table__header';
}

export function avTableColumnClasses(): string {
  return 'av-table__column';
}

export function avTableBodyClasses(): string {
  return 'av-table__body';
}

export function avTableRowClasses(): string {
  return 'av-table__row';
}

export function avTableCellClasses(): string {
  return 'av-table__cell';
}

export function avTableFooterClasses(): string {
  return 'av-table__footer';
}

export function avTableResizableContainerClasses(): string {
  return 'av-table__resizable-container';
}

export function avTableColumnResizerClasses(): string {
  return 'av-table__column-resizer';
}

export function avTableLoadMoreClasses(): string {
  return 'av-table__load-more';
}

export function avTableLoadMoreContentClasses(): string {
  return 'av-table__load-more-content';
}
