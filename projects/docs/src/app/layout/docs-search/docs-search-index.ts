import { getVisibleDocsComponents } from '../../config/docs-components.config';
import { DOCS_HEADER_PATHS, DOCS_SIDEBAR_PATHS } from '../../config/docs-nav.config';

export type DocsSearchSection = 'all' | 'guides' | 'components';

export interface DocsSearchItem {
  id: string;
  label: string;
  path: string;
  group: string;
  section: DocsSearchSection;
  icon: string;
  keywords?: string;
}

export interface DocsSearchGroup {
  title: string;
  items: DocsSearchItem[];
}

const GROUP_ORDER = ['Pages', 'Components'] as const;

const PAGE_ICON = 'solar:alt-arrow-right-linear';
const COMPONENT_ICON = 'solar:widget-2-linear';

function resolveSection(path: string): DocsSearchSection {
  if (path.startsWith('/docs/components')) {
    return 'components';
  }

  if (
    path.startsWith('/docs/introduction') ||
    path.startsWith('/docs/theming') ||
    path.startsWith('/docs/installation') ||
    path.startsWith('/docs/changelog')
  ) {
    return 'guides';
  }

  return 'all';
}

function resolveGroup(path: string): (typeof GROUP_ORDER)[number] {
  return path.startsWith('/docs/components/') ? 'Components' : 'Pages';
}

function resolveIcon(group: string): string {
  return group === 'Components' ? COMPONENT_ICON : PAGE_ICON;
}

function buildDocsSearchIndex(): DocsSearchItem[] {
  const items: DocsSearchItem[] = [];
  const seen = new Set<string>();
  const componentMeta = new Map(
    getVisibleDocsComponents().map((component) => [component.path, component]),
  );

  const add = (
    item: Omit<DocsSearchItem, 'section' | 'icon' | 'group'> &
      Partial<Pick<DocsSearchItem, 'section' | 'icon' | 'group'>>,
  ): void => {
    if (seen.has(item.path)) {
      return;
    }

    seen.add(item.path);
    const group = item.group ?? resolveGroup(item.path);

    items.push({
      ...item,
      group,
      section: item.section ?? resolveSection(item.path),
      icon: item.icon ?? resolveIcon(group),
    });
  };

  for (const nav of DOCS_HEADER_PATHS) {
    if (!nav.available) {
      continue;
    }

    add({
      id: nav.path,
      label: nav.path === '/docs/introduction' ? 'Introduction' : nav.name,
      path: nav.path,
      group: 'Pages',
    });
  }

  for (const section of DOCS_SIDEBAR_PATHS) {
    for (const entry of section.data) {
      if (!entry.available) {
        continue;
      }

      const component = componentMeta.get(entry.path);

      add({
        id: entry.path,
        label: entry.name,
        path: entry.path,
        keywords: component ? `${component.slug} ${component.description}` : undefined,
      });
    }
  }

  return items;
}

export const DOCS_SEARCH_INDEX = buildDocsSearchIndex();

function matchesSection(item: DocsSearchItem, section: DocsSearchSection): boolean {
  if (section === 'all') {
    return true;
  }

  return item.section === section;
}

export function filterDocsSearch(
  query: string,
  section: DocsSearchSection = 'all',
  items: DocsSearchItem[] = DOCS_SEARCH_INDEX,
): DocsSearchItem[] {
  const scoped = items.filter((item) => matchesSection(item, section));
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    return scoped;
  }

  return scoped.filter((item) => {
    const haystack = `${item.label} ${item.path} ${item.group} ${item.keywords ?? ''}`.toLowerCase();

    return haystack.includes(normalized);
  });
}

export function groupDocsSearch(items: DocsSearchItem[]): DocsSearchGroup[] {
  const buckets = new Map<string, DocsSearchItem[]>();

  for (const item of items) {
    const list = buckets.get(item.group) ?? [];
    list.push(item);
    buckets.set(item.group, list);
  }

  const groups: DocsSearchGroup[] = [];
  const used = new Set<string>();

  for (const title of GROUP_ORDER) {
    const groupItems = buckets.get(title);

    if (groupItems?.length) {
      groups.push({ title, items: groupItems });
      used.add(title);
    }
  }

  for (const [title, groupItems] of buckets) {
    if (!used.has(title) && groupItems.length) {
      groups.push({ title, items: groupItems });
    }
  }

  return groups;
}

export function filterDocsSearchGroups(
  query: string,
  section: DocsSearchSection = 'all',
): DocsSearchGroup[] {
  return groupDocsSearch(filterDocsSearch(query, section));
}
