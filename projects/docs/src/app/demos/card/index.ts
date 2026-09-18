import { defineDemo } from '../define-demo';
import { CardBasicDemo, DEMO_LANG as basicLang, DEMO_SOURCE as basicSource } from './basic.demo';
import { CardHorizontalWithImageDemo, DEMO_LANG as horizontalWithImageLang, DEMO_SOURCE as horizontalWithImageSource } from './horizontal-with-image.demo';
import { CardVariantsDemo, DEMO_LANG as variantsLang, DEMO_SOURCE as variantsSource } from './variants.demo';
import { CardWithAvatarDemo, DEMO_LANG as withAvatarLang, DEMO_SOURCE as withAvatarSource } from './with-avatar.demo';
import { CardWithFormDemo, DEMO_LANG as withFormLang, DEMO_SOURCE as withFormSource } from './with-form.demo';
import { CardWithImagesDemo, DEMO_LANG as withImagesLang, DEMO_SOURCE as withImagesSource } from './with-images.demo';

export const cardDemos = {
  basic: defineDemo(CardBasicDemo, basicSource, basicLang),
  horizontalWithImage: defineDemo(CardHorizontalWithImageDemo, horizontalWithImageSource, horizontalWithImageLang),
  variants: defineDemo(CardVariantsDemo, variantsSource, variantsLang),
  withAvatar: defineDemo(CardWithAvatarDemo, withAvatarSource, withAvatarLang),
  withForm: defineDemo(CardWithFormDemo, withFormSource, withFormLang),
  withImages: defineDemo(CardWithImagesDemo, withImagesSource, withImagesLang),
} as const;
