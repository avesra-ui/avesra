import {
  avTableBodyClasses,
  avTableCellClasses,
  avTableColumnClasses,
  avTableContentClasses,
  avTableFooterClasses,
  avTableHeaderClasses,
  avTableRootClasses,
  avTableRowClasses,
  avTableScrollContainerClasses,
} from './table.utils';

describe('avTableRootClasses', () => {
  it('should return base and primary variant classes by default', () => {
    expect(avTableRootClasses()).toBe('av-table-root av-table-root--primary');
  });

  it('should apply secondary variant class', () => {
    expect(avTableRootClasses({ variant: 'secondary' })).toBe(
      'av-table-root av-table-root--secondary',
    );
  });
});

describe('table slot classes', () => {
  it('should return expected slot class names', () => {
    expect(avTableScrollContainerClasses()).toBe('av-table__scroll-container');
    expect(avTableContentClasses()).toBe('av-table__content');
    expect(avTableHeaderClasses()).toBe('av-table__header');
    expect(avTableColumnClasses()).toBe('av-table__column');
    expect(avTableBodyClasses()).toBe('av-table__body');
    expect(avTableRowClasses()).toBe('av-table__row');
    expect(avTableCellClasses()).toBe('av-table__cell');
    expect(avTableFooterClasses()).toBe('av-table__footer');
  });
});
