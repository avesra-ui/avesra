import { defineDemo } from '../define-demo';
import {
  TableAsyncLoadingDemo,
  DEMO_LANG as asyncLoadingLang,
  DEMO_SOURCE as asyncLoadingSource,
} from './async-loading.demo';
import {
  TableBasicDemo,
  DEMO_LANG as basicLang,
  DEMO_SOURCE as basicSource,
} from './basic.demo';
import {
  TableColumnResizingDemo,
  DEMO_LANG as columnResizingLang,
  DEMO_SOURCE as columnResizingSource,
} from './column-resizing.demo';
import {
  TableCustomCellsDemo,
  DEMO_LANG as customCellsLang,
  DEMO_SOURCE as customCellsSource,
} from './custom-cells.demo';
import {
  TableEmptyStateDemo,
  DEMO_LANG as emptyStateLang,
  DEMO_SOURCE as emptyStateSource,
} from './empty-state.demo';
import {
  TablePaginationDemo,
  DEMO_LANG as paginationLang,
  DEMO_SOURCE as paginationSource,
} from './pagination.demo';
import {
  TableSecondaryVariantDemo,
  DEMO_LANG as secondaryVariantLang,
  DEMO_SOURCE as secondaryVariantSource,
} from './secondary-variant.demo';
import {
  TableSelectionDemo,
  DEMO_LANG as selectionLang,
  DEMO_SOURCE as selectionSource,
} from './selection.demo';
import {
  TableSortingDemo,
  DEMO_LANG as sortingLang,
  DEMO_SOURCE as sortingSource,
} from './sorting.demo';

export const tableDemos = {
  basic: defineDemo(TableBasicDemo, basicSource, basicLang),
  secondaryVariant: defineDemo(
    TableSecondaryVariantDemo,
    secondaryVariantSource,
    secondaryVariantLang,
  ),
  sorting: defineDemo(TableSortingDemo, sortingSource, sortingLang),
  selection: defineDemo(TableSelectionDemo, selectionSource, selectionLang),
  customCells: defineDemo(TableCustomCellsDemo, customCellsSource, customCellsLang),
  pagination: defineDemo(TablePaginationDemo, paginationSource, paginationLang),
  columnResizing: defineDemo(
    TableColumnResizingDemo,
    columnResizingSource,
    columnResizingLang,
  ),
  emptyState: defineDemo(TableEmptyStateDemo, emptyStateSource, emptyStateLang),
  asyncLoading: defineDemo(TableAsyncLoadingDemo, asyncLoadingSource, asyncLoadingLang),
} as const;
