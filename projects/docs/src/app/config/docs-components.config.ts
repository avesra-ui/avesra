import type { DocApiProp } from '../models/doc-api-prop.model';
import type { DocComponentCategory, DocComponentMeta } from '../models/doc-component-meta.model';

export const DOC_COMPONENT_CATEGORIES: DocComponentCategory[] = [
  'Buttons',
  'Form Primitives',
  'Form Layout',
  'Text Inputs',
  'Selection Controls',
  'Data Display',
  'Layout & Surfaces',
  'Overlays & Feedback',
  'Menus & Lists',
  'Navigation',
  'Disclosure',
];

const BUTTON_PROPS: DocApiProp[] = [
  {
    name: 'variant',
    type: "'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost' | 'danger' | 'danger-soft'",
    default: "'primary'",
    description: 'Visual style variant. Inherits from `av-button-group` when omitted.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    default: "'md'",
    description: 'Size of the button. Inherits from `av-button-group` when omitted.',
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    default: 'false',
    description:
      'Whether the button should take full width of its container. Template alias: full-width.',
  },
  {
    name: 'disabled',
    type: 'boolean | undefined',
    default: 'undefined',
    description:
      'Whether the button is disabled. When omitted, `pending` disables the button; otherwise inherits the parent `av-button-group` disabled state.',
  },
  {
    name: 'pending',
    type: 'boolean',
    default: 'false',
    description: 'Whether the button is in a loading state (`data-pending`).',
  },
  {
    name: 'iconOnly',
    type: 'boolean',
    default: 'false',
    description:
      'Whether the button contains only an icon. Template alias: icon-only. Pair with `aria-label`.',
  },
  {
    name: 'type',
    type: "'button' | 'submit' | 'reset'",
    default: "'button'",
    description: 'Native button type.',
  },
];

const CHECKBOX_PROPS: DocApiProp[] = [
  {
    name: 'variant',
    type: "'primary' | 'secondary'",
    default: "'primary'",
    description: 'Visual style variant. Inherits from `av-checkbox-group` when omitted.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables interaction. Also set by reactive forms or parent group.',
  },
  {
    name: 'invalid',
    type: 'boolean',
    default: 'false',
    description: 'Marks the checkbox as invalid. Inherits from parent group when omitted.',
  },
  {
    name: 'default-selected',
    type: 'boolean',
    default: 'false',
    description: 'Initial selected state for uncontrolled standalone usage.',
  },
  {
    name: 'selected',
    type: 'boolean',
    default: 'false',
    description: 'Selected state for standalone usage. Supports two-way binding with `[(selected)]`.',
  },
  {
    name: 'selectedChange',
    type: 'EventEmitter<boolean>',
    description: 'Emits when the selected state changes.',
  },
  {
    name: 'indeterminate',
    type: 'boolean',
    default: 'false',
    description: 'Indeterminate (partially selected) state.',
  },
  {
    name: 'aria-label',
    type: 'string',
    description: 'Accessible label when no visible label is provided.',
  },
  {
    name: 'name',
    type: 'string',
    description: 'Form field name for native form submission.',
  },
  {
    name: 'value',
    type: 'string',
    description: 'Option value when used inside `av-checkbox-group`. Required in groups.',
  },
];

const CHECKBOX_GROUP_PROPS: DocApiProp[] = [
  {
    name: 'variant',
    type: "'primary' | 'secondary'",
    default: "'primary'",
    description: 'Shared visual variant applied to all child checkboxes.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables all child checkboxes.',
  },
  {
    name: 'invalid',
    type: 'boolean',
    default: 'false',
    description: 'Marks all child checkboxes as invalid.',
  },
  {
    name: 'name',
    type: 'string',
    description: 'Form field name for native form submission.',
  },
  {
    name: 'default-value',
    type: 'string[]',
    default: '[]',
    description: 'Initial selected values for uncontrolled usage.',
  },
  {
    name: 'value',
    type: 'string[]',
    default: '[]',
    description: 'Selected values. Supports two-way binding with `[(value)]`.',
  },
  {
    name: 'valueChange',
    type: 'EventEmitter<string[]>',
    description: 'Emits when the selected values change.',
  },
];

const RADIO_GROUP_PROPS: DocApiProp[] = [
  {
    name: 'variant',
    type: "'primary' | 'secondary'",
    default: "'primary'",
    description:
      'Visual variant of the group. `primary` is the default style with shadow. `secondary` is a lower emphasis variant without shadow, suitable for use in surfaces.',
  },
  {
    name: 'orientation',
    type: "'vertical' | 'horizontal'",
    default: "'vertical'",
    description: 'The orientation of the radio group.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Whether the radio group is disabled. Cascades to all child radios.',
  },
  {
    name: 'invalid',
    type: 'boolean',
    default: 'false',
    description: 'Whether the radio group is in an invalid state. Cascades to all child radios.',
  },
  {
    name: 'name',
    type: 'string',
    description: 'The name of the radio group, used when submitting an HTML form.',
  },
  {
    name: 'default-value',
    type: 'string | null',
    default: 'null',
    description: 'The default value (uncontrolled).',
  },
  {
    name: 'value',
    type: 'string | null',
    default: 'null',
    description: 'The current value (controlled). Supports two-way binding with `[(value)]`.',
  },
  {
    name: 'valueChange',
    type: 'EventEmitter<string | null>',
    description: 'Emits when the selected value changes.',
  },
];

const SWITCH_PROPS: DocApiProp[] = [
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    default: "'md'",
    description: 'Switch size.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables interaction. Also set by reactive forms.',
  },
  {
    name: 'default-selected',
    type: 'boolean',
    default: 'false',
    description: 'Initial selected state for uncontrolled usage.',
  },
  {
    name: 'selected',
    type: 'boolean',
    default: 'false',
    description: 'Selected state. Supports two-way binding with `[(selected)]`.',
  },
  {
    name: 'selectedChange',
    type: 'EventEmitter<boolean>',
    description: 'Emits when the selected state changes.',
  },
  {
    name: 'aria-label',
    type: 'string',
    description: 'Accessible label when no visible label is provided.',
  },
  {
    name: 'name',
    type: 'string',
    description: 'Form field name for native form submission.',
  },
  {
    name: 'value',
    type: 'string',
    default: "'on'",
    description: 'Form field value when selected in native form submission.',
  },
];

const SLIDER_PROPS: DocApiProp[] = [
  {
    name: 'value',
    type: 'number | number[]',
    description: 'The current value (controlled). Supports two-way binding with `[(value)]`.',
  },
  {
    name: 'default-value',
    type: 'number | number[]',
    default: '0',
    description:
      'The default value (uncontrolled). Use a number array for range sliders.',
  },
  {
    name: 'valueChange',
    type: 'EventEmitter<number | number[]>',
    description: 'Emits when the value changes (from `model()` two-way binding).',
  },
  {
    name: 'min',
    type: 'number',
    default: '0',
    description: "The slider's minimum value.",
  },
  {
    name: 'max',
    type: 'number',
    default: '100',
    description: "The slider's maximum value.",
  },
  {
    name: 'step',
    type: 'number',
    default: '1',
    description: "The slider's step value.",
  },
  {
    name: 'format-options',
    type: 'Intl.NumberFormatOptions',
    description: 'The display format of the value label on `av-slider-output`.',
  },
  {
    name: 'orientation',
    type: "'horizontal' | 'vertical'",
    default: "'horizontal'",
    description: 'The orientation of the slider.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Whether the slider is disabled. Also set by reactive forms.',
  },
];

const AVATAR_PROPS: DocApiProp[] = [
  {
    name: 'color',
    type: "'default' | 'accent' | 'success' | 'warning' | 'danger'",
    default: "'default'",
    description: 'Fallback color theme (span[av-avatar]).',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    default: "'md'",
    description: 'Avatar size (span[av-avatar]).',
  },
  {
    name: 'variant',
    type: "'default' | 'soft'",
    default: "'default'",
    description: 'Visual style variant (span[av-avatar]).',
  },
  {
    name: 'src',
    type: 'string',
    description: 'Image source URL (img[av-avatar-image]).',
  },
  {
    name: 'srcset',
    type: 'string',
    description: 'Responsive image `srcset` (img[av-avatar-image]).',
  },
  {
    name: 'sizes',
    type: 'string',
    description: 'Responsive image `sizes` hint (img[av-avatar-image]).',
  },
  {
    name: 'alt',
    type: 'string',
    description: 'Accessible alternative text (img[av-avatar-image]).',
  },
  {
    name: 'crossorigin',
    type: "'anonymous' | 'use-credentials'",
    description: 'CORS setting for the image request (img[av-avatar-image]).',
  },
  {
    name: 'loading',
    type: "'eager' | 'lazy'",
    description: 'Native lazy loading attribute (img[av-avatar-image]).',
  },
  {
    name: 'delay-ms',
    type: 'number',
    default: '0',
    description:
      'Delay before showing fallback while the image loads (span[av-avatar-fallback]).',
  },
  {
    name: 'color',
    type: "'default' | 'accent' | 'success' | 'warning' | 'danger' | undefined",
    description:
      'Override color from parent. Inherits from av-avatar when omitted (span[av-avatar-fallback]).',
  },
];

const BADGE_PROPS: DocApiProp[] = [
  {
    name: 'label',
    type: 'string | number',
    description:
      'Content shorthand (text or number). When omitted with no projected content, renders as a dot.',
  },
  {
    name: 'color',
    type: "'default' | 'accent' | 'success' | 'warning' | 'danger'",
    default: "'default'",
    description: 'Color variant of the badge.',
  },
  {
    name: 'variant',
    type: "'primary' | 'secondary' | 'soft'",
    default: "'primary'",
    description: 'Visual style variant.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    default: "'md'",
    description: 'Size of the badge.',
  },
  {
    name: 'placement',
    type: "'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'",
    default: "'top-right'",
    description: 'Position of the badge relative to `av-badge-anchor`.',
  },
];

const CHIP_PROPS: DocApiProp[] = [
  {
    name: 'color',
    type: "'accent' | 'default' | 'success' | 'warning' | 'danger'",
    default: "'default'",
    description: 'Chip color.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    default: "'md'",
    description: 'Chip size.',
  },
  {
    name: 'variant',
    type: "'primary' | 'secondary' | 'tertiary' | 'soft'",
    default: "'secondary'",
    description: 'Visual style variant.',
  },
  {
    name: 'label',
    type: 'string | number',
    description: 'Optional label text shorthand instead of projected content.',
  },
];

const TAG_GROUP_PROPS: DocApiProp[] = [
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    description: 'Shared size for child tags.',
  },
  {
    name: 'variant',
    type: "'default' | 'surface'",
    description: 'Shared visual variant for child tags.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables all child tags.',
  },
  {
    name: 'allows-removing',
    type: 'boolean',
    default: 'false',
    description: 'Shows remove buttons on child tags and enables remove keyboard shortcuts.',
  },
  {
    name: 'selection-mode',
    type: "'none' | 'single' | 'multiple'",
    default: "'none'",
    description: 'Whether tags can be selected.',
  },
  {
    name: 'disabled-keys',
    type: 'string[]',
    default: '[]',
    description: 'Keys that cannot be selected or removed.',
  },
  {
    name: 'default-selected-keys',
    type: 'string[]',
    default: '[]',
    description: 'Initial selected keys for uncontrolled usage.',
  },
  {
    name: 'selectedKeys',
    type: 'string[]',
    description: 'Selected keys. Supports two-way binding with [(selectedKeys)].',
  },
  {
    name: 'remove',
    type: 'Output<string[]>',
    description: 'Emitted with removed tag keys when a tag is removed.',
  },
];

