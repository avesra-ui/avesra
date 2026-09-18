import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  AvButtonComponent,
  AvCardComponent,
  AvCardContentComponent,
  AvCardHeaderComponent,
  AvChipComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';
import { DocPageComponent } from '../../components/doc-page/doc-page.component';
import { DOCS_SOCIAL_MEDIAS } from '../../config/docs-nav.config';
import type { DocTocItem } from '../../models/doc-toc.model';

interface IntroFeature {
  title: string;
  description: string;
  icon: string;
}

interface IntroColumn {
  title: string;
  description: string;
}

@Component({
  selector: 'app-introduction-page',
  imports: [
    DocPageComponent,
    AppIconComponent,
    AvButtonComponent,
    AvCardComponent,
    AvCardHeaderComponent,
    AvCardContentComponent,
    AvChipComponent,
    RouterLink,
  ],
  templateUrl: './introduction.page.html',
  styleUrl: '../shared/doc-prose.scss',
})
export class IntroductionPage {
  readonly packages = {
    angular: '@avesra/angular',
    themes: '@avesra/styles',
  };

  readonly githubUrl = DOCS_SOCIAL_MEDIAS[0].url;

  readonly features: IntroFeature[] = [
    {
      title: 'Beautiful & Practical',
      description:
        'Components that look finished out of the box, stay accessible, and compose without fighting the API.',
      icon: 'solar:star-linear',
    },
    {
      title: 'Community First',
      description:
        'Built by Angular developers who understand your needs. Real-world solutions to real problems.',
      icon: 'solar:users-group-rounded-linear',
    },
    {
      title: 'Modern Angular',
      description:
        'Standalone components, signals, and SSR-ready patterns — built for Angular 19, not a React port.',
      icon: 'solar:lightning-linear',
    },
    {
      title: 'Infinitely Customizable',
      description:
        'Override CSS variables, switch design presets, or restyle with Tailwind. Make every surface yours.',
      icon: 'solar:widget-linear',
    },
  ];

  readonly packagePoints: IntroColumn[] = [
    {
      title: 'Install once',
      description:
        'Add the component library and the theme package. Updates come through npm, not copied files.',
    },
    {
      title: 'Tokens in themes',
      description:
        'Light, dark, and design presets live in @avesra/styles. Components only apply classes.',
    },
    {
      title: 'Compose in templates',
      description:
        'Import a standalone part, drop it in the template, and keep the rest of your app unchanged.',
    },
  ];

  readonly aiCards: IntroFeature[] = [
    {
      title: 'Predictable Patterns',
      description:
        'Consistent naming, kebab-case inputs, and compound parts that AI tools can read and generate.',
      icon: 'solar:sun-linear',
    },
    {
      title: 'Rich Documentation',
      description:
        'Live demos, anatomy snippets, and API tables that give AI the context to write accurate Avesra code.',
      icon: 'solar:book-2-linear',
    },
  ];

  readonly openSource: IntroFeature[] = [
    {
      title: 'MIT licensed',
      description:
        'Use, fork, and ship the core packages in commercial products. The license stays on GitHub.',
      icon: 'solar:check-circle-linear',
    },
    {
      title: 'Built in public',
      description:
        'Issues, pull requests, and the changelog are public. Follow the work and help shape it.',
      icon: 'solar:lightning-linear',
    },
    {
      title: 'Yours to customize',
      description:
        'Tokens are CSS you can override. Your markup stays in your app — the library is a dependency, not a locked CLI.',
      icon: 'solar:widget-linear',
    },
  ];

  openGithub(): void {
    window.open(this.githubUrl, '_blank', 'noopener,noreferrer');
  }

  readonly toc: DocTocItem[] = [
    { id: 'overview', title: 'Overview' },
    { id: 'why-avesra', title: 'Why Avesra' },
    { id: 'packages', title: 'Two packages' },
    { id: 'ai-ready', title: 'AI Ready' },
    { id: 'open-source', title: 'Open Source' },
    { id: 'support', title: 'Support' },
  ];
}
