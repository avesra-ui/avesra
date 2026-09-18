import { AvTimeFieldComponent } from './time-field.component';
import { AvDateInputGroupImports } from '../date-input-group/date-input-group.imports';

export const AvTimeFieldImports = [
  AvTimeFieldComponent,
  ...AvDateInputGroupImports,
] as const;
