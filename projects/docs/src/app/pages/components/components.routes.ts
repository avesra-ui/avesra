import { Routes } from '@angular/router';

export const COMPONENTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components-index.page').then((m) => m.ComponentsIndexPage),
    title: 'All Components | Avesra Docs',
  },
  {
    path: 'button',
    loadComponent: () =>
      import('./button/button-doc.page').then((m) => m.ButtonDocPage),
    title: 'Button | Avesra Docs',
  },
  {
    path: 'button-group',
    loadComponent: () =>
      import('./button-group/button-group-doc.page').then((m) => m.ButtonGroupDocPage),
    title: 'Button Group | Avesra Docs',
  },
  {
    path: 'close-button',
    loadComponent: () =>
      import('./close-button/close-button-doc.page').then((m) => m.CloseButtonDocPage),
    title: 'Close Button | Avesra Docs',
  },
  {
    path: 'label',
    loadComponent: () =>
      import('./label/label-doc.page').then((m) => m.LabelDocPage),
    title: 'Label | Avesra Docs',
  },
  {
    path: 'input',
    loadComponent: () =>
      import('./input/input-doc.page').then((m) => m.InputDocPage),
    title: 'Input | Avesra Docs',
  },
  {
    path: 'calendar',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'range-calendar',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'date-field',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'date-picker',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'date-range-picker',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'time-field',
    loadComponent: () =>
      import('./time-field/time-field-doc.page').then((m) => m.TimeFieldDocPage),
    title: 'TimeField | Avesra Docs',
  },
  {
    path: 'typography',
    loadComponent: () =>
      import('./typography/typography-doc.page').then((m) => m.TypographyDocPage),
    title: 'Typography | Avesra Docs',
  },
  {
    path: 'input-otp',
    loadComponent: () =>
      import('./input-otp/input-otp-doc.page').then((m) => m.InputOtpDocPage),
    title: 'Input OTP | Avesra Docs',
  },
  {
    path: 'input-group',
    loadComponent: () =>
      import('./input-group/input-group-doc.page').then((m) => m.InputGroupDocPage),
    title: 'Input Group | Avesra Docs',
  },
  {
    path: 'textarea',
    loadComponent: () =>
      import('./textarea/textarea-doc.page').then((m) => m.TextareaDocPage),
    title: 'TextArea | Avesra Docs',
  },
  {
    path: 'description',
    loadComponent: () =>
      import('./description/description-doc.page').then((m) => m.DescriptionDocPage),
    title: 'Description | Avesra Docs',
  },
  {
    path: 'field-error',
    loadComponent: () =>
      import('./field-error/field-error-doc.page').then((m) => m.FieldErrorDocPage),
    title: 'Field Error | Avesra Docs',
  },
  {
    path: 'error-message',
    loadComponent: () =>
      import('./error-message/error-message-doc.page').then((m) => m.ErrorMessageDocPage),
    title: 'Error Message | Avesra Docs',
  },
  {
    path: 'fieldset',
    loadComponent: () =>
      import('./fieldset/fieldset-doc.page').then((m) => m.FieldsetDocPage),
    title: 'Fieldset | Avesra Docs',
  },
  {
    path: 'form',
    loadComponent: () =>
      import('./form/form-doc.page').then((m) => m.FormDocPage),
    title: 'Form | Avesra Docs',
  },
  {
    path: 'toggle-button',
    loadComponent: () =>
      import('./toggle-button/toggle-button-doc.page').then((m) => m.ToggleButtonDocPage),
    title: 'ToggleButton | Avesra Docs',
  },
  {
    path: 'toggle-button-group',
    loadComponent: () =>
      import('./toggle-button-group/toggle-button-group-doc.page').then(
        (m) => m.ToggleButtonGroupDocPage,
      ),
    title: 'ToggleButtonGroup | Avesra Docs',
  },
  {
    path: 'switch',
    loadComponent: () =>
      import('./switch/switch-doc.page').then((m) => m.SwitchDocPage),
    title: 'Switch | Avesra Docs',
  },
  {
    path: 'slider',
    loadComponent: () =>
      import('./slider/slider-doc.page').then((m) => m.SliderDocPage),
    title: 'Slider | Avesra Docs',
  },
  {
    path: 'checkbox',
    loadComponent: () =>
      import('./checkbox/checkbox-doc.page').then((m) => m.CheckboxDocPage),
    title: 'Checkbox | Avesra Docs',
  },
  {
    path: 'checkbox-group',
    loadComponent: () =>
      import('./checkbox-group/checkbox-group-doc.page').then((m) => m.CheckboxGroupDocPage),
    title: 'Checkbox Group | Avesra Docs',
  },
  {
    path: 'radio-group',
    loadComponent: () =>
      import('./radio-group/radio-group-doc.page').then((m) => m.RadioGroupDocPage),
    title: 'Radio Group | Avesra Docs',
  },
  {
    path: 'avatar',
    loadComponent: () =>
      import('./avatar/avatar-doc.page').then((m) => m.AvatarDocPage),
    title: 'Avatar | Avesra Docs',
  },
  {
    path: 'badge',
    loadComponent: () =>
      import('./badge/badge-doc.page').then((m) => m.BadgeDocPage),
    title: 'Badge | Avesra Docs',
  },
  {
    path: 'chip',
    loadComponent: () =>
      import('./chip/chip-doc.page').then((m) => m.ChipDocPage),
    title: 'Chip | Avesra Docs',
  },
  {
    path: 'tag-group',
    loadComponent: () =>
      import('./tag-group/tag-group-doc.page').then((m) => m.TagGroupDocPage),
    title: 'Tag Group | Avesra Docs',
  },
  {
    path: 'table',
    loadComponent: () =>
      import('./table/table-doc.page').then((m) => m.TableDocPage),
    title: 'Table | Avesra Docs',
  },
  {
    path: 'kbd',
    loadComponent: () =>
      import('./kbd/kbd-doc.page').then((m) => m.KbdDocPage),
    title: 'Kbd | Avesra Docs',
  },
  {
    path: 'separator',
    loadComponent: () =>
      import('./separator/separator-doc.page').then((m) => m.SeparatorDocPage),
    title: 'Separator | Avesra Docs',
  },
  {
    path: 'skeleton',
    loadComponent: () =>
      import('./skeleton/skeleton-doc.page').then((m) => m.SkeletonDocPage),
    title: 'Skeleton | Avesra Docs',
  },
  {
    path: 'spinner',
    loadComponent: () =>
      import('./spinner/spinner-doc.page').then((m) => m.SpinnerDocPage),
    title: 'Spinner | Avesra Docs',
  },
  {
    path: 'progress-circle',
    loadComponent: () =>
      import('./progress-circle/progress-circle-doc.page').then((m) => m.ProgressCircleDocPage),
    title: 'Progress Circle | Avesra Docs',
  },
  {
    path: 'progress-bar',
    loadComponent: () =>
      import('./progress-bar/progress-bar-doc.page').then((m) => m.ProgressBarDocPage),
    title: 'Progress Bar | Avesra Docs',
  },
  {
    path: 'meter',
    loadComponent: () =>
      import('./meter/meter-doc.page').then((m) => m.MeterDocPage),
    title: 'Meter | Avesra Docs',
  },
  {
    path: 'card',
    loadComponent: () =>
      import('./card/card-doc.page').then((m) => m.CardDocPage),
    title: 'Card | Avesra Docs',
  },
  {
    path: 'surface',
    loadComponent: () =>
      import('./surface/surface-doc.page').then((m) => m.SurfaceDocPage),
    title: 'Surface | Avesra Docs',
  },
  {
    path: 'toolbar',
    loadComponent: () =>
      import('./toolbar/toolbar-doc.page').then((m) => m.ToolbarDocPage),
    title: 'Toolbar | Avesra Docs',
  },
  {
    path: 'modal',
    loadComponent: () =>
      import('./modal/modal-doc.page').then((m) => m.ModalDocPage),
    title: 'Modal | Avesra Docs',
  },
  {
    path: 'drawer',
    loadComponent: () =>
      import('./drawer/drawer-doc.page').then((m) => m.DrawerDocPage),
    title: 'Drawer | Avesra Docs',
  },
  {
    path: 'alert-dialog',
    loadComponent: () =>
      import('./alert-dialog/alert-dialog-doc.page').then((m) => m.AlertDialogDocPage),
    title: 'Alert Dialog | Avesra Docs',
  },
  {
    path: 'popover',
    loadComponent: () =>
      import('./popover/popover-doc.page').then((m) => m.PopoverDocPage),
    title: 'Popover | Avesra Docs',
  },
  {
    path: 'dropdown',
    loadComponent: () =>
      import('./dropdown/dropdown-doc.page').then((m) => m.DropdownDocPage),
    title: 'Dropdown | Avesra Docs',
  },
  {
    path: 'list-box',
    loadComponent: () =>
      import('./list-box/list-box-doc.page').then((m) => m.ListBoxDocPage),
    title: 'List Box | Avesra Docs',
  },
  {
    path: 'select',
    loadComponent: () =>
      import('./select/select-doc.page').then((m) => m.SelectDocPage),
    title: 'Select | Avesra Docs',
  },
  {
    path: 'tooltip',
    loadComponent: () =>
      import('./tooltip/tooltip-doc.page').then((m) => m.TooltipDocPage),
    title: 'Tooltip | Avesra Docs',
  },
  {
    path: 'toast',
    loadComponent: () =>
      import('./toast/toast-doc.page').then((m) => m.ToastDocPage),
    title: 'Toast | Avesra Docs',
  },
  {
    path: 'alert',
    loadComponent: () =>
      import('./alert/alert-doc.page').then((m) => m.AlertDocPage),
    title: 'Alert | Avesra Docs',
  },
  {
    path: 'tabs',
    loadComponent: () =>
      import('./tabs/tabs-doc.page').then((m) => m.TabsDocPage),
    title: 'Tabs | Avesra Docs',
  },
  {
    path: 'pagination',
    loadComponent: () =>
      import('./pagination/pagination-doc.page').then((m) => m.PaginationDocPage),
    title: 'Pagination | Avesra Docs',
  },
  {
    path: 'link',
    loadComponent: () =>
      import('./link/link-doc.page').then((m) => m.LinkDocPage),
    title: 'Link | Avesra Docs',
  },
  {
    path: 'disclosure-group',
    loadComponent: () =>
      import('./disclosure-group/disclosure-group-doc.page').then((m) => m.DisclosureGroupDocPage),
    title: 'Disclosure Group | Avesra Docs',
  },
  {
    path: 'disclosure',
    loadComponent: () =>
      import('./disclosure/disclosure-doc.page').then((m) => m.DisclosureDocPage),
    title: 'Disclosure | Avesra Docs',
  },
  {
    path: 'breadcrumbs',
    loadComponent: () =>
      import('./breadcrumbs/breadcrumbs-doc.page').then((m) => m.BreadcrumbsDocPage),
    title: 'Breadcrumbs | Avesra Docs',
  },
  {
    path: 'accordion',
    loadComponent: () =>
      import('./accordion/accordion-doc.page').then((m) => m.AccordionDocPage),
    title: 'Accordion | Avesra Docs',
  },
];
