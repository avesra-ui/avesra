import { Component } from '@angular/core';

import {
  AvAvatarComponent,
  AvAvatarFallbackComponent,
  AvButtonComponent,
  AvCardComponent,
  AvCardContentComponent,
  AvCardDescriptionComponent,
  AvCardFooterComponent,
  AvCardHeaderComponent,
  AvCardTitleComponent,
  AvInputComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-home-chat-panel',
  imports: [
    AvAvatarComponent,
    AvAvatarFallbackComponent,
    AvButtonComponent,
    AvCardComponent,
    AvCardContentComponent,
    AvCardDescriptionComponent,
    AvCardFooterComponent,
    AvCardHeaderComponent,
    AvCardTitleComponent,
    AvInputComponent,
  ],
  template: `
    <div av-card class="mx-auto max-w-xl">
      <div av-card-header>
        <h3 av-card-title>Design sync</h3>
        <p av-card-description>3 participants</p>
      </div>
      <div av-card-content class="flex flex-col gap-4">
        @for (msg of messages; track msg.id) {
          <div class="flex items-start gap-3" [class.flex-row-reverse]="msg.mine">
            <span av-avatar size="sm">
              <span av-avatar-fallback>{{ msg.initials }}</span>
            </span>
            <div
              class="max-w-[80%] rounded-2xl px-3 py-2 text-sm"
              [class]="
                msg.mine
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-default text-default-foreground'
              "
            >
              {{ msg.text }}
            </div>
          </div>
        }
      </div>
      <div av-card-footer class="gap-2">
        <input av-input class="flex-1" placeholder="Write a message" full-width />
        <button av-button>Send</button>
      </div>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class HomeChatPanelComponent {
  readonly messages = [
    { id: 1, initials: 'AV', text: 'Landing showcase looks great so far.', mine: false },
    { id: 2, initials: 'YO', text: 'Accent swatches update the live components too.', mine: true },
    { id: 3, initials: 'AV', text: 'Nice — keep the bento dense but readable.', mine: false },
  ];
}
