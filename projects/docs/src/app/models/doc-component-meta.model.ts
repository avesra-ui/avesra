import type { DocApiProp } from './doc-api-prop.model';

export type DocComponentCategory =
  | 'Buttons'
  | 'Form Primitives'
  | 'Form Layout'
  | 'Text Inputs'
  | 'Selection Controls'
  | 'Data Display'
  | 'Layout & Surfaces'
  | 'Overlays & Feedback'
  | 'Menus & Lists'
  | 'Navigation'
  | 'Disclosure';

export type DocComponentStatus = 'documented' | 'planned' | 'hidden';

export interface DocComponentMeta {
  slug: string;
  label: string;
  category: DocComponentCategory;
  description: string;
  status: DocComponentStatus;
  path: string;
  imports: string[];
  props?: DocApiProp[];
}
