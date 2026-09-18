import { Component, input } from '@angular/core';

import {
  AvTableBodyComponent,
  AvTableCellComponent,
  AvTableColumnComponent,
  AvTableComponent,
  AvTableContentComponent,
  AvTableHeaderComponent,
  AvTableRowComponent,
  AvTableScrollContainerComponent,
} from '@avesra/angular';

import type { DocApiProp } from '../../models/doc-api-prop.model';

@Component({
  selector: 'app-doc-api-table',
  imports: [
    AvTableComponent,
    AvTableScrollContainerComponent,
    AvTableContentComponent,
    AvTableHeaderComponent,
    AvTableColumnComponent,
    AvTableBodyComponent,
    AvTableRowComponent,
    AvTableCellComponent,
  ],
  templateUrl: './doc-api-table.component.html',
  styleUrl: './doc-api-table.component.scss',
})
export class DocApiTableComponent {
  readonly props = input.required<DocApiProp[]>();
}
