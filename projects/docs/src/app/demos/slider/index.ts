import { defineDemo } from '../define-demo';
import { SliderBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import {
  SliderControlledDemo,
  DEMO_LANG as controlledLang,
  DEMO_SOURCE as controlledSource,
} from './controlled.demo';
import {
  SliderCustomFormattingDemo,
  DEMO_LANG as customFormattingLang,
  DEMO_SOURCE as customFormattingSource,
} from './custom-formatting.demo';
import {
  SliderCustomOutputDemo,
  DEMO_LANG as customOutputLang,
  DEMO_SOURCE as customOutputSource,
} from './custom-output.demo';
import {
  SliderCustomStylingDemo,
  DEMO_LANG as customStylingLang,
  DEMO_SOURCE as customStylingSource,
} from './custom-styling.demo';
import {
  SliderDisabledDemo,
  DEMO_LANG as disabledLang,
  DEMO_SOURCE as disabledSource,
} from './disabled.demo';
import { SliderRangeDemo, DEMO_LANG as rangeLang, DEMO_SOURCE as rangeSource } from './range.demo';
import {
  SliderReactiveFormDemo,
  DEMO_LANG as reactiveFormLang,
  DEMO_SOURCE as reactiveFormSource,
} from './reactive-form.demo';
import {
  SliderVerticalDemo,
  DEMO_LANG as verticalLang,
  DEMO_SOURCE as verticalSource,
} from './vertical.demo';

export const sliderDemos = {
  basic: defineDemo(SliderBasicDemo, basicSource, basicLang),
  vertical: defineDemo(SliderVerticalDemo, verticalSource, verticalLang),
  range: defineDemo(SliderRangeDemo, rangeSource, rangeLang),
  disabled: defineDemo(SliderDisabledDemo, disabledSource, disabledLang),
  controlled: defineDemo(SliderControlledDemo, controlledSource, controlledLang),
  customFormatting: defineDemo(
    SliderCustomFormattingDemo,
    customFormattingSource,
    customFormattingLang,
  ),
  customOutput: defineDemo(SliderCustomOutputDemo, customOutputSource, customOutputLang),
  reactiveForm: defineDemo(SliderReactiveFormDemo, reactiveFormSource, reactiveFormLang),
  customStyling: defineDemo(SliderCustomStylingDemo, customStylingSource, customStylingLang),
} as const;
