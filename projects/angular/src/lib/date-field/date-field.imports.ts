import { AvDateFieldComponent } from './date-field.component';
import { AvDateInputGroupImports } from '../date-input-group/date-input-group.imports';

export const AvDateFieldImports = [
  AvDateFieldComponent,
  ...AvDateInputGroupImports,
] as const;
