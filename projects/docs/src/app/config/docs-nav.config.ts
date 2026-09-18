import { getVisibleDocsComponents } from './docs-components.config';

/** Documentation sidebar nav item. */
export interface DocsNavItem {
  name: string;
  path: string;
  available: boolean;
}

export interface DocsNavSection {
  title: string;
  data: DocsNavItem[];
}

export interface DocsNavLink {
  type: 'link';
  label: string;
  path: string;
  /** Optional pill shown next to the label (e.g. Soon). */
  badge?: string;
  /** When true the item is visible but not navigable. */
  disabled?: boolean;
}

export interface DocsNavSeparator {
  type: 'separator';
  label: string;
}

export type DocsSidebarItem = DocsNavLink | DocsNavSeparator;

export interface DocsMainNavItem {
  label: string;
  path: string;
  icon: string;
  /** Sidebar tree shown when this section is active */
  sidebarKey?: 'getting-started' | 'components';
}

export interface DocsSidebarTab {
  label: string;
  path: string;
  icon: string;
  sidebarKey: NonNullable<DocsMainNavItem['sidebarKey']>;
}

export const DOCS_VERSION = 'v0.0.1';

/** Header nav paths. */
export const DOCS_HEADER_PATHS: DocsNavItem[] = [
  { name: 'Docs', path: '/docs/introduction', available: true },
  { name: 'Components', path: '/docs/components', available: true },
];

/** Footer social links. */
export const DOCS_SOCIAL_MEDIAS = [
  {
    name: 'GitHub',
    url: 'https://github.com/avesra-ui',
    icon: 'avesra:github',
  },
] as const;

export const DOCS_SIDEBAR_TABS: DocsSidebarTab[] = [
  {
    label: 'Guides',
    path: '/docs/introduction',
    icon: 'solar:notebook-linear',
    sidebarKey: 'getting-started',
  },
  {
    label: 'Components',
    path: '/docs/components',
    icon: 'solar:widget-2-linear',
    sidebarKey: 'components',
  },
];

export const DOCS_MAIN_NAV: DocsMainNavItem[] = [
  {
    label: 'Getting Started',
    path: '/docs/introduction',
    icon: 'solar:notebook-linear',
    sidebarKey: 'getting-started',
  },
  {
    label: 'Components',
    path: '/docs/components',
    icon: 'solar:widget-2-linear',
    sidebarKey: 'components',
  },
];

export const DOCS_SIDEBAR_GETTING_STARTED: DocsSidebarItem[] = [
  { type: 'separator', label: 'Overview' },
  { type: 'link', label: 'Introduction', path: '/docs/introduction' },
  { type: 'separator', label: 'Get started' },
  { type: 'link', label: 'Theming', path: '/docs/theming' },
  { type: 'link', label: 'Installation', path: '/docs/installation' },
  { type: 'separator', label: 'Releases' },
  { type: 'link', label: 'Changelog', path: '/docs/changelog' },
];

function buildComponentsSidebar(): DocsSidebarItem[] {
  const items: DocsSidebarItem[] = [
    { type: 'separator', label: 'Overview' },
    { type: 'link', label: 'All Components', path: '/docs/components' },
    { type: 'separator', label: 'Components' },
  ];

  const components = [...getVisibleDocsComponents()].sort((a, b) =>
    a.label.localeCompare(b.label),
  );

  for (const component of components) {
    items.push({
      type: 'link',
      label: component.label,
      path: component.path,
      badge: component.status === 'planned' ? 'Soon' : undefined,
      disabled: component.status === 'planned',
    });
  }

  return items;
}

export const DOCS_SIDEBAR_COMPONENTS: DocsSidebarItem[] = buildComponentsSidebar();

export const DOCS_SIDEBAR_MORE: DocsSidebarItem[] = [
  { type: 'separator', label: 'Releases' },
  { type: 'link', label: 'Changelog', path: '/docs/changelog' },
];

export const DOCS_SIDEBAR_BY_KEY: Record<
  NonNullable<DocsMainNavItem['sidebarKey']>,
  DocsSidebarItem[]
> = {
  'getting-started': DOCS_SIDEBAR_GETTING_STARTED,
  components: DOCS_SIDEBAR_COMPONENTS,
};

/** Flat sections for the documentation sidebar. */
export const DOCS_SIDEBAR_PATHS: DocsNavSection[] = [
  {
    title: 'Getting Started',
    data: [
      { name: 'Introduction', path: '/docs/introduction', available: true },
      { name: 'Theming', path: '/docs/theming', available: true },
      { name: 'Installation', path: '/docs/installation', available: true },
    ],
  },
  {
    title: 'Components',
    data: [
      { name: 'All Components', path: '/docs/components', available: true },
      ...[...getVisibleDocsComponents()]
        .sort((a, b) => a.label.localeCompare(b.label))
        .map((component) => ({
          name: component.label,
          path: component.path,
          available: component.status !== 'planned',
        })),
    ],
  },
  {
    title: 'Releases',
    data: [
      { name: 'Changelog', path: '/docs/changelog', available: true },
    ],
  },
];

export function resolveSidebarKey(
  path: string,
): NonNullable<DocsMainNavItem['sidebarKey']> {
  if (path.startsWith('/docs/components')) {
    return 'components';
  }

  return 'getting-started';
}