const KBD_PROPS: DocApiProp[] = [
  {
    name: 'variant',
    type: "'default' | 'light'",
    default: "'default'",
    description: 'Visual variant of the keyboard key (`av-kbd`).',
  },
  {
    name: 'key-value',
    type: 'AvKbdKey',
    description:
      'Required. Keyboard key to display on `abbr[av-kbd-abbr]` (sets symbol and `title`).',
  },
];

const SKELETON_PROPS: DocApiProp[] = [
  {
    name: 'animation-type',
    type: "'shimmer' | 'pulse' | 'none'",
    default: "'shimmer' or --av-skeleton-animation",
    description:
      'Animation type for the skeleton. When omitted, reads --av-skeleton-animation from computed styles, then falls back to shimmer.',
  },
];

const SPINNER_PROPS: DocApiProp[] = [
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg' | 'xl'",
    default: "'md'",
    description: 'Size of the spinner (av-spinner).',
  },
  {
    name: 'color',
    type: "'current' | 'accent' | 'success' | 'warning' | 'danger'",
    default: "'accent'",
    description: 'Color variant of the spinner (av-spinner).',
  },
];

const TABLE_PROPS: DocApiProp[] = [
  {
    name: 'variant',
    type: "'primary' | 'secondary'",
    default: "'primary'",
    description:
      'Visual variant. Primary has a gray background container; secondary is flat with transparent rows (div[av-table]).',
  },
  {
    name: 'allows-sorting',
    type: 'boolean',
    default: 'false',
    description:
      'Whether the column supports sorting. Sets `data-allows-sorting` for styling (th[av-table-column]).',
  },
  {
    name: 'selected',
    type: 'boolean',
    default: 'false',
    description: 'Selected row state. Sets `data-selected` (tr[av-table-row]).',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description:
      'Disabled row state. Sets `data-disabled` and `aria-disabled` (tr[av-table-row]).',
  },
];

const PROGRESS_CIRCLE_PROPS: DocApiProp[] = [
  {
    name: 'value',
    type: 'number',
    default: '0',
    description: 'The current value (div[av-progress-circle]).',
  },
  {
    name: 'min',
    type: 'number',
    default: '0',
    description: 'The minimum value (div[av-progress-circle]).',
  },
  {
    name: 'max',
    type: 'number',
    default: '100',
    description: 'The maximum value (div[av-progress-circle]).',
  },
  {
    name: 'is-indeterminate',
    type: 'boolean',
    default: 'false',
    description: 'Whether progress is indeterminate (div[av-progress-circle]).',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    default: "'md'",
    description: 'Size of the circle (div[av-progress-circle]).',
  },
  {
    name: 'color',
    type: "'default' | 'accent' | 'success' | 'warning' | 'danger'",
    default: "'accent'",
    description: 'Color of the progress arc (div[av-progress-circle]).',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables the progress indicator (div[av-progress-circle]).',
  },
  {
    name: 'aria-label',
    type: 'string',
    description: 'Accessible label for screen readers (div[av-progress-circle]).',
  },
  {
    name: 'viewBox',
    type: 'string',
    default: "'0 0 36 36'",
    description: 'SVG viewBox on svg[av-progress-circle-track].',
  },
  {
    name: 'cx',
    type: 'number',
    default: '18',
    description: 'Circle center x (track-circle / fill-circle).',
  },
  {
    name: 'cy',
    type: 'number',
    default: '18',
    description: 'Circle center y (track-circle / fill-circle).',
  },
  {
    name: 'r',
    type: 'number',
    default: '16',
    description: 'Circle radius (track-circle / fill-circle).',
  },
  {
    name: 'stroke-width',
    type: 'number',
    default: '4',
    description: 'Stroke width (track-circle / fill-circle).',
  },
];

const METER_PROPS: DocApiProp[] = [
  {
    name: 'value',
    type: 'number',
    default: '0',
    description: 'The current value (div[av-meter]).',
  },
  {
    name: 'min',
    type: 'number',
    default: '0',
    description: 'The minimum value (div[av-meter]).',
  },
  {
    name: 'max',
    type: 'number',
    default: '100',
    description: 'The maximum value (div[av-meter]).',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    default: "'md'",
    description: 'Size of the meter track (div[av-meter]).',
  },
  {
    name: 'color',
    type: "'default' | 'accent' | 'success' | 'warning' | 'danger'",
    default: "'accent'",
    description: 'Color of the fill bar (div[av-meter]).',
  },
  {
    name: 'format-options',
    type: 'Intl.NumberFormatOptions',
    description: 'Number format for the value display on av-meter-output (div[av-meter]).',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables the meter (div[av-meter]).',
  },
  {
    name: 'aria-label',
    type: 'string',
    description: 'Accessible label when no visible label is provided (div[av-meter]).',
  },
];

const PROGRESS_BAR_PROPS: DocApiProp[] = [
  {
    name: 'value',
    type: 'number',
    default: '0',
    description: 'The current value (div[av-progress-bar]).',
  },
  {
    name: 'min',
    type: 'number',
    default: '0',
    description: 'The minimum value (div[av-progress-bar]).',
  },
  {
    name: 'max',
    type: 'number',
    default: '100',
    description: 'The maximum value (div[av-progress-bar]).',
  },
  {
    name: 'is-indeterminate',
    type: 'boolean',
    default: 'false',
    description: 'Whether progress is indeterminate (div[av-progress-bar]).',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    default: "'md'",
    description: 'Size of the progress track (div[av-progress-bar]).',
  },
  {
    name: 'color',
    type: "'default' | 'accent' | 'success' | 'warning' | 'danger'",
    default: "'accent'",
    description: 'Color of the fill bar (div[av-progress-bar]).',
  },
  {
    name: 'format-options',
    type: 'Intl.NumberFormatOptions',
    description:
      'Number format for the value display on av-progress-bar-output (div[av-progress-bar]).',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables the progress bar (div[av-progress-bar]).',
  },
  {
    name: 'aria-label',
    type: 'string',
    description: 'Accessible label when no visible label is provided (div[av-progress-bar]).',
  },
];

const MODAL_PROPS: DocApiProp[] = [
  {
    name: 'open',
    type: 'boolean',
    default: 'false',
    description:
      'Controls whether the modal is open. Supports two-way binding with [(open)] (av-modal).',
  },
  {
    name: 'dismissable',
    type: 'boolean',
    default: 'true',
    description: 'Whether clicking the backdrop closes the modal (av-modal).',
  },
  {
    name: 'keyboard-dismiss-disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables closing via the Escape key (av-modal).',
  },
  {
    name: 'backdrop',
    type: "'opaque' | 'blur' | 'transparent'",
    default: "'opaque'",
    description: 'Backdrop visual variant (av-modal).',
  },
  {
    name: 'backdrop-class',
    type: 'string',
    default: "''",
    description:
      'Extra CSS classes merged onto the visual backdrop after the variant BEM classes (av-modal).',
  },
  {
    name: 'container-class',
    type: 'string',
    default: "''",
    description:
      'Extra CSS classes merged onto the overlay container after the BEM classes — useful for custom enter/exit motion (av-modal).',
  },
  {
    name: 'placement',
    type: "'auto' | 'top' | 'center' | 'bottom'",
    default: "'auto'",
    description: 'Modal position on screen (av-modal).',
  },
  {
    name: 'scroll',
    type: "'inside' | 'outside'",
    default: "'inside'",
    description: 'Scroll behavior for long content (av-modal).',
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'cover' | 'full'",
    default: "'md'",
    description: 'Maximum width / layout preset (av-modal).',
  },
  {
    name: 'scroll',
    type: "'inside' | 'outside' | undefined",
    description:
      'Scroll behavior. Inherits from av-modal when omitted (div[av-modal-dialog]).',
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'cover' | 'full' | undefined",
    description: 'Size preset. Inherits from av-modal when omitted (div[av-modal-dialog]).',
  },
  {
    name: 'aria-label',
    type: 'string',
    description: 'Accessible label when the trigger has no visible text ([av-modal-trigger]).',
  },
];

const DRAWER_PROPS: DocApiProp[] = [
  {
    name: 'open',
    type: 'boolean',
    default: 'false',
    description:
      'Controls whether the drawer is open. Supports two-way binding with [(open)] (av-drawer).',
  },
  {
    name: 'dismissable',
    type: 'boolean',
    default: 'true',
    description: 'Whether clicking the backdrop closes the drawer (av-drawer).',
  },
  {
    name: 'keyboard-dismiss-disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables closing via the Escape key (av-drawer).',
  },
  {
    name: 'backdrop',
    type: "'opaque' | 'blur' | 'transparent'",
    default: "'opaque'",
    description: 'Backdrop visual variant (av-drawer).',
  },
  {
    name: 'backdrop-class',
    type: 'string',
    default: "''",
    description:
      'Extra CSS classes merged onto the visual backdrop after the variant BEM classes (av-drawer).',
  },
  {
    name: 'content-class',
    type: 'string',
    default: "''",
    description:
      'Extra CSS classes merged onto the content positioning wrapper after the BEM classes (av-drawer).',
  },
  {
    name: 'placement',
    type: "'top' | 'bottom' | 'left' | 'right'",
    default: "'bottom'",
    description: 'Drawer slide direction (av-drawer).',
  },
  {
    name: 'placement',
    type: "'top' | 'bottom' | 'left' | 'right' | undefined",
    description: 'Slide direction. Inherits from av-drawer when omitted (div[av-drawer-dialog]).',
  },
  {
    name: 'aria-label',
    type: 'string',
    description: 'Accessible label when the trigger has no visible text ([av-drawer-trigger]).',
  },
];

const ALERT_DIALOG_PROPS: DocApiProp[] = [
  {
    name: 'open',
    type: 'boolean',
    default: 'false',
    description:
      'Controls whether the alert dialog is open. Supports two-way binding with [(open)] (av-alert-dialog).',
  },
  {
    name: 'dismissable',
    type: 'boolean',
    default: 'false',
    description: 'Whether clicking the backdrop closes the alert dialog (av-alert-dialog).',
  },
  {
    name: 'keyboard-dismiss-disabled',
    type: 'boolean',
    default: 'true',
    description: 'Disables closing via the Escape key (av-alert-dialog).',
  },
  {
    name: 'backdrop',
    type: "'opaque' | 'blur' | 'transparent'",
    default: "'opaque'",
    description: 'Backdrop visual variant (av-alert-dialog).',
  },
  {
    name: 'backdrop-class',
    type: 'string',
    default: "''",
    description:
      'Extra CSS classes merged onto the visual backdrop after the variant BEM classes (av-alert-dialog).',
  },
  {
    name: 'container-class',
    type: 'string',
    default: "''",
    description:
      'Extra CSS classes merged onto the overlay container after the BEM classes — useful for custom enter/exit motion (av-alert-dialog).',
  },
  {
    name: 'placement',
    type: "'auto' | 'top' | 'center' | 'bottom'",
    default: "'auto'",
    description: 'Alert dialog position on screen (av-alert-dialog).',
  },
  {
    name: 'scroll',
    type: "'inside' | 'outside'",
    default: "'inside'",
    description: 'Scroll behavior for long content (av-alert-dialog).',
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'cover'",
    default: "'md'",
    description: 'Maximum width / layout preset (av-alert-dialog).',
  },
  {
    name: 'scroll',
    type: "'inside' | 'outside' | undefined",
    description:
      'Scroll behavior. Inherits from av-alert-dialog when omitted (div[av-alert-dialog-dialog]).',
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'cover' | undefined",
    description:
      'Size preset. Inherits from av-alert-dialog when omitted (div[av-alert-dialog-dialog]).',
  },
  {
    name: 'aria-label',
    type: 'string',
    description: 'Accessible label when the trigger has no visible text ([av-alert-dialog-trigger]).',
  },
];

