import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';

import { AvButtonComponent } from '@avesra/angular';
import { AvThemeService } from '@avesra/styles';

@Component({
  selector: 'app-root',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [AvButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly theme = inject(AvThemeService);
}
