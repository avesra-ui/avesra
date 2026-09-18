export type DocTocDepth = 1 | 2 | 3;

export interface DocTocItem {
  id: string;
  title: string;
  /** Nesting level for indentation. Defaults to 1. */
  depth?: DocTocDepth;
}
