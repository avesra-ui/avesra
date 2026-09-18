import { Component } from '@angular/core';

import {
  AvAvatarComponent,
  AvAvatarFallbackComponent,
  AvBadgeComponent,
  AvButtonComponent,
  AvCardComponent,
  AvCardContentComponent,
  AvCardDescriptionComponent,
  AvCardHeaderComponent,
  AvCardTitleComponent,
  AvInputComponent,
  AvLabelComponent,
  AvSeparatorComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-home-mail-panel',
  imports: [
    AvAvatarComponent,
    AvAvatarFallbackComponent,
    AvBadgeComponent,
    AvButtonComponent,
    AvCardComponent,
    AvCardContentComponent,
    AvCardDescriptionComponent,
    AvCardHeaderComponent,
    AvCardTitleComponent,
    AvInputComponent,
    AvLabelComponent,
    AvSeparatorComponent,
  ],
  template: `
    <div class="grid gap-3 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
      <div av-card>
        <div av-card-header class="flex-row items-center justify-between gap-2">
          <div>
            <h3 av-card-title>Inbox</h3>
            <p av-card-description>3 unread</p>
          </div>
          <span av-badge label="Mail" color="accent" size="sm"></span>
        </div>
        <div av-card-content class="flex flex-col gap-3 p-0">
          @for (item of messages; track item.id) {
            <button
              type="button"
              class="flex w-full items-start gap-3 px-4 py-3 text-left hover:bg-default"
            >
              <span av-avatar size="sm">
                <span av-avatar-fallback>{{ item.initials }}</span>
              </span>
              <span class="min-w-0 flex-1">
                <span class="flex items-center justify-between gap-2">
                  <span class="truncate text-sm font-medium">{{ item.from }}</span>
                  <span class="shrink-0 text-xs text-muted">{{ item.time }}</span>
                </span>
                <span class="block truncate text-sm text-muted">{{ item.subject }}</span>
              </span>
            </button>
            @if (!$last) {
              <div av-separator></div>
            }
          }
        </div>
      </div>

      <div av-card>
        <div av-card-header>
          <h3 av-card-title>Compose</h3>
          <p av-card-description>Quick reply</p>
        </div>
        <div av-card-content class="flex flex-col gap-3">
          <div class="flex flex-col gap-1">
            <label av-label for="mail-to">To</label>
            <input av-input id="mail-to" full-width value="team@avesra.dev" />
          </div>
          <div class="flex flex-col gap-1">
            <label av-label for="mail-subject">Subject</label>
            <input av-input id="mail-subject" full-width placeholder="Subject" />
          </div>
          <button av-button>Send</button>
        </div>
      </div>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class HomeMailPanelComponent {
  readonly messages = [
    { id: 1, from: 'Nora Chen', initials: 'NC', subject: 'Design review notes', time: '2m' },
    { id: 2, from: 'Ops Bot', initials: 'OB', subject: 'Deploy succeeded', time: '1h' },
    { id: 3, from: 'Sam Rivera', initials: 'SR', subject: 'Q3 roadmap draft', time: 'Yesterday' },
  ];
}
