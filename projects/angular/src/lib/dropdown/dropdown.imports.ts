import { AvDropdownComponent } from './dropdown.component';
import { AvDropdownTriggerDirective } from './dropdown-trigger.directive';
import { AvDropdownContentDirective } from './dropdown-content.directive';
import { AvDropdownPopoverComponent } from './dropdown-popover.component';
import { AvDropdownMenuComponent } from './dropdown-menu.component';
import { AvDropdownMenuSectionComponent } from './menu-section/menu-section.component';
import { AvDropdownMenuItemImports } from './menu-item/menu-item.imports';

export const AvDropdownImports = [
  AvDropdownComponent,
  AvDropdownTriggerDirective,
  AvDropdownContentDirective,
  AvDropdownPopoverComponent,
  AvDropdownMenuComponent,
  AvDropdownMenuSectionComponent,
  ...AvDropdownMenuItemImports,
] as const;
