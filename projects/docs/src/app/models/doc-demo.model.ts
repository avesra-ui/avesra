import type { Type } from '@angular/core';

export interface DocDemo {
  component: Type<unknown>;
  source: string;
  lang: string;
}
