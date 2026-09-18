import { Component, signal } from '@angular/core';

import { AvToggleButtonComponent } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_STYLES = `
    .x-like {
      --av-toggle-button-bg: transparent;
      --av-toggle-button-bg-hover: transparent;
      --av-toggle-button-bg-pressed: transparent;
      --av-toggle-button-bg-selected: transparent;
      --av-toggle-button-bg-selected-hover: transparent;
      --av-toggle-button-bg-selected-pressed: transparent;
      --av-toggle-button-fg-selected: #f91880;
      gap: 0;
      padding-inline: 0;
      color: var(--av-muted);
    }

    .x-like:hover,
    .x-like[data-hovered='true'],
    .x-like[data-selected='true'] {
      color: #f91880;
    }

    .x-like__hit {
      position: relative;
      display: grid;
      place-items: center;
      width: 2.25rem;
      height: 2.25rem;
      margin-inline-end: -0.35rem;
      border-radius: 9999px;
      transition: background-color 100ms ease;
    }

    .x-like:hover .x-like__hit,
    .x-like[data-hovered='true'] .x-like__hit {
      background-color: rgba(249, 24, 128, 0.1);
    }

    .x-like__icon {
      display: grid;
      place-items: center;
      transition: transform 150ms ease;
    }

    .x-like[data-selected='true'] .x-like__icon {
      animation: x-like-pop 0.45s cubic-bezier(0.36, 0.07, 0.19, 0.97);
    }

    .x-like__count {
      min-width: 2rem;
      font-size: 0.8125rem;
      font-weight: 400;
      font-variant-numeric: tabular-nums;
      line-height: 1;
    }

    .x-like__burst {
      position: absolute;
      inset: 0;
      border-radius: 9999px;
      border: 2px solid #f91880;
      opacity: 0;
      pointer-events: none;
    }

    .x-like[data-selected='true'] .x-like__burst {
      animation: x-like-burst 0.55s ease-out;
    }

    @keyframes x-like-pop {
      0% { transform: scale(1); }
      30% { transform: scale(0.75); }
      60% { transform: scale(1.28); }
      100% { transform: scale(1); }
    }

    @keyframes x-like-burst {
      0% { transform: scale(0.35); opacity: 0.7; }
      100% { transform: scale(1.75); opacity: 0; }
    }
  `;

const DEMO_TEMPLATE = `<button
  av-toggle-button
  variant="ghost"
  class="x-like"
  aria-label="Like"
  [(selected)]="liked"
>
  <span class="x-like__hit">
    <span class="x-like__burst" aria-hidden="true"></span>
    <span class="x-like__icon">
      <app-icon
        [icon]="liked() ? 'solar:heart-bold' : 'solar:heart-linear'"
        size="20"
      />
    </span>
  </span>
  <span class="x-like__count">{{ liked() ? '68.1K' : '68K' }}</span>
</button>`;

export const DEMO_NAME = 'toggle-button-custom-styling';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import { AvToggleButtonComponent } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-toggle-button-custom-styling-demo',
  imports: [AvToggleButtonComponent, AppIconComponent],
  template: \`${DEMO_TEMPLATE}\`,
  styles: [\`${DEMO_STYLES}\`],
})
export class ToggleButtonCustomStylingDemo {
  readonly liked = signal(false);
}`;

@Component({
  selector: 'app-toggle-button-custom-styling-demo',
  imports: [AvToggleButtonComponent, AppIconComponent],
  template: DEMO_TEMPLATE,
  styles: [DEMO_STYLES],
})
export class ToggleButtonCustomStylingDemo {
  readonly liked = signal(false);
}
