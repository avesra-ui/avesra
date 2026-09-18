import type { Type } from '@angular/core';

import type { DocDemo } from '../models/doc-demo.model';

export function defineDemo(
  component: Type<unknown>,
  source: string,
  lang = 'typescript',
): DocDemo {
  return { component, source, lang };
}
