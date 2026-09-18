import { AvListBoxComponent } from './list-box.component';
import { AvListBoxSectionComponent } from '../list-box-section/list-box-section.component';
import { AvListBoxItemImports } from '../list-box-item/list-box-item.imports';

export const AvListBoxImports = [
  AvListBoxComponent,
  AvListBoxSectionComponent,
  ...AvListBoxItemImports,
] as const;
