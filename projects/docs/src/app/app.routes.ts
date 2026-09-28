import { Routes } from '@angular/router';

import { DEFAULT_DOC } from './config/docs-routes.constant';
import { DocumentationLayout } from './layout/documentation/documentation.layout';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home/home.page').then((m) => m.HomePage),
        title: 'Avesra — Beautiful Angular components by default',
        data: {
          metaDescription:
            'Avesra is an Angular UI library with polished components, theming, and docs built for production apps.',
        },
      },
    ],
  },
  {
    path: 'docs',
    component: DocumentationLayout,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: DEFAULT_DOC,
      },
      {
        path: 'introduction',
        loadComponent: () =>
          import('./pages/introduction/introduction.page').then((m) => m.IntroductionPage),
        title: 'Introduction | Avesra Docs',
        data: {
          metaDescription:
            'Learn what Avesra is, why it exists, and how it helps Angular teams ship accessible, themeable interfaces faster.',
        },
      },
      {
        path: 'theming',
        loadComponent: () =>
          import('./pages/theming/theming.page').then((m) => m.ThemingPage),
        title: 'Theming | Avesra Docs',
        data: {
          metaDescription:
            'Customize Avesra with design tokens, dark mode, and theme presets. Guide to styling and CSS variables.',
        },
      },
      {
        path: 'installation',
        loadComponent: () =>
          import('./pages/installation/installation.page').then((m) => m.InstallationPage),
        title: 'Installation | Avesra Docs',
        data: {
          metaDescription:
            'Install Avesra in your Angular project: package setup, styles, and the minimum configuration to render components.',
        },
      },
      {
        path: 'changelog',
        loadComponent: () =>
          import('./pages/changelog/changelog.page').then((m) => m.ChangelogPage),
        title: 'Changelog | Avesra Docs',
        data: {
          metaDescription:
            'Release notes and version history for the Avesra Angular component library.',
        },
      },
      {
        path: 'components',
        loadChildren: () =>
          import('./pages/components/components.routes').then((m) => m.COMPONENTS_ROUTES),
      },
    ],
  },
];
