import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  AvAvatarComponent,
  AvAvatarFallbackComponent,
  AvButtonComponent,
  AvDescriptionComponent,
  AvLabelComponent,
  AvListBoxComponent,
  AvListBoxItemComponent,
  AvPopoverArrowComponent,
  AvPopoverComponent,
  AvPopoverContentComponent,
  AvPopoverDialogComponent,
  AvPopoverTriggerDirective,
  AvSwitchComponent,
  AvSwitchContentComponent,
  AvSwitchControlComponent,
  AvSwitchThumbComponent,
} from '@avesra/angular';
import { DEFAULT_AV_DESIGN_THEME, AvThemeService } from '@avesra/styles';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';
import { DOCS_DESIGN_THEMES, isDocsDesignTheme } from './docs-theme-picker.config';

@Component({
  selector: 'app-docs-theme-picker',
  imports: [
    RouterLink,
    AppIconComponent,
    AvAvatarComponent,
    AvAvatarFallbackComponent,
    AvButtonComponent,
    AvDescriptionComponent,
    AvLabelComponent,
    AvListBoxComponent,
    AvListBoxItemComponent,
    AvPopoverComponent,
    AvPopoverTriggerDirective,
    AvPopoverContentComponent,
    AvPopoverDialogComponent,
    AvPopoverArrowComponent,
    AvSwitchComponent,
    AvSwitchControlComponent,
    AvSwitchThumbComponent,
    AvSwitchContentComponent,
  ],
  templateUrl: './docs-theme-picker.component.html',
  styleUrl: './docs-theme-picker.component.scss',
})
export class DocsThemePickerComponent {
  readonly theme = inject(AvThemeService);
  readonly themes = DOCS_DESIGN_THEMES;

  readonly selectedThemeKeys = computed(() => [this.theme.designTheme()]);

  readonly activeTheme = computed(
    () => DOCS_DESIGN_THEMES.find((item) => item.id === this.theme.designTheme()) ?? DOCS_DESIGN_THEMES[0],
  );

  readonly showActiveSwatch = computed(
    () => this.theme.designTheme() !== DEFAULT_AV_DESIGN_THEME,
  );

  onThemeSelect(keys: string[]): void {
    const id = keys[0];

    if (isDocsDesignTheme(id)) {
      this.theme.setDesignTheme(id);
    }
  }

  onVibrantChange(enabled: boolean): void {
    this.theme.setVibrantPalette(enabled);
  }
}
