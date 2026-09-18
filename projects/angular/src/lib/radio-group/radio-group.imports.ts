import { AvRadioGroupComponent } from './radio-group.component';
import { AvRadioImports } from '../radio/radio.imports';

export const AvRadioGroupImports = [
  AvRadioGroupComponent,
  ...AvRadioImports,
] as const;
