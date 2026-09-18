import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AvButtonComponent } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';
import { DOCS_VERSION } from '../../config/docs-nav.config';
import { HomeShowcaseComponent } from './home-showcase/home-showcase.component';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, AppIconComponent, AvButtonComponent, HomeShowcaseComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomePage {
  readonly version = DOCS_VERSION;
  readonly githubUrl = 'https://github.com/avesra-ui';
}
