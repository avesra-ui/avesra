import { AvDropdownComponent } from './dropdown.component';
import { AvDropdownTriggerDirective } from './dropdown-trigger.directive';
import { AvDropdownPopoverComponent } from './dropdown-popover.component';
import { AvDropdownMenuComponent } from './dropdown-menu.component';
import { AvMenuSectionComponent } from '../menu-section/menu-section.component';
import { AvMenuItemImports } from '../menu-item/menu-item.imports';

export const AvDropdownImports = [
  AvDropdownComponent,
  AvDropdownTriggerDirective,
  AvDropdownPopoverComponent,
  AvDropdownMenuComponent,
  AvMenuSectionComponent,
  ...AvMenuItemImports,
] as const;
