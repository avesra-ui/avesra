import { Component, computed, signal } from '@angular/core';
import { NgStyle } from '@angular/common';

import {
  AvTabsComponent,
  AvTabsIndicatorComponent,
  AvTabsListComponent,
  AvTabsPanelComponent,
  AvTabsTabComponent,
} from '@avesra/angular';

import {
  accentCssVars,
  HOME_ACCENTS,
  HOME_SHOWCASE_TABS,
  type HomeAccentOption,
  type HomeShowcaseTab,
} from './home-showcase.model';
import { HomeComponentsPanelComponent } from './panels/components-panel.component';
import { HomeDashboardPanelComponent } from './panels/dashboard-panel.component';
import { HomeMailPanelComponent } from './panels/mail-panel.component';
import { HomeChatPanelComponent } from './panels/chat-panel.component';
import { HomeFinancesPanelComponent } from './panels/finances-panel.component';

@Component({
  selector: 'app-home-showcase',
  imports: [
    NgStyle,
    AvTabsComponent,
    AvTabsListComponent,
    AvTabsTabComponent,
    AvTabsPanelComponent,
    AvTabsIndicatorComponent,
    HomeComponentsPanelComponent,
    HomeDashboardPanelComponent,
    HomeMailPanelComponent,
    HomeChatPanelComponent,
    HomeFinancesPanelComponent,
  ],
  templateUrl: './home-showcase.component.html',
  styleUrl: './home-showcase.component.scss',
})
export class HomeShowcaseComponent {
  readonly tabs = HOME_SHOWCASE_TABS;
  readonly accents = HOME_ACCENTS;
  readonly selectedAccent = signal<HomeAccentOption | null>(null);
  readonly selectedTab = signal<HomeShowcaseTab>('components');

  readonly accentStyle = computed(() => {
    const accent = this.selectedAccent();
    return accent ? accentCssVars(accent.value) : {};
  });

  selectAccent(accent: HomeAccentOption): void {
    this.selectedAccent.update((current) => (current?.id === accent.id ? null : accent));
  }

  onTabChange(key: string | number | null): void {
    if (typeof key !== 'string') {
      return;
    }

    const tab = this.tabs.find((item) => item.id === key);
    if (tab && !tab.disabled) {
      this.selectedTab.set(tab.id);
    }
  }
}