const POPOVER_PROPS: DocApiProp[] = [
  {
    name: 'open',
    type: 'boolean',
    default: 'false',
    description: 'Controls whether the popover is open. Supports two-way binding with [(open)] (av-popover).',
  },
  {
    name: 'dismissable',
    type: 'boolean',
    default: 'true',
    description: 'Closes the popover when clicking outside (av-popover).',
  },
  {
    name: 'keyboard-dismiss-disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables closing via the Escape key (av-popover).',
  },
  {
    name: 'aria-label',
    type: 'string',
    description: 'Accessible label when the trigger has no visible text ([av-popover-trigger]).',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables the trigger ([av-popover-trigger]).',
  },
  {
    name: 'placement',
    type: "'top' | 'top start' | 'top end' | 'bottom' | 'bottom start' | 'bottom end' | 'left' | 'left top' | 'left bottom' | 'right' | 'right top' | 'right bottom' | 'start' | 'start top' | 'start bottom' | 'end' | 'end top' | 'end bottom'",
    default: "'bottom'",
    description: 'Preferred placement relative to the trigger (av-popover-content).',
  },
  {
    name: 'offset',
    type: 'number',
    default: '8',
    description: 'Distance between trigger and popover in pixels (av-popover-content).',
  },
  {
    name: 'should-flip',
    type: 'boolean',
    default: 'true',
    description: 'Whether the popover can flip to fit the viewport (av-popover-content).',
  },
  {
    name: 'overlay-class',
    type: 'string',
    description: 'Extra classes applied to the portaled overlay panel (av-popover-content).',
  },
  {
    name: 'overlay-style',
    type: 'Record<string, string | number>',
    description: 'Inline styles applied to the portaled overlay panel (av-popover-content).',
  },
];

const TOOLTIP_PROPS: DocApiProp[] = [
  {
    name: 'avTooltip',
    type: 'string | TemplateRef<unknown>',
    description: 'Tooltip content. Plain text or a template ([avTooltip]).',
  },
  {
    name: 'tooltip-position',
    type: "'top' | 'bottom' | 'left' | 'right'",
    default: "'top'",
    description: 'Preferred tooltip position ([avTooltip]).',
  },
  {
    name: 'tooltip-event',
    type: "'hover' | 'focus' | 'both'",
    default: "'hover'",
    description: 'Event that opens the tooltip ([avTooltip]).',
  },
  {
    name: 'show-delay',
    type: 'number',
    default: '700',
    description: 'Delay before showing the tooltip in milliseconds ([avTooltip]).',
  },
  {
    name: 'hide-delay',
    type: 'number',
    default: '0',
    description: 'Delay before hiding the tooltip in milliseconds ([avTooltip]).',
  },
  {
    name: 'tooltip-disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables the tooltip ([avTooltip]).',
  },
  {
    name: 'auto-hide',
    type: 'boolean',
    default: 'true',
    description: 'Hides the tooltip when the pointer leaves the trigger ([avTooltip]).',
  },
  {
    name: 'hide-on-escape',
    type: 'boolean',
    default: 'true',
    description: 'Hides the tooltip when Escape is pressed ([avTooltip]).',
  },
  {
    name: 'position-top',
    type: 'number',
    default: '0',
    description: 'Additional vertical offset in pixels ([avTooltip]).',
  },
  {
    name: 'position-left',
    type: 'number',
    default: '0',
    description: 'Additional horizontal offset in pixels ([avTooltip]).',
  },
];

const ALERT_PROPS: DocApiProp[] = [
  {
    name: 'status',
    type: "'default' | 'accent' | 'success' | 'warning' | 'danger'",
    default: "'default'",
    description:
      'Alert status. Colors the indicator and title soft-foreground tokens (av-alert).',
  },
];

const TOAST_PROPS: DocApiProp[] = [
  {
    name: 'key',
    type: 'string | undefined',
    description: 'Routes messages with a matching key to this region (av-toast).',
  },
  {
    name: 'life',
    type: 'number',
    default: '4000',
    description: 'Default auto-dismiss duration in milliseconds (av-toast).',
  },
  {
    name: 'placement',
    type: "'bottom' | 'bottom-start' | 'bottom-end' | 'top' | 'top-start' | 'top-end'",
    default: "'bottom'",
    description: 'Region placement on screen (av-toast).',
  },
  {
    name: 'max-visible-toasts',
    type: 'number',
    default: '3',
    description: 'Maximum number of visible stacked toasts (av-toast).',
  },
  {
    name: 'width',
    type: 'number',
    default: '460',
    description: 'Toast region width in pixels (av-toast).',
  },
  {
    name: 'gap',
    type: 'number',
    default: '12',
    description: 'Gap between stacked toasts in pixels (av-toast).',
  },
  {
    name: 'scale-factor',
    type: 'number',
    default: '0.05',
    description: 'Scale factor applied per stacked toast when collapsed (av-toast).',
  },
  {
    name: 'expand',
    type: 'boolean',
    default: 'false',
    description:
      'Keeps the stack expanded. When false, hover expands peeks into a full list (av-toast).',
  },
  {
    name: 'swipe-threshold',
    type: 'number',
    default: '50',
    description: 'Vertical swipe distance in pixels required to dismiss a toast (av-toast).',
  },
  {
    name: 'prevent-duplicates',
    type: 'boolean',
    default: 'false',
    description: 'Prevents adding another open toast with the same title and description (av-toast).',
  },
  {
    name: 'closed',
    type: 'EventEmitter<AvToastItemCloseEvent>',
    description: 'Emits after a toast is removed (av-toast).',
  },
  {
    name: 'add',
    type: '(title: string, options?: AvToastAddOptions) => string',
    description:
      'Publishes a toast and returns its id. Options: description, variant, key, life, sticky, closable, isLoading, hideIndicator, actionLabel, action, onClose (AvToastService).',
  },
  {
    name: 'addAll',
    type: '(messages: Array<{ title: string } & AvToastAddOptions>) => void',
    description: 'Publishes multiple toasts in one batch (AvToastService).',
  },
  {
    name: 'update',
    type: '(id: string, patch: Partial<AvToastMessage>) => void',
    description: 'Patches an existing toast in place and resets its auto-dismiss timer (AvToastService).',
  },
  {
    name: 'promise',
    type: '(promise: Promise<T> | (() => Promise<T>), options: AvToastPromiseOptions<T>) => string',
    description:
      'Shows a loading toast, then updates it to success or danger when the promise settles (AvToastService).',
  },
  {
    name: 'clear',
    type: '(key?: string) => void',
    description: 'Dismisses all toasts. When key is set, only matching regions clear (AvToastService).',
  },
  {
    name: 'close',
    type: '(id: string) => void',
    description: 'Dismisses a single toast by id (AvToastService).',
  },
  {
    name: 'success',
    type: '(title: string, options?: Omit<AvToastAddOptions, "variant">) => string',
    description: 'Publishes a success-variant toast and returns its id (AvToastService).',
  },
  {
    name: 'danger',
    type: '(title: string, options?: Omit<AvToastAddOptions, "variant">) => string',
    description: 'Publishes a danger-variant toast and returns its id (AvToastService).',
  },
  {
    name: 'info',
    type: '(title: string, options?: Omit<AvToastAddOptions, "variant">) => string',
    description: 'Publishes an accent-variant toast and returns its id (AvToastService).',
  },
  {
    name: 'warning',
    type: '(title: string, options?: Omit<AvToastAddOptions, "variant">) => string',
    description: 'Publishes a warning-variant toast and returns its id (AvToastService).',
  },
];

function planned(
  slug: string,
  label: string,
  category: DocComponentCategory,
  description: string,
  imports: string[],
): DocComponentMeta {
  return {
    slug,
    label,
    category,
    description,
    status: 'planned',
    path: `/docs/components/${slug}`,
    imports,
  };
}

