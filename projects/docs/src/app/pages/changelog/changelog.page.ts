import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

import {
  AvCardComponent,
  AvChipComponent,
  AvCloseButtonComponent,
  AvInputGroupComponent,
  AvInputGroupInputComponent,
  AvInputGroupPrefixComponent,
  AvInputGroupSuffixComponent,
  AvTypographyComponent,
  AvTypographyHeadingComponent,
  AvTypographyParagraphComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';
import { DocPageComponent } from '../../components/doc-page/doc-page.component';
import type { DocTocItem } from '../../models/doc-toc.model';
import {
  CHANGELOG_RELEASES,
  type ChangelogChange,
  type ChangelogRelease,
} from './changelog.data';

export interface ChangelogReleaseView {
  id: string;
  version: string;
  dateLabel: string;
  latest: boolean;
  highlights: string[];
  enhancements: ChangelogChange[];
  fixes: ChangelogChange[];
}

const DATE_FORMATTER = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
});

function releaseId(version: string): string {
  return version.replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function formatReleaseDate(isoDate: string): string {
  return DATE_FORMATTER.format(new Date(`${isoDate}T00:00:00`));
}

function matchesQuery(release: ChangelogRelease, query: string): boolean {
  if (!query) {
    return true;
  }

  const haystack = [
    release.version,
    ...release.highlights,
    ...release.changes.map((change) => `${change.scope} ${change.text}`),
  ]
    .join(' ')
    .toLowerCase();

  return haystack.includes(query);
}

function matchesChangeQuery(change: ChangelogChange, query: string): boolean {
  if (!query) {
    return true;
  }

  return `${change.scope} ${change.text}`.toLowerCase().includes(query);
}

@Component({
  selector: 'app-changelog-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgClass,
    DocPageComponent,
    AppIconComponent,
    AvCardComponent,
    AvChipComponent,
    AvCloseButtonComponent,
    AvInputGroupComponent,
    AvInputGroupInputComponent,
    AvInputGroupPrefixComponent,
    AvInputGroupSuffixComponent,
    AvTypographyComponent,
    AvTypographyHeadingComponent,
    AvTypographyParagraphComponent,
  ],
  templateUrl: './changelog.page.html',
  styleUrl: '../shared/doc-prose.scss',
})
export class ChangelogPage {
  readonly query = signal('');
  readonly selectedTypes = signal<string[]>([]);

  readonly filteredReleases = computed(() => {
    const query = this.query().trim().toLowerCase();
    const types = this.selectedTypes();
    const showEnhancements = types.length === 0 || types.includes('enhancement');
    const showFixes = types.length === 0 || types.includes('fix');
    const versionMatched = (release: ChangelogRelease) =>
      !query || release.version.toLowerCase().includes(query);

    return CHANGELOG_RELEASES.reduce<ChangelogReleaseView[]>((releases, release) => {
      if (!matchesQuery(release, query)) {
        return releases;
      }

      const showAllInRelease = versionMatched(release);
      const highlights = showEnhancements
        ? release.highlights.filter((item) => showAllInRelease || item.toLowerCase().includes(query))
        : [];
      const enhancements = showEnhancements
        ? release.changes.filter(
            (change) =>
              change.type === 'enhancement' &&
              (showAllInRelease || matchesChangeQuery(change, query)),
          )
        : [];
      const fixes = showFixes
        ? release.changes.filter(
            (change) =>
              change.type === 'fix' && (showAllInRelease || matchesChangeQuery(change, query)),
          )
        : [];

      if (highlights.length === 0 && enhancements.length === 0 && fixes.length === 0) {
        return releases;
      }

      releases.push({
        id: releaseId(release.version),
        version: release.version,
        dateLabel: formatReleaseDate(release.date),
        latest: Boolean(release.latest),
        highlights,
        enhancements,
        fixes,
      });

      return releases;
    }, []);
  });

  readonly stats = computed(() => {
    const releases = this.filteredReleases();
    const entries = releases.reduce(
      (total, release) =>
        total + release.highlights.length + release.enhancements.length + release.fixes.length,
      0,
    );

    return {
      releases: releases.length,
      entries,
    };
  });

  readonly statsLabel = computed(() => {
    const { releases, entries } = this.stats();
    const releaseWord = releases === 1 ? 'release' : 'releases';
    const entryWord = entries === 1 ? 'entry' : 'entries';

    return `${releases} ${releaseWord} · ${entries} ${entryWord}`;
  });

  readonly toc = computed<DocTocItem[]>(() =>
    this.filteredReleases().map((release) => ({
      id: release.id,
      title: release.version,
    })),
  );

  onQueryInput(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
  }

  clearQuery(): void {
    this.query.set('');
  }

  hasActiveType(): boolean {
    return this.selectedTypes().length > 0;
  }

  isTypeActive(type: string): boolean {
    return this.selectedTypes().includes(type);
  }

  isTypeDimmed(type: string): boolean {
    return this.hasActiveType() && !this.isTypeActive(type);
  }

  filterChipClass(type: string): string {
    const base =
      'select-none transition-[opacity,filter,background-color,color] duration-200 ease-out';

    if (this.isTypeDimmed(type)) {
      return `${base} cursor-not-allowed pointer-events-none opacity-40 grayscale`;
    }

    return `${base} cursor-pointer`;
  }

  toggleType(type: string): void {
    if (this.isTypeActive(type)) {
      this.selectedTypes.set([]);
      return;
    }

    if (this.hasActiveType()) {
      return;
    }

    this.selectedTypes.set([type]);
  }
}
