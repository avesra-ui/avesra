import { AvPopoverComponent } from './popover.component';
import { AvPopoverTriggerDirective } from './popover-trigger.directive';
import { AvPopoverContentComponent } from './popover-content.component';
import { AvPopoverDialogComponent } from './popover-dialog.component';
import { AvPopoverHeadingComponent } from './popover-heading.component';
import { AvPopoverArrowComponent } from './popover-arrow.component';

export const AvPopoverImports = [
  AvPopoverComponent,
  AvPopoverTriggerDirective,
  AvPopoverContentComponent,
  AvPopoverDialogComponent,
  AvPopoverHeadingComponent,
  AvPopoverArrowComponent,
] as const;
