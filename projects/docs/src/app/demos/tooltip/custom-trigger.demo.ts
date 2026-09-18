import { Component } from '@angular/core';

import { AvAvatarImports, AvChipImports, AvTooltipDirective } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-wrap items-center gap-6">
      <span
        av-avatar
        size="sm"
        [avTooltip]="avatarTooltip"
        aria-label="User avatar"
        tabindex="0"
        [show-delay]="0"
      >
        <img av-avatar-image alt="Jane Doe" [src]="profileAvatarUrl" />
        <span av-avatar-fallback>JD</span>
      </span>

      <span
        av-chip
        color="success"
        variant="secondary"
        [avTooltip]="statusTooltip"
        aria-label="Status chip"
        tabindex="0"
        [show-delay]="0"
      >
        <svg class="size-3" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <path
            d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Zm3.78 4.72-4.25 4.25a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47 3.72-3.72a.75.75 0 1 1 1.06 1.06Z"
          />
        </svg>
        <span av-chip-label>Active</span>
      </span>

      <div
        class="inline-flex cursor-default rounded-full bg-accent-soft p-2 text-accent-soft-foreground"
        [avTooltip]="helpTooltip"
        aria-label="Info icon"
        tabindex="0"
        tooltip-position="top"
        [show-delay]="0"
      >
        <svg
          class="size-4"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          aria-hidden="true"
        >
          <circle cx="8" cy="8" r="6.25" />
          <path d="M8 7.25v4" stroke-linecap="round" />
          <circle cx="8" cy="5.25" r="0.75" fill="currentColor" stroke="none" />
        </svg>
      </div>
    </div>

    <ng-template #avatarTooltip>
      <div class="flex flex-col gap-0 py-1">
        <p class="font-semibold">Jane Doe</p>
        <p class="text-xs text-muted">jane&#64;example.com</p>
      </div>
    </ng-template>

    <ng-template #statusTooltip>
      <div class="flex items-center gap-1.5">
        <span class="relative flex size-2">
          <span
            class="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75"
          ></span>
          <span class="relative inline-flex size-2 rounded-full bg-success"></span>
        </span>
        <p>Jane is currently online</p>
      </div>
    </ng-template>

    <ng-template #helpTooltip>
      <div class="max-w-xs px-1 py-1.5">
        <p class="mb-1 font-semibold">Help Information</p>
        <p class="text-sm text-muted">
          This is a helpful tooltip with more detailed information about this feature.
        </p>
      </div>
    </ng-template>`;

export const DEMO_NAME = 'tooltip-custom-trigger';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvAvatarImports, AvChipImports, AvTooltipDirective } from '@avesra/angular';

@Component({
  selector: 'app-tooltip-custom-trigger-demo',
  imports: [AvAvatarImports, AvChipImports, AvTooltipDirective],
  template: \`${DEMO_TEMPLATE}\`,
})
export class TooltipCustomTriggerDemo {
  readonly profileAvatarUrl = '/images/avatars/avatar-man-glasses-salt-pepper.png';
}`;

@Component({
  selector: 'app-tooltip-custom-trigger-demo',
  imports: [AvAvatarImports, AvChipImports, AvTooltipDirective],
  template: DEMO_TEMPLATE,
})
export class TooltipCustomTriggerDemo {
  readonly profileAvatarUrl = '/images/avatars/avatar-man-glasses-salt-pepper.png';
}
