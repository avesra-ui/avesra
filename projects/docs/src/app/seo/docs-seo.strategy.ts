import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

import { getComponentBySlug } from '../config/docs-components.config';
import { AVESRA_DEFAULT_META_DESCRIPTION, AVESRA_SITE_ORIGIN } from './docs-seo.config';

const COMPONENT_DOC_PATH = /^\/docs\/components\/([^/]+)$/;

/** Sets the page title plus per-page meta description, Open Graph, and canonical tags on every navigation. */
@Injectable({ providedIn: 'root' })
export class DocsSeoStrategy extends TitleStrategy {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot) ?? 'Avesra Docs';
    const path = snapshot.url.split(/[?#]/)[0].replace(/\/+$/, '') || '/';
    const description = this.resolveDescription(snapshot, path);
    const url = `${AVESRA_SITE_ORIGIN}${path}`;

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.setCanonical(url);
  }

  private resolveDescription(snapshot: RouterStateSnapshot, path: string): string {
    let leaf = snapshot.root;
    while (leaf.firstChild) {
      leaf = leaf.firstChild;
    }

    const metaDescription = leaf.data['metaDescription'] as string | undefined;
    if (metaDescription) {
      return metaDescription;
    }

    const slug = COMPONENT_DOC_PATH.exec(path)?.[1];
    const component = slug ? getComponentBySlug(slug) : undefined;
    return component
      ? `${component.description.replace(/\.$/, '')}. Examples, API reference, and usage for the Avesra Angular ${component.label} component.`
      : AVESRA_DEFAULT_META_DESCRIPTION;
  }

  private setCanonical(href: string): void {
    let link = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', href);
  }
}
