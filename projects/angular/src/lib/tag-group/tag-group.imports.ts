import { AvTagGroupComponent } from './tag-group.component';
import { AvTagGroupListComponent } from './tag-group-list.component';
import { AvTagImports } from '../tag/tag.imports';

export const AvTagGroupImports = [
  AvTagGroupComponent,
  AvTagGroupListComponent,
  ...AvTagImports,
] as const;
