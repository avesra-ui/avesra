import { DOCS_VERSION } from '../../config/docs-nav.config';

export type ChangelogChangeType = 'enhancement' | 'fix';

export interface ChangelogChange {
  type: ChangelogChangeType;
  scope: string;
  text: string;
}

export interface ChangelogRelease {
  version: string;
  date: string;
  latest?: boolean;
  highlights: string[];
  changes: ChangelogChange[];
}

export const CHANGELOG_RELEASES: ChangelogRelease[] = [
  {
    version: DOCS_VERSION,
    date: '2026-08-22',
    latest: true,
    highlights: [
      'Initial public release of Avesra for Angular 19',
      'Standalone components, signals, and SSR-ready documentation',
      'Design tokens and CSS live in @avesra/styles, not inside Angular components',
      'Tailwind CSS v4 styling with stable BEM classes',
    ],
    changes: [
      {
        type: 'enhancement',
        scope: 'Docs',
        text: 'Introduction, Installation, and Theming handbook',
      },
      {
        type: 'enhancement',
        scope: 'Docs',
        text: 'Interactive examples for documented components',
      },
      {
        type: 'enhancement',
        scope: 'Themes',
        text: 'Light and dark modes with live design presets',
      },
      {
        type: 'enhancement',
        scope: 'Styles',
        text: 'CSS variable API with --av-* tokens',
      },
      {
        type: 'enhancement',
        scope: 'Core',
        text: 'Compound components that compose with shared Label, Description, and FieldError',
      },
    ],
  },
];