export const DOCS_COMPONENTS: DocComponentMeta[] = [
  {
    slug: 'button',
    label: 'Button',
    category: 'Buttons',
    description: 'A clickable button component with multiple variants and states',
    status: 'documented',
    path: '/docs/components/button',
    imports: ['AvButtonComponent'],
    props: BUTTON_PROPS,
  },
  {
    slug: 'button-group',
    label: 'ButtonGroup',
    category: 'Buttons',
    description: 'Group related buttons together with consistent styling and spacing',
    status: 'documented',
    path: '/docs/components/button-group',
    imports: ['AvButtonGroupImports'],
    props: [
      {
        name: 'variant',
        type: "'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost' | 'danger' | 'danger-soft'",
        description: 'Visual style variant applied to all buttons in the group.',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        description: 'Size applied to all buttons in the group.',
      },
      {
        name: 'orientation',
        type: "'horizontal' | 'vertical'",
        default: "'horizontal'",
        description: 'The orientation of the button group.',
      },
      {
        name: 'fullWidth',
        type: 'boolean',
        default: 'false',
        description:
          'Whether the button group should take full width of its container. Template alias: full-width.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description:
          'Whether all buttons in the group are disabled (can be overridden on individual buttons).',
      },
    ],
  },
  {
    slug: 'close-button',
    label: 'CloseButton',
    category: 'Buttons',
    description: 'Icon button for dismissing overlays and panels.',
    status: 'documented',
    path: '/docs/components/close-button',
    imports: ['AvCloseButtonComponent'],
    props: [
      {
        name: 'variant',
        type: "'default'",
        default: "'default'",
        description: 'Visual style variant.',
      },
      {
        name: 'ariaLabel',
        type: 'string',
        default: "'Close'",
        description: 'Accessible label for the close button.',
      },
      {
        name: 'type',
        type: "'button' | 'submit' | 'reset'",
        default: "'button'",
        description: 'Native button type.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Disables interaction.',
      },
      {
        name: 'pending',
        type: 'boolean',
        default: 'false',
        description: 'Shows pending state and blocks interaction.',
      },
      {
        name: 'useDefaultIcon',
        type: 'boolean',
        default: 'true',
        description: 'Renders the built-in close icon when true.',
      },
    ],
  },
  {
    slug: 'toggle-button',
    label: 'ToggleButton',
    category: 'Buttons',
    description: 'An interactive toggle control for on/off or selected/unselected states.',
    status: 'documented',
    path: '/docs/components/toggle-button',
    imports: ['AvToggleButtonComponent'],
    props: [
      {
        name: 'variant',
        type: "'default' | 'ghost'",
        default: "'default'",
        description: 'Visual style variant.',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        description: 'Size of the toggle button. Inherits from toggle-button-group when omitted.',
      },
      {
        name: 'icon-only',
        type: 'boolean',
        default: 'false',
        description: 'Whether the button contains only an icon (square layout).',
      },
      {
        name: 'value',
        type: 'string',
        default: "''",
        description: 'Unique value used for selection inside a toggle-button-group.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Whether the toggle button is disabled.',
      },
      {
        name: 'selected',
        type: 'boolean',
        default: 'false',
        description:
          'Selected state outside a group. Supports two-way binding with [(selected)].',
      },
    ],
  },
  {
    slug: 'toggle-button-group',
    label: 'ToggleButtonGroup',
    category: 'Buttons',
    description:
      'Groups multiple ToggleButtons into a unified control, allowing users to select one or multiple options.',
    status: 'documented',
    path: '/docs/components/toggle-button-group',
    imports: ['AvToggleButtonGroupImports'],
    props: [
      {
        name: 'selection-mode',
        type: "'single' | 'multiple'",
        default: "'single'",
        description: 'Whether one or multiple buttons can be selected.',
      },
      {
        name: 'selectedKeys',
        type: 'string[]',
        description: 'Controlled selection state. Supports two-way binding with [(selectedKeys)].',
      },
      {
        name: 'default-selected-keys',
        type: 'string[]',
        default: '[]',
        description: 'Default selected keys (uncontrolled).',
      },
      {
        name: 'disallow-empty-selection',
        type: 'boolean',
        default: 'false',
        description: 'Prevents clearing all selections.',
      },
      {
        name: 'orientation',
        type: "'horizontal' | 'vertical'",
        default: "'horizontal'",
        description: 'Layout direction.',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        description: 'Size propagated to child ToggleButtons.',
      },
      {
        name: 'detached',
        type: 'boolean',
        default: 'false',
        description: 'Whether buttons are visually separated with gaps.',
      },
      {
        name: 'full-width',
        type: 'boolean',
        default: 'false',
        description: 'Whether the group fills available width.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Disables all buttons in the group.',
      },
    ],
  },
  {
    slug: 'link',
    label: 'Link',
    category: 'Navigation',
    description: 'A styled anchor component for navigation with built-in icon support.',
    status: 'documented',
    path: '/docs/components/link',
    imports: ['AvLinkImports'],
    props: [
      {
        name: 'href',
        type: 'string',
        default: "'#'",
        description: 'Destination URL for the anchor.',
      },
      {
        name: 'variant',
        type: "'primary' | 'secondary' | 'muted'",
        default: "'primary'",
        description: 'Visual style variant.',
      },
      {
        name: 'underline',
        type: "'always' | 'hover' | 'none'",
        default: "'hover'",
        description: 'Underline display behavior.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Disables pointer and keyboard navigation (removes href, sets aria-disabled).',
      },
      {
        name: 'external',
        type: 'boolean',
        description:
          'Opens in a new tab. Auto-detected for http(s), mailto:, and tel: when omitted.',
      },
      {
        name: 'target',
        type: 'string',
        description: 'Controls where to open the linked document (defaults to _blank when external).',
      },
      {
        name: 'rel',
        type: 'string',
        description:
          'Relationship between the current and linked documents (defaults to noopener noreferrer for _blank).',
      },
    ],
  },
  {
    slug: 'label',
    label: 'Label',
    category: 'Form Primitives',
    description: 'Renders an accessible label associated with form controls.',
    status: 'documented',
    path: '/docs/components/label',
    imports: ['AvLabelComponent'],
    props: [
      {
        name: 'for',
        type: 'string',
        description: 'The id of the element the label is associated with.',
      },
      {
        name: 'required',
        type: 'boolean',
        default: 'false',
        description: 'Whether to display a required indicator.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Whether the label is in a disabled state.',
      },
      {
        name: 'invalid',
        type: 'boolean',
        default: 'false',
        description: 'Whether the label is in an invalid state.',
      },
    ],
  },
  {
    slug: 'description',
    label: 'Description',
    category: 'Form Primitives',
    description: 'Supplementary helper text for form fields and other components.',
    status: 'documented',
    path: '/docs/components/description',
    imports: ['AvDescriptionComponent'],
    props: [],
  },
  {
    slug: 'field-error',
    label: 'FieldError',
    category: 'Form Primitives',
    description: 'Validation error message for a single form field.',
    status: 'documented',
    path: '/docs/components/field-error',
    imports: ['AvFieldErrorComponent'],
    props: [
      {
        name: 'visible',
        type: 'boolean',
        default: 'true',
        description: 'Controls visibility and expand/collapse animation.',
      },
    ],
  },
  {
    slug: 'error-message',
    label: 'ErrorMessage',
    category: 'Form Primitives',
    description: 'Low-level error text for non-form contexts such as TagGroup and Calendar.',
    status: 'documented',
    path: '/docs/components/error-message',
    imports: ['AvErrorMessageComponent'],
    props: [],
  },
  {
    slug: 'form',
    label: 'Form',
    category: 'Form Layout',
    description: 'Wrapper component for form validation and submission handling.',
    status: 'documented',
    path: '/docs/components/form',
    imports: ['AvFormComponent'],
    props: [
      {
        name: 'action',
        type: 'string',
        description: 'The URL to submit the form data to.',
      },
      {
        name: 'method',
        type: "'get' | 'post'",
        description: 'The HTTP method to use when submitting the form.',
      },
      {
        name: 'enctype',
        type: "'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'",
        description: 'The encoding type for form data submission.',
      },
      {
        name: 'target',
        type: "'_self' | '_blank' | '_parent' | '_top'",
        description: 'Where to display the response after submitting the form.',
      },
      {
        name: 'novalidate',
        type: 'boolean',
        default: 'false',
        description: 'Disables native browser validation.',
      },
      {
        name: 'aria-label',
        type: 'string',
        description: 'Accessibility label for the form landmark.',
      },
      {
        name: 'aria-labelledby',
        type: 'string',
        description:
          'ID of the element that labels the form. Creates a form landmark when provided.',
      },
      {
        name: 'validationBehavior',
        type: "'native' | 'aria'",
        default: "'native'",
        description:
          "Whether to use native HTML validation or ARIA validation. 'native' blocks form submission; 'aria' displays errors in realtime.",
      },
      {
        name: 'validationErrors',
        type: 'Record<string, string | string[]>',
        default: '{}',
        description:
          'Server-side validation errors mapped by field name. Displayed immediately and cleared when the user modifies the field.',
      },
    ],
  },
  {
    slug: 'fieldset',
    label: 'Fieldset',
    category: 'Form Layout',
    description: 'Group related form controls with legends, descriptions, and actions.',
    status: 'documented',
    path: '/docs/components/fieldset',
    imports: ['AvFieldsetImports'],
    props: [
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description:
          'Disables the fieldset and descendant form controls. Sets data-disabled when true.',
      },
    ],
  },
  {
    slug: 'input',
    label: 'Input',
    category: 'Text Inputs',
    description:
      'Primitive single-line text input that accepts standard HTML attributes and Angular forms bindings.',
    status: 'documented',
    path: '/docs/components/input',
    imports: ['AvInputComponent'],
    props: [
      {
        name: 'variant',
        type: "'primary' | 'secondary'",
        default: "'primary'",
        description:
          'Visual variant. primary is the default style with shadow. secondary is a lower emphasis variant without shadow, suitable for use in surfaces.',
      },
      {
        name: 'full-width',
        type: 'boolean',
        default: 'false',
        description: 'Whether the input should take full width of its container.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Disables the input.',
      },
      {
        name: 'invalid',
        type: 'boolean',
        default: 'false',
        description: 'Marks the input as invalid and sets aria-invalid / data-invalid.',
      },
      {
        name: 'ngModel / formControlName',
        type: 'string',
        default: '—',
        description:
          'Bound value via ControlValueAccessor. Use FormsModule (ngModel) or ReactiveFormsModule.',
      },
      {
        name: 'type',
        type: 'string',
        default: "'text'",
        description: 'Native input type (text, email, password, number, etc.).',
      },
      {
        name: 'placeholder',
        type: 'string',
        default: '—',
        description: 'Placeholder text.',
      },
      {
        name: 'name',
        type: 'string',
        default: '—',
        description: 'Name for form submission.',
      },
      {
        name: 'readonly',
        type: 'boolean',
        default: 'false',
        description: 'Native read-only attribute.',
      },
      {
        name: 'required',
        type: 'boolean',
        default: 'false',
        description: 'Native required attribute for HTML validation.',
      },
    ],
  },
  {
    slug: 'date-field',
    label: 'DateField',
    category: 'Text Inputs',
    description:
      'Segmented date input field with labels, descriptions, validation, and locale-aware editing built on @internationalized/date.',
    status: 'hidden',
    path: '/docs/components/date-field',
    imports: ['AvDateFieldImports'],
    props: [
      {
        name: 'value / default-value',
        type: 'CalendarDate | CalendarDateTime | ZonedDateTime | null',
        default: 'null',
        description:
          'Selected date value from @internationalized/date. Implements ControlValueAccessor.',
      },
      {
        name: 'granularity',
        type: "'day' | 'hour' | 'minute' | 'second'",
        default: "'day'",
        description: 'Smallest unit displayed in the segmented input.',
      },
      {
        name: 'hour-cycle',
        type: '12 | 24',
        default: 'undefined',
        description: 'Force 12- or 24-hour clock when time segments are shown.',
      },
      {
        name: 'locale',
        type: 'string',
        default: 'LOCALE_ID',
        description: 'BCP 47 locale for segment order and formatting.',
      },
      {
        name: 'placeholder-value',
        type: 'DateValue | null',
        default: 'null',
        description: 'Influences placeholder formatting when value is empty.',
      },
      {
        name: 'min-value / max-value',
        type: 'DateValue | null',
        default: 'null',
        description: 'Inclusive date bounds for committed values.',
      },
      {
        name: 'is-date-unavailable',
        type: '(date: DateValue) => boolean',
        default: 'null',
        description: 'Return true when a date cannot be committed.',
      },
      {
        name: 'disabled / readonly / invalid / required',
        type: 'boolean',
        default: 'false',
        description: 'Interaction and validation states mirrored to data-* attributes.',
      },
      {
        name: 'full-width',
        type: 'boolean',
        default: 'false',
        description: 'Expands the field to the full width of its container.',
      },
      {
        name: 'name / id',
        type: 'string',
        default: 'undefined',
        description: 'Hidden ISO form field name and root element id.',
      },
      {
        name: 'DateInputGroup variant',
        type: "'primary' | 'secondary'",
        default: "'primary'",
        description: 'Visual variant for av-date-input-group.',
      },
    ],
  },
  {
    slug: 'time-field',
    label: 'TimeField',
    category: 'Text Inputs',
    description:
      'Segmented time input field with labels, descriptions, validation, and locale-aware editing built on @internationalized/date.',
    status: 'documented',
    path: '/docs/components/time-field',
    imports: ['AvTimeFieldImports'],
    props: [
      {
        name: 'value / default-value',
        type: 'Time | CalendarDateTime | ZonedDateTime | null',
        default: 'null',
        description:
          'Selected time value from @internationalized/date (TimeValue). Implements ControlValueAccessor.',
      },
      {
        name: 'granularity',
        type: "'hour' | 'minute' | 'second'",
        default: "'minute'",
        description: 'Smallest unit displayed in the segmented input.',
      },
      {
        name: 'hour-cycle',
        type: '12 | 24',
        default: 'undefined',
        description: 'Force 12- or 24-hour clock display.',
      },
      {
        name: 'locale',
        type: 'string',
        default: 'LOCALE_ID',
        description: 'BCP 47 locale for segment order and formatting.',
      },
      {
        name: 'placeholder-value',
        type: 'Time | CalendarDateTime | ZonedDateTime | null',
        default: 'null',
        description: 'Influences placeholder formatting when value is empty.',
      },
      {
        name: 'min-value / max-value',
        type: 'Time | CalendarDateTime | ZonedDateTime | null',
        default: 'null',
        description: 'Inclusive time-of-day bounds for committed values.',
      },
      {
        name: 'disabled / readonly / invalid / required',
        type: 'boolean',
        default: 'false',
        description: 'Interaction and validation states mirrored to data-* attributes.',
      },
      {
        name: 'full-width',
        type: 'boolean',
        default: 'false',
        description: 'Expands the field to the full width of its container.',
      },
      {
        name: 'name / id',
        type: 'string',
        default: 'undefined',
        description: 'Hidden time form field name and root element id.',
      },
      {
        name: 'DateInputGroup variant',
        type: "'primary' | 'secondary'",
        default: "'primary'",
        description: 'Visual variant for av-date-input-group (shared with DateField).',
      },
    ],
  },
  {
    slug: 'date-picker',
    label: 'DatePicker',
    category: 'Text Inputs',
    description:
      'Composition-first date picker that owns DateField context and opens a Calendar in a popover.',
    status: 'hidden',
    path: '/docs/components/date-picker',
    imports: ['AvDatePickerImports'],
    props: [
      {
        name: 'value / default-value',
        type: 'CalendarDate | CalendarDateTime | ZonedDateTime | null',
        default: 'null',
        description:
          'Selected date value from @internationalized/date. Implements ControlValueAccessor.',
      },
      {
        name: 'open / default-open',
        type: 'boolean',
        default: 'false',
        description: 'Controlled or initial calendar popover open state.',
      },
      {
        name: 'granularity',
        type: "'day' | 'hour' | 'minute' | 'second'",
        default: "'day'",
        description: 'Smallest unit shown in the segmented field.',
      },
      {
        name: 'hour-cycle',
        type: '12 | 24',
        default: 'undefined',
        description: 'Forces 12- or 24-hour time segments when granularity includes time.',
      },
      {
        name: 'hide-time-zone',
        type: 'boolean',
        default: 'false',
        description: 'Hides the time-zone name segment for ZonedDateTime values.',
      },
      {
        name: 'force-leading-zeros',
        type: 'boolean',
        default: 'undefined',
        description:
          'Overrides AV_DATE_FIELD_FORMATS.forceLeadingZeros for numeric segment display.',
      },
      {
        name: 'locale',
        type: 'string',
        default: 'LOCALE_ID',
        description: 'BCP 47 locale for segment formatting and calendar labels.',
      },
      {
        name: 'min-value / max-value',
        type: 'DateValue | null',
        default: 'null',
        description: 'Bounds for typed and calendar-selected dates.',
      },
      {
        name: 'is-date-unavailable',
        type: '(date: DateValue) => boolean',
        default: 'null',
        description: 'Marks dates that cannot be selected.',
      },
      {
        name: 'close-on-select',
        type: 'boolean',
        default: 'true',
        description: 'Closes the popover after selecting a day when granularity is day.',
      },
      {
        name: 'panel-class (av-date-picker-popover)',
        type: 'string',
        default: "''",
        description:
          'Extra classes merged onto the overlay panel after BEM (same pattern as modal container-class).',
      },
      {
        name: 'dismissable',
        type: 'boolean',
        default: 'true',
        description: 'Closes the popover on outside click.',
      },
      {
        name: 'keyboard-dismiss-disabled',
        type: 'boolean',
        default: 'false',
        description: 'Disables Escape-to-close.',
      },
      {
        name: 'disabled / readonly / invalid / required',
        type: 'boolean',
        default: 'false',
        description: 'Interaction and validation states mirrored to data-* attributes.',
      },
      {
        name: 'full-width',
        type: 'boolean',
        default: 'false',
        description: 'Expands the picker to the full width of its container.',
      },
      {
        name: 'name / id',
        type: 'string',
        default: 'undefined',
        description: 'Hidden ISO form field name and root element id.',
      },
    ],
  },
  {
    slug: 'date-range-picker',
    label: 'DateRangePicker',
    category: 'Text Inputs',
    description:
      'Composition-first date range picker with dual DateField inputs and a RangeCalendar popover.',
    status: 'hidden',
    path: '/docs/components/date-range-picker',
    imports: ['AvDateRangePickerImports'],
    props: [
      {
        name: 'value / default-value',
        type: '{ start: CalendarDate; end: CalendarDate } | null',
        default: 'null',
        description:
          'Complete selected range. Incomplete ranges stay in field state only. Implements ControlValueAccessor.',
      },
      {
        name: 'open / default-open',
        type: 'boolean',
        default: 'false',
        description: 'Controlled or initial calendar popover open state.',
      },
      {
        name: 'granularity',
        type: "'day' | 'hour' | 'minute' | 'second'",
        default: "'day'",
        description: 'Smallest unit shown in the segmented start/end fields.',
      },
      {
        name: 'hour-cycle',
        type: '12 | 24',
        default: 'undefined',
        description: 'Forces 12- or 24-hour time segments when granularity includes time.',
      },
      {
        name: 'hide-time-zone',
        type: 'boolean',
        default: 'false',
        description: 'Hides the time-zone name segment for ZonedDateTime values.',
      },
      {
        name: 'force-leading-zeros',
        type: 'boolean',
        default: 'undefined',
        description:
          'Overrides AV_DATE_FIELD_FORMATS.forceLeadingZeros for numeric segment display.',
      },
      {
        name: 'locale',
        type: 'string',
        default: 'LOCALE_ID',
        description: 'BCP 47 locale for segment formatting and calendar labels.',
      },
      {
        name: 'min-value / max-value',
        type: 'DateValue | null',
        default: 'null',
        description: 'Bounds for typed and calendar-selected dates.',
      },
      {
        name: 'is-date-unavailable',
        type: '(date: DateValue) => boolean',
        default: 'null',
        description: 'Marks dates that cannot be selected.',
      },
      {
        name: 'close-on-select',
        type: 'boolean',
        default: 'true',
        description:
          'Closes the popover after selecting a complete day range when granularity is day.',
      },
      {
        name: 'panel-class (av-date-range-picker-popover)',
        type: 'string',
        default: "''",
        description:
          'Extra classes merged onto the overlay panel after BEM (same pattern as modal container-class).',
      },
      {
        name: 'dismissable',
        type: 'boolean',
        default: 'true',
        description: 'Closes the popover on outside click.',
      },
      {
        name: 'keyboard-dismiss-disabled',
        type: 'boolean',
        default: 'false',
        description: 'Disables Escape-to-close.',
      },
      {
        name: 'disabled / readonly / invalid / required',
        type: 'boolean',
        default: 'false',
        description: 'Interaction and validation states mirrored to data-* attributes.',
      },
      {
        name: 'full-width',
        type: 'boolean',
        default: 'false',
        description: 'Expands the picker to the full width of its container.',
      },
      {
        name: 'start-name / end-name',
        type: 'string',
        default: 'undefined',
        description: 'Hidden ISO form field names for the start and end dates.',
      },
      {
        name: 'name / id',
        type: 'string',
        default: 'undefined',
        description: 'Optional combined hidden ISO field name and root element id.',
      },
    ],
  },
  {
    slug: 'calendar',
    label: 'Calendar',
    category: 'Text Inputs',
    description:
      'Compound calendar with month, week, and day views, year-picker overlay, multi-month layouts, and cell indicators.',
    status: 'hidden',
    path: '/docs/components/calendar',
    imports: ['AvCalendarImports'],
    props: [
      {
        name: 'aria-label',
        type: 'string',
        default: 'undefined',
        description: 'Accessible name for the calendar (required for a11y).',
      },
      {
        name: 'selection-mode',
        type: "'single' | 'multiple'",
        default: "'single'",
        description: 'Selection behavior.',
      },
      {
        name: 'value / default-value',
        type: 'CalendarDate | CalendarDate[] | null',
        default: 'null',
        description: 'Selected value (controlled via value / model, or uncontrolled default-value).',
      },
      {
        name: 'focused-value / default-focused-value',
        type: 'CalendarDate | null',
        default: 'today',
        description: 'Focused / navigated date.',
      },
      {
        name: 'min-value / max-value',
        type: 'DateValue | null',
        default: 'null',
        description: 'Inclusive selectable bounds.',
      },
      {
        name: 'is-date-unavailable',
        type: '(date: CalendarDate) => boolean',
        default: 'null',
        description: 'Return true when a date cannot be selected.',
      },
      {
        name: 'visible-duration',
        type: '{ months } | { weeks } | { days }',
        default: '{ months: 1 }',
        description: 'Visible time range — month, week, or day view.',
      },
      {
        name: 'page-behavior',
        type: "'visible' | 'single'",
        default: "'visible'",
        description:
          'Whether paging advances by the visible duration or one unit at a time.',
      },
      {
        name: 'weeks-in-month',
        type: 'number',
        default: 'undefined',
        description: 'Fix month grid row count (e.g. 6) to avoid layout jump.',
      },
      {
        name: 'year-picker-open / default-year-picker-open',
        type: 'boolean',
        default: 'false',
        description: 'Controlled / uncontrolled year-picker overlay state.',
      },
      {
        name: 'locale',
        type: 'string',
        default: "'en-US'",
        description: 'BCP 47 locale for labels and formatting.',
      },
      {
        name: 'first-day-of-week',
        type: "'sun' | 'mon' | … | 'sat'",
        default: "'sun'",
        description: 'Overrides the locale default for the first day of the week.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Disables interaction and selection.',
      },
      {
        name: 'readonly',
        type: 'boolean',
        default: 'false',
        description: 'Keeps content readable but prevents selection changes.',
      },
    ],
  },
  {
    slug: 'range-calendar',
    label: 'RangeCalendar',
    category: 'Text Inputs',
    description:
      'Compound calendar for contiguous date range selection with two-click selection, hover preview, and year-picker overlay.',
    status: 'hidden',
    path: '/docs/components/range-calendar',
    imports: ['AvRangeCalendarImports'],
    props: [
      {
        name: 'aria-label',
        type: 'string',
        default: 'undefined',
        description: 'Accessible name for the calendar (required for a11y).',
      },
      {
        name: 'value / default-value',
        type: '{ start: CalendarDate; end: CalendarDate } | null',
        default: 'null',
        description:
          'Committed selected range. Incomplete selection is internal until both ends are chosen.',
      },
      {
        name: 'focused-value / default-focused-value',
        type: 'CalendarDate | null',
        default: 'today',
        description: 'Focused / navigated date.',
      },
      {
        name: 'min-value / max-value',
        type: 'DateValue | null',
        default: 'null',
        description: 'Inclusive selectable bounds.',
      },
      {
        name: 'is-date-unavailable',
        type: '(date: CalendarDate, anchorDate: CalendarDate | null) => boolean',
        default: 'null',
        description:
          'Return true when a date cannot be selected. `anchorDate` is the incomplete-range start.',
      },
      {
        name: 'allows-non-contiguous-ranges',
        type: 'boolean',
        default: 'false',
        description:
          'Allows a complete range to span unavailable dates between start and end.',
      },
      {
        name: 'visible-duration',
        type: '{ months } | { weeks } | { days }',
        default: '{ months: 1 }',
        description: 'Visible time range — month, week, or day view.',
      },
      {
        name: 'page-behavior',
        type: "'visible' | 'single'",
        default: "'visible'",
        description: 'Whether paging advances by the visible duration or one unit at a time.',
      },
      {
        name: 'weeks-in-month',
        type: 'number',
        default: 'undefined',
        description: 'Fix month grid row count (e.g. 6) to avoid layout jump.',
      },
      {
        name: 'year-picker-open / default-year-picker-open',
        type: 'boolean',
        default: 'false',
        description: 'Controlled / uncontrolled year-picker overlay state.',
      },
      {
        name: 'locale',
        type: 'string',
        default: "'en-US'",
        description: 'BCP 47 locale for labels and formatting.',
      },
      {
        name: 'first-day-of-week',
        type: "'sun' | 'mon' | … | 'sat'",
        default: "'sun'",
        description: 'Overrides the locale default for the first day of the week.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Disables interaction and selection.',
      },
      {
        name: 'readonly',
        type: 'boolean',
        default: 'false',
        description: 'Keeps content readable but prevents selection changes.',
      },
      {
        name: 'invalid',
        type: 'boolean',
        default: 'false',
        description: 'Marks the calendar as invalid (`aria-invalid` / `data-invalid`).',
      },
    ],
  },
  {
    slug: 'textarea',
    label: 'TextArea',
    category: 'Text Inputs',
    description:
      'Primitive multiline text input. Apply av-textarea to a native textarea; accepts standard HTML attributes and ControlValueAccessor.',
    status: 'documented',
    path: '/docs/components/textarea',
    imports: ['AvTextareaComponent'],
    props: [
      {
        name: 'variant',
        type: "'primary' | 'secondary'",
        default: "'primary'",
        description:
          'Visual variant. `primary` is the default style with shadow. `secondary` is a lower-emphasis variant without shadow, suitable for surfaces.',
      },
      {
        name: 'full-width',
        type: 'boolean',
        default: 'false',
        description: 'Whether the textarea should take the full width of its container.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Disables the textarea.',
      },
      {
        name: 'invalid',
        type: 'boolean',
        default: 'false',
        description: 'Marks the textarea as invalid (`aria-invalid` / `data-invalid`).',
      },
    ],
  },
  {
    slug: 'input-group',
    label: 'InputGroup',
    category: 'Text Inputs',
    description:
      'Group related input controls with prefix and suffix elements for enhanced form fields.',
    status: 'documented',
    path: '/docs/components/input-group',
    imports: ['AvInputGroupImports'],
    props: [
      {
        name: 'variant',
        type: "'primary' | 'secondary'",
        default: "'primary'",
        description:
          'Visual variant. `primary` is the default style with shadow. `secondary` is a lower emphasis variant without shadow, suitable for use in surfaces.',
      },
      {
        name: 'full-width',
        type: 'boolean',
        default: 'false',
        description: 'Whether the input group should take full width of its container.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description:
          'Disables interaction for the group and its controls. Propagates to nested input/textarea via context.',
      },
      {
        name: 'invalid',
        type: 'boolean',
        default: 'false',
        description:
          'Marks the group as invalid. Propagates `aria-invalid` to nested input/textarea via context.',
      },
    ],
  },
  {
    slug: 'input-otp',
    label: 'InputOTP',
    category: 'Text Inputs',
    description:
      'A one-time password input component for verification codes and secure authentication.',
    status: 'documented',
    path: '/docs/components/input-otp',
    imports: ['AvInputOtpImports'],
    props: [
      {
        name: 'maxLength',
        type: 'number',
        default: '6',
        description: 'Number of input slots / maximum characters.',
      },
      {
        name: 'value',
        type: 'string',
        default: "''",
        description: 'Current OTP value. Supports two-way binding with [(value)].',
      },
      {
        name: 'default-value',
        type: 'string',
        default: "''",
        description: 'Initial value for uncontrolled usage.',
      },
      {
        name: 'complete',
        type: 'OutputEmitterRef<string>',
        description: 'Emits when all slots are filled.',
      },
      {
        name: 'variant',
        type: "'primary' | 'secondary'",
        default: "'primary'",
        description:
          'Visual variant. primary has shadow; secondary is lower emphasis for surfaces.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Whether the input is disabled.',
      },
      {
        name: 'invalid',
        type: 'boolean',
        default: 'false',
        description: 'Whether the input is in an invalid state.',
      },
      {
        name: 'validationErrors',
        type: 'string[]',
        default: '[]',
        description: 'Server-side or custom validation error messages.',
      },
      {
        name: 'pattern',
        type: 'string',
        description:
          'Regex pattern for allowed characters (e.g. AV_REGEXP_ONLY_DIGITS).',
      },
      {
        name: 'inputmode',
        type: "'numeric' | 'text' | 'decimal' | 'tel' | 'search' | 'email' | 'url'",
        default: "'numeric'",
        description: 'Virtual keyboard type on mobile devices.',
      },
      {
        name: 'placeholder',
        type: 'string',
        description: 'Placeholder character shown in empty active slots.',
      },
      {
        name: 'textAlign',
        type: "'left' | 'center' | 'right'",
        default: "'left'",
        description: 'Caret alignment — affects slot click focus position.',
      },
      {
        name: 'name',
        type: 'string',
        description: 'Name attribute for form submission.',
      },
      {
        name: 'autofocus',
        type: 'boolean',
        default: 'false',
        description: 'Whether to focus the input on mount.',
      },
      {
        name: 'aria-describedby',
        type: 'string',
        description: 'ID of the element that describes the input (e.g. field error).',
      },
      {
        name: 'container-class',
        type: 'string',
        description: 'Additional CSS classes for the inner container.',
      },
      {
        name: 'input-class',
        type: 'string',
        description: 'Additional CSS classes for the hidden input.',
      },
      {
        name: 'pasteTransformer',
        type: '(text: string) => string',
        description: 'Transform pasted text before filtering (e.g. strip hyphens).',
      },
    ],
  },
  {
    slug: 'checkbox',
    label: 'Checkbox',
    category: 'Selection Controls',
    description: 'Accessible checkbox with compound parts for labels, descriptions, and form integration.',
    status: 'documented',
    path: '/docs/components/checkbox',
    imports: ['AvCheckboxImports'],
    props: CHECKBOX_PROPS,
  },
  {
    slug: 'checkbox-group',
    label: 'CheckboxGroup',
    category: 'Selection Controls',
    description: 'Group of checkboxes with shared value, validation, and variant styling.',
    status: 'documented',
    path: '/docs/components/checkbox-group',
    imports: ['AvCheckboxGroupImports'],
    props: CHECKBOX_GROUP_PROPS,
  },
  {
    slug: 'radio-group',
    label: 'RadioGroup',
    category: 'Selection Controls',
    description: 'Radio group for selecting a single option from a list.',
    status: 'documented',
    path: '/docs/components/radio-group',
    imports: ['AvRadioGroupImports'],
    props: RADIO_GROUP_PROPS,
  },
  {
    slug: 'switch',
    label: 'Switch',
    category: 'Selection Controls',
    description: 'A toggle switch component for boolean states',
    status: 'documented',
    path: '/docs/components/switch',
    imports: ['AvSwitchImports', 'AvSwitchGroupComponent'],
    props: SWITCH_PROPS,
  },
  {
    slug: 'slider',
    label: 'Slider',
    category: 'Selection Controls',
    description: 'A slider allows a user to select one or more values within a range.',
    status: 'documented',
    path: '/docs/components/slider',
    imports: ['AvSliderImports'],
    props: SLIDER_PROPS,
  },
  {
    slug: 'typography',
    label: 'Typography',
    category: 'Data Display',
    description:
      'Semantic typography styles for headings, body, code, and prose — apply tokens on host elements you choose.',
    status: 'documented',
    path: '/docs/components/typography',
    imports: ['AvTypographyImports'],
    props: [
      {
        name: 'type',
        type: "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'body-sm' | 'body-xs' | 'code'",
        default: "'body'",
        description: 'Typography scale token (av-typography). Prefer a matching host tag.',
      },
      {
        name: 'align',
        type: "'start' | 'center' | 'end' | 'justify'",
        default: "'start'",
        description: 'Text alignment.',
      },
      {
        name: 'color',
        type: "'default' | 'muted'",
        default: "'default'",
        description: 'Foreground color token.',
      },
      {
        name: 'weight',
        type: "'normal' | 'medium' | 'semibold' | 'bold'",
        default: 'undefined',
        description: 'Optional font-weight override.',
      },
      {
        name: 'truncate',
        type: 'boolean',
        default: 'false',
        description: 'Truncate overflowing text with an ellipsis.',
      },
      {
        name: 'level (Heading)',
        type: '1 | 2 | 3 | 4 | 5 | 6',
        default: 'from host tag',
        description: 'Optional style level for av-typography-heading; defaults from h1–h6 tag.',
      },
      {
        name: 'size (Paragraph)',
        type: "'base' | 'sm' | 'xs'",
        default: "'base'",
        description: 'Paragraph size for av-typography-paragraph.',
      },
    ],
  },
  {
    slug: 'avatar',
    label: 'Avatar',
    category: 'Data Display',
    description: 'Display user profile images with customizable fallback content.',
    status: 'documented',
    path: '/docs/components/avatar',
    imports: ['AvAvatarImports'],
    props: AVATAR_PROPS,
  },
  {
    slug: 'badge',
    label: 'Badge',
    category: 'Data Display',
    description:
      'Displays a small indicator positioned relative to another element, commonly used for notification counts, status dots, and labels',
    status: 'documented',
    path: '/docs/components/badge',
    imports: ['AvBadgeImports'],
    props: BADGE_PROPS,
  },
  {
    slug: 'chip',
    label: 'Chip',
    category: 'Data Display',
    description: 'Compact label for status, tags, and metadata.',
    status: 'documented',
    path: '/docs/components/chip',
    imports: ['AvChipImports'],
    props: CHIP_PROPS,
  },
  {
    slug: 'tag-group',
    label: 'TagGroup',
    category: 'Selection Controls',
    description:
      'A focusable list of tags with support for keyboard navigation, selection, and removal.',
    status: 'documented',
    path: '/docs/components/tag-group',
    imports: ['AvTagGroupImports'],
    props: TAG_GROUP_PROPS,
  },
  {
    slug: 'kbd',
    label: 'Kbd',
    category: 'Data Display',
    description: 'Display keyboard shortcuts and key combinations.',
    status: 'documented',
    path: '/docs/components/kbd',
    imports: ['AvKbdImports'],
    props: KBD_PROPS,
  },
  {
    slug: 'skeleton',
    label: 'Skeleton',
    category: 'Data Display',
    description:
      'Placeholder to show a loading state and the expected shape of a component.',
    status: 'documented',
    path: '/docs/components/skeleton',
    imports: ['AvSkeletonComponent'],
    props: SKELETON_PROPS,
  },
  {
    slug: 'progress-circle',
    label: 'ProgressCircle',
    category: 'Data Display',
    description:
      'A circular progress indicator that shows determinate or indeterminate progress.',
    status: 'documented',
    path: '/docs/components/progress-circle',
    imports: ['AvProgressCircleImports'],
    props: PROGRESS_CIRCLE_PROPS,
  },

  {
    slug: 'progress-bar',
    label: 'ProgressBar',
    category: 'Data Display',
    description:
      'A progress bar shows either determinate or indeterminate progress of an operation over time.',
    status: 'documented',
    path: '/docs/components/progress-bar',
    imports: ['AvProgressBarImports'],
    props: PROGRESS_BAR_PROPS,
  },
  {
    slug: 'meter',
    label: 'Meter',
    category: 'Data Display',
    description: 'A meter represents a quantity within a known range, or a fractional value.',
    status: 'documented',
    path: '/docs/components/meter',
    imports: ['AvMeterImports'],
    props: METER_PROPS,
  },
  {
    slug: 'table',
    label: 'Table',
    category: 'Data Display',
    description:
      'Tables display structured data in rows and columns with support for sorting, selection, column resizing, and infinite scrolling.',
    status: 'documented',
    path: '/docs/components/table',
    imports: ['AvTableImports'],
    props: TABLE_PROPS,
  },
  {
    slug: 'card',
    label: 'Card',
    category: 'Layout & Surfaces',
    description: 'Flexible container component for grouping related content and actions.',
    status: 'documented',
    path: '/docs/components/card',
    imports: ['AvCardImports'],
    props: [
      {
        name: 'variant',
        type: "'transparent' | 'default' | 'secondary' | 'tertiary'",
        default: "'default'",
        description: 'Visual surface variant (div[av-card]).',
      },
    ],
  },
  {
    slug: 'surface',
    label: 'Surface',
    category: 'Layout & Surfaces',
    description:
      'Container component that provides surface-level styling and context for child components',
    status: 'documented',
    path: '/docs/components/surface',
    imports: ['AvSurfaceComponent'],
    props: [
      {
        name: 'variant',
        type: "'transparent' | 'default' | 'secondary' | 'tertiary'",
        default: "'default'",
        description: 'The visual variant of the surface (div[av-surface]).',
      },
    ],
  },
  {
    slug: 'separator',
    label: 'Separator',
    category: 'Layout & Surfaces',
    description: 'Visually divide content sections',
    status: 'documented',
    path: '/docs/components/separator',
    imports: ['AvSeparatorImports'],
    props: [
      {
        name: 'orientation',
        type: "'horizontal' | 'vertical'",
        default: "'horizontal'",
        description:
          'The orientation of the separator. Inherits from av-separator-container when omitted (av-separator / av-separator-line / av-separator-content).',
      },
      {
        name: 'variant',
        type: "'default' | 'secondary' | 'tertiary'",
        default: "'default'",
        description:
          'The visual variant of the separator. Inherits from av-separator-container when omitted (av-separator / av-separator-line).',
      },
    ],
  },
  {
    slug: 'toolbar',
    label: 'Toolbar',
    category: 'Layout & Surfaces',
    description: 'A container for interactive controls with toolbar semantics.',
    status: 'documented',
    path: '/docs/components/toolbar',
    imports: ['AvToolbarComponent'],
    props: [
      {
        name: 'attached',
        type: 'boolean',
        default: 'false',
        description: 'Whether the toolbar has a surface background with full rounding.',
      },
      {
        name: 'orientation',
        type: "'horizontal' | 'vertical'",
        default: "'horizontal'",
        description: 'The orientation of the toolbar.',
      },
      {
        name: 'aria-label',
        type: 'string',
        description: 'An accessible label for the toolbar.',
      },
    ],
  },
  {
    slug: 'modal',
    label: 'Modal',
    category: 'Overlays & Feedback',
    description: 'Dialog overlay for focused user interactions and important content.',
    status: 'documented',
    path: '/docs/components/modal',
    imports: ['AvModalImports', 'AvModalService'],
    props: MODAL_PROPS,
  },
  {
    slug: 'drawer',
    label: 'Drawer',
    category: 'Overlays & Feedback',
    description: 'A panel overlay that slides in from an edge of the viewport.',
    status: 'documented',
    path: '/docs/components/drawer',
    imports: ['AvDrawerImports', 'AvDrawerService'],
    props: DRAWER_PROPS,
  },
  {
    slug: 'alert-dialog',
    label: 'AlertDialog',
    category: 'Overlays & Feedback',
    description:
      'Modal dialog for critical confirmations requiring user attention and explicit action.',
    status: 'documented',
    path: '/docs/components/alert-dialog',
    imports: ['AvAlertDialogImports', 'AvAlertDialogService'],
    props: ALERT_DIALOG_PROPS,
  },
  {
    slug: 'popover',
    label: 'Popover',
    category: 'Overlays & Feedback',
    description: 'Displays rich content in a portal triggered by a button or any custom element.',
    status: 'documented',
    path: '/docs/components/popover',
    imports: ['AvPopoverImports'],
    props: POPOVER_PROPS,
  },
  {
    slug: 'tooltip',
    label: 'Tooltip',
    category: 'Overlays & Feedback',
    description: 'Displays informative text when users hover over or focus on an element.',
    status: 'documented',
    path: '/docs/components/tooltip',
    imports: ['AvTooltipDirective'],
    props: TOOLTIP_PROPS,
  },
  {
    slug: 'toast',
    label: 'Toast',
    category: 'Overlays & Feedback',
    description:
      'Display temporary notifications and messages with automatic dismissal and customizable placement.',
    status: 'documented',
    path: '/docs/components/toast',
    imports: ['AvToastComponent', 'AvToastService'],
    props: TOAST_PROPS,
  },
  {
    slug: 'alert',
    label: 'Alert',
    category: 'Overlays & Feedback',
    description: 'Display important messages and notifications to users with status indicators.',
    status: 'documented',
    path: '/docs/components/alert',
    imports: ['AvAlertImports'],
    props: ALERT_PROPS,
  },
  {
    slug: 'spinner',
    label: 'Spinner',
    category: 'Overlays & Feedback',
    description: 'A loading indicator component to show pending states.',
    status: 'documented',
    path: '/docs/components/spinner',
    imports: ['AvSpinnerComponent'],
    props: SPINNER_PROPS,
  },
  {
    slug: 'dropdown',
    label: 'Dropdown',
    category: 'Menus & Lists',
    description: 'A dropdown displays a list of actions or options that a user can choose.',
    status: 'documented',
    path: '/docs/components/dropdown',
    imports: ['AvDropdownImports'],
    props: [
      {
        name: 'open',
        type: 'boolean',
        default: 'false',
        description: 'Controls whether the dropdown is open. Supports two-way binding with [(open)] (av-dropdown).',
      },
      {
        name: 'dismissable',
        type: 'boolean',
        default: 'true',
        description: 'Closes the dropdown when clicking outside (av-dropdown).',
      },
      {
        name: 'keyboard-dismiss-disabled',
        type: 'boolean',
        default: 'false',
        description: 'Disables closing via the Escape key (av-dropdown).',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Disables the trigger (av-dropdown-trigger).',
      },
      {
        name: 'custom-trigger',
        type: 'boolean',
        default: 'false',
        description: 'Applies trigger styles to non-button elements (av-dropdown-trigger).',
      },
      {
        name: 'placement',
        type: "'top' | 'top start' | 'top end' | 'bottom' | 'bottom start' | 'bottom end' | 'left' | 'left top' | 'left bottom' | 'right' | 'right top' | 'right bottom' | 'start' | 'start top' | 'start bottom' | 'end' | 'end top' | 'end bottom'",
        default: "'bottom'",
        description: 'Preferred placement relative to the trigger (av-dropdown-popover).',
      },
      {
        name: 'offset',
        type: 'number',
        default: '8',
        description: 'Distance between trigger and menu in pixels (av-dropdown-popover).',
      },
      {
        name: 'class',
        type: 'string',
        description: 'Extra classes applied to the overlay panel (av-dropdown-popover).',
      },
      {
        name: 'should-flip',
        type: 'boolean',
        default: 'true',
        description: 'Whether the menu can flip to fit the viewport (av-dropdown-popover).',
      },
      {
        name: 'selection-mode',
        type: "'none' | 'single' | 'multiple'",
        default: "'none'",
        description: 'How menu items can be selected (av-dropdown-menu).',
      },
      {
        name: 'selectedKeys',
        type: 'string[]',
        default: '[]',
        description: 'Selected item ids. Supports two-way binding with [(selectedKeys)] (av-dropdown-menu).',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Disables all menu items (av-dropdown-menu).',
      },
      {
        name: 'action',
        type: 'EventEmitter<string>',
        description: 'Emits the item id when activated (av-dropdown-menu).',
      },
      {
        name: 'id',
        type: 'string',
        description: 'Required unique item id (av-menu-item).',
      },
      {
        name: 'textValue',
        type: 'string',
        description: 'Accessible label used for typeahead search (av-menu-item).',
      },
      {
        name: 'variant',
        type: "'default' | 'danger'",
        default: "'default'",
        description: 'Visual style variant for the item (av-menu-item).',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Disables a single item (av-menu-item).',
      },
      {
        name: 'class',
        type: 'string',
        description: 'Extra classes merged onto the menu item host (av-menu-item).',
      },
      {
        name: 'type',
        type: "'checkmark' | 'dot'",
        default: "'checkmark'",
        description: 'Selection indicator style (av-menu-item-indicator).',
      },
    ],
  },
  {
    slug: 'list-box',
    label: 'ListBox',
    category: 'Menus & Lists',
    description:
      'A listbox displays a list of options and allows a user to select one or more of them.',
    status: 'documented',
    path: '/docs/components/list-box',
    imports: ['AvListBoxImports'],
    props: [
      {
        name: 'aria-label',
        type: 'string',
        description: 'Accessibility label for the listbox (av-list-box).',
      },
      {
        name: 'selection-mode',
        type: "'none' | 'single' | 'multiple'",
        default: "'single'",
        description:
          'Selection behavior. Use none with (action) for action menus (av-list-box).',
      },
      {
        name: 'selectedKeys',
        type: 'string[]',
        default: '[]',
        description:
          'Controlled selected item ids. Supports two-way binding with [(selectedKeys)] (av-list-box).',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Disables all listbox items (av-list-box).',
      },
      {
        name: 'action',
        type: 'OutputEmitterRef<string>',
        description:
          'Emits the item id when activated in selection-mode="none" (av-list-box).',
      },
      {
        name: 'id',
        type: 'string',
        description: 'Required unique item id (av-list-box-item).',
      },
      {
        name: 'textValue',
        type: 'string',
        description:
          'Text value for accessibility and typeahead search (av-list-box-item).',
      },
      {
        name: 'variant',
        type: "'default' | 'danger'",
        default: "'default'",
        description: 'Visual variant for the item (av-list-box-item).',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Whether this item is disabled (av-list-box-item).',
      },
    ],
  },
  {
    slug: 'select',
    label: 'Select',
    category: 'Menus & Lists',
    description:
      'A select displays a collapsible list of options and allows a user to select one of them.',
    status: 'documented',
    path: '/docs/components/select',
    imports: ['AvSelectImports'],
    props: [
      {
        name: 'variant',
        type: "'primary' | 'secondary'",
        default: "'primary'",
        description:
          'Visual variant. primary is the default style with shadow; secondary is lower emphasis without shadow, suitable for surfaces (av-select).',
      },
      {
        name: 'full-width',
        type: 'boolean',
        default: 'false',
        description: 'Whether the select should take full width of its container (av-select).',
      },
      {
        name: 'placeholder',
        type: 'string',
        default: "'Select…'",
        description: 'Temporary text shown when nothing is selected (av-select).',
      },
      {
        name: 'selection-mode',
        type: "'single' | 'multiple'",
        default: "'single'",
        description: 'Whether single or multiple selection is enabled (av-select).',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Whether the select is disabled (av-select).',
      },
      {
        name: 'invalid',
        type: 'boolean',
        default: 'false',
        description: 'Whether the select value is invalid (av-select).',
      },
      {
        name: 'open',
        type: 'boolean',
        default: 'false',
        description:
          'Controls whether the popover is open. Supports two-way binding with [(open)] (av-select).',
      },
      {
        name: 'dismissable',
        type: 'boolean',
        default: 'true',
        description: 'Closes the popover when clicking outside (av-select).',
      },
      {
        name: 'keyboard-dismiss-disabled',
        type: 'boolean',
        default: 'false',
        description: 'Disables closing via the Escape key (av-select).',
      },
      {
        name: 'default-selected-keys',
        type: 'string[]',
        default: '[]',
        description: 'Initial selected keys for uncontrolled usage (av-select).',
      },
      {
        name: 'selectedKeys',
        type: 'string[]',
        default: '[]',
        description:
          'Selected keys (controlled). Supports two-way binding with [(selectedKeys)]. Also works with ngModel / formControlName via ControlValueAccessor (av-select).',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Disables the trigger (av-select-trigger).',
      },
      {
        name: 'placeholder',
        type: 'string',
        description: 'Override placeholder text for the value slot (av-select-value).',
      },
      {
        name: 'placement',
        type: 'AvSelectPlacement',
        default: "'bottom'",
        description: 'Preferred placement of the popover relative to the trigger (av-select-popover).',
      },
      {
        name: 'offset',
        type: 'number',
        default: '8',
        description: 'Distance between trigger and popover in pixels (av-select-popover).',
      },
      {
        name: 'class',
        type: 'string',
        description: 'Extra classes applied to the overlay panel (av-select-popover).',
      },
      {
        name: 'should-flip',
        type: 'boolean',
        default: 'true',
        description: 'Whether the popover can flip to fit the viewport (av-select-popover).',
      },
    ],
  },
  {
    slug: 'tabs',
    label: 'Tabs',
    category: 'Navigation',
    description: 'Tabs organize content into multiple sections and allow users to navigate between them.',
    status: 'documented',
    path: '/docs/components/tabs',
    imports: ['AvTabsImports'],
    props: [
      {
        name: 'variant',
        type: "'default' | 'secondary'",
        default: "'default'",
        description:
          'Visual style variant. Default uses a filled indicator; secondary uses an underline indicator (av-tabs).',
      },
      {
        name: 'orientation',
        type: "'horizontal' | 'vertical'",
        default: "'horizontal'",
        description: 'Tab layout orientation (av-tabs).',
      },
      {
        name: 'selectedKey',
        type: 'string | null',
        description:
          'Controlled selected tab id. Supports two-way binding with [(selectedKey)] (av-tabs).',
      },
      {
        name: 'default-selected-key',
        type: 'string | null',
        default: 'null',
        description: 'Default selected tab id for uncontrolled usage (av-tabs).',
      },
      {
        name: 'selectedKeyChange',
        type: 'EventEmitter<string | null>',
        description: 'Selection change handler (av-tabs).',
      },
      {
        name: 'disable-pagination',
        type: 'boolean',
        default: 'false',
        description:
          'Disables overflow chevrons and scroll-shadow detection (div[av-tabs-list-container]).',
      },
      {
        name: 'aria-label',
        type: 'string',
        description: 'Accessibility label for the tab list (div[av-tabs-list]).',
      },
      {
        name: 'id',
        type: 'string',
        description: 'Unique tab identifier matching the panel id (button[av-tabs-tab]).',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description:
          'Whether the tab is disabled. Skipped during keyboard navigation; uses aria-disabled (button[av-tabs-tab]).',
      },
      {
        name: 'id',
        type: 'string',
        description: 'Panel identifier matching the tab id (div[av-tabs-panel]).',
      },
    ],
  },
  {
    slug: 'pagination',
    label: 'Pagination',
    category: 'Navigation',
    description:
      'Page navigation with composable page links, previous/next buttons, and ellipsis indicators.',
    status: 'documented',
    path: '/docs/components/pagination',
    imports: ['AvPaginationImports', 'getPaginationRange'],
    props: [
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        description: 'Size of the pagination items (av-pagination).',
      },
      {
        name: 'active',
        type: 'boolean',
        default: 'false',
        description: 'Whether this is the current page (button[av-pagination-link]).',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description:
          'Whether the control is disabled (button[av-pagination-link], button[av-pagination-prev], button[av-pagination-next]).',
      },
    ],
  },
  {
    slug: 'breadcrumbs',
    label: 'Breadcrumbs',
    category: 'Navigation',
    description:
      "Navigation breadcrumbs showing the current page's location within a hierarchy",
    status: 'documented',
    path: '/docs/components/breadcrumbs',
    imports: ['AvBreadcrumbsImports'],
    props: [
      {
        name: 'separator',
        type: 'TemplateRef<unknown> | null',
        default: 'null',
        description:
          'Custom separator template between breadcrumb items (default chevron when omitted).',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Whether all breadcrumb links are disabled.',
      },
      {
        name: 'href',
        type: 'string',
        description: 'The URL to link to (omit for current page) — `li[av-breadcrumbs-item]`.',
      },
      {
        name: 'current',
        type: 'boolean',
        description:
          'Marks this item as the current page. Auto-detected for the last item when omitted — `li[av-breadcrumbs-item]`.',
      },
    ],
  },
  {
    slug: 'accordion',
    label: 'Accordion',
    category: 'Disclosure',
    description: 'A collapsible content panel for organizing information in a compact space.',
    status: 'documented',
    path: '/docs/components/accordion',
    imports: ['AvAccordionImports'],
    props: [
      {
        name: 'variant',
        type: "'default' | 'surface'",
        default: "'default'",
        description: 'Visual style variant (av-accordion).',
      },
      {
        name: 'hide-separator',
        type: 'boolean',
        default: 'false',
        description: 'Hides separators between accordion items (av-accordion).',
      },
      {
        name: 'allows-multiple',
        type: 'boolean',
        default: 'false',
        description: 'Allows multiple items to be expanded at once (av-accordion).',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Disables all accordion items (av-accordion).',
      },
      {
        name: 'expandedKeys',
        type: 'string[]',
        default: '[]',
        description:
          'Expanded item ids. Supports two-way binding with [(expandedKeys)] (av-accordion).',
      },
      {
        name: 'id',
        type: 'string',
        description: 'Required unique accordion item id (av-accordion-item).',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Disables a single accordion item (av-accordion-item).',
      },
    ],
  },
  {
    slug: 'disclosure',
    label: 'Disclosure',
    category: 'Disclosure',
    description:
      'A collapsible section with a heading, trigger button, and animated content panel.',
    status: 'documented',
    path: '/docs/components/disclosure',
    imports: ['AvDisclosureImports'],
    props: [
      {
        name: 'id',
        type: 'string',
        description: 'Unique disclosure id. Required inside a disclosure group (av-disclosure).',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Disables the disclosure (av-disclosure).',
      },
      {
        name: 'default-expanded',
        type: 'boolean',
        default: 'false',
        description: 'Initially expanded state for standalone usage (av-disclosure).',
      },
      {
        name: 'expanded',
        type: 'boolean',
        default: 'false',
        description:
          'Expanded state. Supports two-way binding with [(expanded)] (av-disclosure).',
      },
    ],
  },
  {
    slug: 'disclosure-group',
    label: 'DisclosureGroup',
    category: 'Disclosure',
    description: 'Container that manages multiple Disclosure items with coordinated expanded states.',
    status: 'documented',
    path: '/docs/components/disclosure-group',
    imports: ['AvDisclosureGroupImports'],
    props: [
      {
        name: 'allows-multiple',
        type: 'boolean',
        default: 'false',
        description: 'Allows multiple disclosures to be expanded at once (av-disclosure-group).',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Disables all disclosures in the group (av-disclosure-group).',
      },
      {
        name: 'expandedKeys',
        type: 'string[]',
        default: '[]',
        description:
          'Expanded disclosure ids. Supports two-way binding with [(expandedKeys)] (av-disclosure-group).',
      },
    ],
  },
];

