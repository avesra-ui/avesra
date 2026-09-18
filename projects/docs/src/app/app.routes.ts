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
        title: 'Avesra',
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
      },
      {
        path: 'theming',
        loadComponent: () =>
          import('./pages/theming/theming.page').then((m) => m.ThemingPage),
        title: 'Theming | Avesra Docs',
      },
      {
        path: 'installation',
        loadComponent: () =>
          import('./pages/installation/installation.page').then((m) => m.InstallationPage),
        title: 'Installation | Avesra Docs',
      },
      {
        path: 'changelog',
        loadComponent: () =>
          import('./pages/changelog/changelog.page').then((m) => m.ChangelogPage),
        title: 'Changelog | Avesra Docs',
      },
      {
        path: 'components',
        loadChildren: () =>
          import('./pages/components/components.routes').then((m) => m.COMPONENTS_ROUTES),
      },
    ],
  },
];
