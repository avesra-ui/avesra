import { AvSelectComponent } from './select.component';
import { AvSelectTriggerComponent } from './select-trigger.component';
import { AvSelectValueComponent } from './select-value.component';
import { AvSelectIndicatorComponent } from './select-indicator.component';
import { AvSelectPopoverComponent } from './select-popover.component';
import { AvListBoxImports } from '../list-box/list-box.imports';

export const AvSelectImports = [
  AvSelectComponent,
  AvSelectTriggerComponent,
  AvSelectValueComponent,
  AvSelectIndicatorComponent,
  AvSelectPopoverComponent,
  ...AvListBoxImports,
] as const;
