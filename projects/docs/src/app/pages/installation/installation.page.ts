import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AvButtonComponent, AvChipComponent } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';
import { DocCodeBlockComponent } from '../../components/doc-code-block/doc-code-block.component';
import { DocPageComponent } from '../../components/doc-page/doc-page.component';
import type { DocTocItem } from '../../models/doc-toc.model';
import {
  INSTALL_APP_CONFIG,
  INSTALL_CREATE_PROJECT,
  INSTALL_PACKAGE_COMMANDS,
  INSTALL_POSTCSS,
  INSTALL_STYLES,
  INSTALL_USAGE,
  type InstallPackageManager,
} from './installation.snippets';

interface PackageManagerOption {
  id: InstallPackageManager;
  label: string;
}

@Component({
  selector: 'app-installation-page',
  imports: [
    DocPageComponent,
    DocCodeBlockComponent,
    AvButtonComponent,
    AvChipComponent,
    RouterLink,
    AppIconComponent,
  ],
  templateUrl: './installation.page.html',
  styleUrl: '../shared/doc-prose.scss',
})
export class InstallationPage {
  readonly packageManagers: PackageManagerOption[] = [
    { id: 'npm', label: 'npm' },
    { id: 'pnpm', label: 'pnpm' },
    { id: 'yarn', label: 'yarn' },
    { id: 'bun', label: 'bun' },
  ];

  readonly packageManager = signal<InstallPackageManager>('npm');

  readonly snippets = {
    createProject: INSTALL_CREATE_PROJECT,
    postcss: INSTALL_POSTCSS,
    styles: INSTALL_STYLES,
    appConfig: INSTALL_APP_CONFIG,
    usage: INSTALL_USAGE,
  };

  readonly packageCommand = computed(() => INSTALL_PACKAGE_COMMANDS[this.packageManager()]);

  readonly toc: DocTocItem[] = [
    { id: 'overview', title: 'Overview' },
    { id: 'create-project', title: 'Create project' },
    { id: 'add-dependencies', title: 'Add dependencies' },
    { id: 'configure-tailwind', title: 'Configure Tailwind' },
    { id: 'configure-styles', title: 'Configure styles' },
    { id: 'register-provider', title: 'Register the provider' },
    { id: 'thats-it', title: "That's it" },
  ];

  selectPackageManager(id: InstallPackageManager): void {
    this.packageManager.set(id);
  }
}