export function isVisibleDocsComponent(component: DocComponentMeta): boolean {
  return component.status !== 'hidden';
}

export function getVisibleDocsComponents(): DocComponentMeta[] {
  return DOCS_COMPONENTS.filter(isVisibleDocsComponent);
}

export function getComponentsByCategory(category: DocComponentCategory): DocComponentMeta[] {
  return getVisibleDocsComponents().filter((component) => component.category === category);
}

export function getDocumentedComponents(): DocComponentMeta[] {
  return DOCS_COMPONENTS.filter((component) => component.status === 'documented');
}

export function getComponentBySlug(slug: string): DocComponentMeta | undefined {
  return DOCS_COMPONENTS.find((component) => component.slug === slug);
}

export function getComponentProps(slug: string): DocApiProp[] {
  return getComponentBySlug(slug)?.props ?? [];
}

const SHARED_FIELD_IMPORTS = new Set([
  'AvLabelComponent',
  'AvDescriptionComponent',
  'AvFieldErrorComponent',
  'AvErrorMessageComponent',
]);

export function formatAvesraImport(imports: string[]): string {
  if (imports.length === 0) {
    return '';
  }

  if (imports.length === 1) {
    return `import { ${imports[0]} } from '@avesra/angular';`;
  }

  return `import {\n  ${imports.join(',\n  ')},\n} from '@avesra/angular';`;
}

export function getComponentImportSnippet(slug: string): string {
  const raw = getComponentBySlug(slug)?.imports ?? [];
  const onlyOwnSharedField = raw.length === 1 && SHARED_FIELD_IMPORTS.has(raw[0]!);
  const imports = onlyOwnSharedField
    ? raw
    : raw.filter((name) => !SHARED_FIELD_IMPORTS.has(name));
  return formatAvesraImport(imports);
}
