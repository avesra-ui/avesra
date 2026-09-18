import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Time } from '@internationalized/date';

import {
  AvAccordionImports,
  AvAlertImports,
  AvAvatarImports,
  AvBadgeImports,
  AvBreadcrumbsImports,
  AvButtonComponent,
  AvButtonGroupImports,
  AvCardImports,
  AvCheckboxGroupImports,
  AvCheckboxImports,
  AvChipImports,
  AvCloseButtonComponent,
  AvDescriptionComponent,
  AvDisclosureGroupImports,
  AvErrorMessageComponent,
  AvFieldErrorComponent,
  AvFieldsetImports,
  AvFormComponent,
  AvInputComponent,
  AvInputGroupImports,
  AvInputOtpImports,
  AvKbdImports,
  AvLabelComponent,
  AvLinkImports,
  AvListBoxImports,
  AvMeterImports,
  AvPaginationImports,
  AvPopoverImports,
  AvProgressBarImports,
  AvProgressCircleImports,
  AvRadioGroupImports,
  AvSelectImports,
  AvSeparatorImports,
  AvSkeletonComponent,
  AvSliderImports,
  AvSpinnerComponent,
  AvSurfaceComponent,
  AvSwitchImports,
  AvTableImports,
  AvTabsImports,
  AvTagGroupImports,
  AvTextareaComponent,
  AvTimeFieldImports,
  AvToggleButtonComponent,
  AvToggleButtonGroupImports,
  AvToolbarComponent,
  AvTypographyImports,
} from '@avesra/angular';

import { AppIconComponent } from '../app-icon/app-icon.component';
import { AVATAR_DEMO_GRADIENTS, AVATAR_DEMO_IMAGES } from '../../demos/avatar/avatar-demo.assets';

const SCALE_MD = new Set([
  'accordion',
  'card',
  'checkbox-group',
  'disclosure',
  'disclosure-group',
  'dropdown',
  'error-message',
  'fieldset',
  'form',
  'input-otp',
  'list-box',
  'pagination',
  'radio-group',
  'separator',
  'skeleton',
  'table',
  'toolbar',
  'typography',
]);

@Component({
  selector: 'app-component-gallery-preview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AppIconComponent,
    AvAccordionImports,
    AvAlertImports,
    AvAvatarImports,
    AvBadgeImports,
    AvBreadcrumbsImports,
    AvButtonComponent,
    AvButtonGroupImports,
    AvCardImports,
    AvCheckboxGroupImports,
    AvCheckboxImports,
    AvChipImports,
    AvCloseButtonComponent,
    AvDescriptionComponent,
    AvDisclosureGroupImports,
    AvErrorMessageComponent,
    AvFieldErrorComponent,
    AvFieldsetImports,
    AvFormComponent,
    AvInputComponent,
    AvInputGroupImports,
    AvInputOtpImports,
    AvKbdImports,
    AvLabelComponent,
    AvLinkImports,
    AvListBoxImports,
    AvMeterImports,
    AvPaginationImports,
    AvPopoverImports,
    AvProgressBarImports,
    AvProgressCircleImports,
    AvRadioGroupImports,
    AvSelectImports,
    AvSeparatorImports,
    AvSkeletonComponent,
    AvSliderImports,
    AvSpinnerComponent,
    AvSurfaceComponent,
    AvSwitchImports,
    AvTableImports,
    AvTabsImports,
    AvTagGroupImports,
    AvTextareaComponent,
    AvTimeFieldImports,
    AvToggleButtonComponent,
    AvToggleButtonGroupImports,
    AvToolbarComponent,
    AvTypographyImports,
  ],
  templateUrl: './component-gallery-preview.component.html',
  styleUrl: './component-gallery-preview.component.scss',
  host: {
    class: 'av-component-gallery-preview',
    '[class.av-component-gallery-preview--md]': 'scale() === "md"',
    inert: '',
    'aria-hidden': 'true',
  },
})
export class ComponentGalleryPreviewComponent {
  readonly slug = input.required<string>();

  protected readonly scale = computed(() => (SCALE_MD.has(this.slug()) ? 'md' : null));

  protected readonly avatarMan = AVATAR_DEMO_IMAGES.man;
  protected readonly avatarBoy = AVATAR_DEMO_IMAGES.boy;
  protected readonly avatarGirl = AVATAR_DEMO_IMAGES.girl;
  protected readonly badgeGradient = AVATAR_DEMO_GRADIENTS.blueCyan;
  protected readonly listUsers = [
    {
      id: '1',
      name: 'Bob',
      email: 'bob@avesra.dev',
      avatar: AVATAR_DEMO_GRADIENTS.blueCyan,
      fallback: 'B',
    },
    {
      id: '2',
      name: 'Fred',
      email: 'fred@avesra.dev',
      avatar: AVATAR_DEMO_GRADIENTS.cyanBluePurple,
      fallback: 'F',
    },
    {
      id: '3',
      name: 'Martha',
      email: 'martha@avesra.dev',
      avatar: AVATAR_DEMO_GRADIENTS.purple,
      fallback: 'M',
    },
  ] as const;

  protected readonly previewTime = new Time(9, 41);
  protected readonly accordionExpanded = ['faq-0'];
  protected readonly disclosureExpanded = ['preview'];
  protected readonly listSelected = ['1'];
  protected readonly otpValue = '482915';
}
