import { Component } from '@angular/core';

import {
  AvCheckboxGroupImports,
  AvDescriptionComponent,
  AvLabelComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

interface CheckboxGroupAddOn {
  description: string;
  icon: string;
  title: string;
  value: string;
}

const ADD_ONS: CheckboxGroupAddOn[] = [
  {
    description: 'Receive updates via email',
    icon: 'solar:letter-linear',
    title: 'Email Notifications',
    value: 'email',
  },
  {
    description: 'Get instant SMS notifications',
    icon: 'solar:chat-round-line-linear',
    title: 'SMS Alerts',
    value: 'sms',
  },
  {
    description: 'Browser and mobile push alerts',
    icon: 'solar:bell-linear',
    title: 'Push Notifications',
    value: 'push',
  },
];

const DEMO_TEMPLATE = `<div class="flex w-full flex-col items-center gap-10 px-4 py-8">
      <section class="flex w-full min-w-[320px] flex-col gap-4">
        <av-checkbox-group name="notification-preferences">
          <label av-label>Notification preferences</label>
          <p av-description>Choose how you want to receive updates</p>
          <div class="flex flex-col gap-2">
            @for (addon of addOns; track addon.value) {
              <div av-checkbox [value]="addon.value" variant="secondary" class="group w-full">
                <div
                  class="relative flex w-full flex-row items-start justify-start gap-4 rounded-3xl bg-surface px-5 py-4 transition-all group-data-[selected=true]:bg-accent/10"
                >
                  <span
                    av-checkbox-control
                    class="absolute top-3 end-4 size-5 rounded-full before:rounded-full"
                  >
                    <span av-checkbox-indicator></span>
                  </span>
                  <app-icon
                    [icon]="addon.icon"
                    size="20"
                    class="size-5 text-accent-soft-foreground"
                  />
                  <span av-checkbox-content class="flex flex-col gap-1">
                    <span>{{ addon.title }}</span>
                    <p av-description>{{ addon.description }}</p>
                  </span>
                </div>
              </div>
            }
          </div>
        </av-checkbox-group>
      </section>
    </div>`;

export const DEMO_NAME = 'checkbox-group-features-and-addons';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvCheckboxGroupImports,
  AvDescriptionComponent,
  AvLabelComponent,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-checkbox-group-features-and-addons-demo',
  imports: [
    AvCheckboxGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AppIconComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class CheckboxGroupFeaturesAndAddOnsDemo {
  readonly addOns = [
    {
      description: 'Receive updates via email',
      icon: 'solar:letter-linear',
      title: 'Email Notifications',
      value: 'email',
    },
    {
      description: 'Get instant SMS notifications',
      icon: 'solar:chat-round-line-linear',
      title: 'SMS Alerts',
      value: 'sms',
    },
    {
      description: 'Browser and mobile push alerts',
      icon: 'solar:bell-linear',
      title: 'Push Notifications',
      value: 'push',
    },
  ];
}`;

@Component({
  selector: 'app-checkbox-group-features-and-addons-demo',
  imports: [
    AvCheckboxGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AppIconComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class CheckboxGroupFeaturesAndAddOnsDemo {
  readonly addOns = ADD_ONS;
}
