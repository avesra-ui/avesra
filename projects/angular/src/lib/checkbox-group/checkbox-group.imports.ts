import { AvCheckboxGroupComponent } from './checkbox-group.component';
import { AvCheckboxImports } from '../checkbox/checkbox.imports';

export const AvCheckboxGroupImports = [
  AvCheckboxGroupComponent,
  ...AvCheckboxImports,
] as const;
