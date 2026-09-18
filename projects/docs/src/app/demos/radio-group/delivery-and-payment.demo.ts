import { Component } from '@angular/core';

import {
  AvDescriptionComponent,
  AvLabelComponent,
  AvRadioGroupImports,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

interface DeliveryOption {
  description: string;
  price: string;
  title: string;
  value: string;
}

interface PaymentOption {
  description: string;
  icon: string;
  title: string;
  value: string;
}

const DELIVERY_OPTIONS: DeliveryOption[] = [
  {
    description: '4-10 business days',
    price: '$5.00',
    title: 'Standard',
    value: 'standard',
  },
  {
    description: '2-5 business days',
    price: '$16.00',
    title: 'Express',
    value: 'express',
  },
  {
    description: '1 business day',
    price: '$25.00',
    title: 'Super Fast',
    value: 'super-fast',
  },
];

const PAYMENT_OPTIONS: PaymentOption[] = [
  {
    description: 'Exp. on 01/2026',
    icon: 'solar:card-linear',
    title: '**** 8304',
    value: 'mastercard',
  },
  {
    description: 'Exp. on 01/2026',
    icon: 'solar:card-2-linear',
    title: '**** 0123',
    value: 'visa',
  },
  {
    description: 'Pay with PayPal',
    icon: 'solar:wallet-money-linear',
    title: 'PayPal',
    value: 'paypal',
  },
];

const DEMO_TEMPLATE = `<div class="flex w-full flex-col items-center gap-10 px-4 py-4">
      <section class="flex w-full max-w-lg flex-col gap-4">
        <av-radio-group class="gap-3" default-value="express" name="delivery" variant="secondary">
          <label av-label>Delivery method</label>
          <div class="grid items-stretch gap-4 md:grid-cols-3">
            @for (option of deliveryOptions; track option.value) {
              <div av-radio [value]="option.value" class="group mt-0 h-full w-full items-stretch">
                <span
                  av-radio-content
                  class="relative flex h-full w-full flex-col gap-6 rounded-xl border border-transparent bg-surface px-5 py-4 pe-12 transition-all group-data-[selected=true]:border-accent group-data-[selected=true]:bg-accent/10"
                >
                  <span av-radio-control class="absolute top-3 end-4 mt-0 size-5">
                    <span av-radio-indicator></span>
                  </span>
                  <div class="flex flex-col gap-1">
                    <span>{{ option.title }}</span>
                    <p av-description>{{ option.description }}</p>
                  </div>
                  <span class="mt-auto text-sm font-semibold">{{ option.price }}</span>
                </span>
              </div>
            }
          </div>
        </av-radio-group>
      </section>
      <section class="flex w-full max-w-lg flex-col gap-4">
        <av-radio-group class="gap-3" default-value="visa" name="payment" variant="secondary">
          <label av-label>Payment method</label>
          <div class="grid items-stretch gap-4 md:grid-cols-2">
            @for (option of paymentOptions; track option.value) {
              <div av-radio [value]="option.value" class="group mt-0 h-full w-full items-stretch">
                <span
                  av-radio-content
                  class="relative flex h-full w-full flex-row items-start justify-start gap-4 rounded-xl border border-transparent bg-surface px-5 py-4 pe-12 transition-all group-data-[selected=true]:border-accent group-data-[selected=true]:bg-accent/10"
                >
                  <span av-radio-control class="absolute top-3 end-4 mt-0 size-5">
                    <span av-radio-indicator></span>
                  </span>
                  <app-icon
                    [icon]="option.icon"
                    size="24"
                    class="size-6 shrink-0 text-accent-soft-foreground"
                  />
                  <div class="flex min-w-0 flex-col gap-1">
                    <span>{{ option.title }}</span>
                    <p av-description>{{ option.description }}</p>
                  </div>
                </span>
              </div>
            }
          </div>
        </av-radio-group>
      </section>
    </div>`;

export const DEMO_NAME = 'radio-group-delivery-and-payment';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvDescriptionComponent,
  AvLabelComponent,
  AvRadioGroupImports,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-radio-group-delivery-and-payment-demo',
  imports: [
    AvRadioGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AppIconComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class RadioGroupDeliveryAndPaymentDemo {
  readonly deliveryOptions = [
    {
      description: '4-10 business days',
      price: '$5.00',
      title: 'Standard',
      value: 'standard',
    },
    {
      description: '2-5 business days',
      price: '$16.00',
      title: 'Express',
      value: 'express',
    },
    {
      description: '1 business day',
      price: '$25.00',
      title: 'Super Fast',
      value: 'super-fast',
    },
  ];

  readonly paymentOptions = [
    {
      description: 'Exp. on 01/2026',
      icon: 'solar:card-linear',
      title: '**** 8304',
      value: 'mastercard',
    },
    {
      description: 'Exp. on 01/2026',
      icon: 'solar:card-2-linear',
      title: '**** 0123',
      value: 'visa',
    },
    {
      description: 'Pay with PayPal',
      icon: 'solar:wallet-money-linear',
      title: 'PayPal',
      value: 'paypal',
    },
  ];
}`;

@Component({
  selector: 'app-radio-group-delivery-and-payment-demo',
  imports: [
    AvRadioGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AppIconComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class RadioGroupDeliveryAndPaymentDemo {
  readonly deliveryOptions = DELIVERY_OPTIONS;
  readonly paymentOptions = PAYMENT_OPTIONS;
}
