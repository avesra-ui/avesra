import { Component, signal } from '@angular/core';

import {
  AvButtonComponent,
  AvCardComponent,
  AvCardContentComponent,
  AvCardDescriptionComponent,
  AvCardFooterComponent,
  AvCardHeaderComponent,
  AvCardTitleComponent,
  AvMeterComponent,
  AvMeterFillComponent,
  AvMeterTrackComponent,
  AvSliderComponent,
  AvSliderFillComponent,
  AvSliderThumbComponent,
  AvSliderTrackComponent,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-home-finances-panel',
  imports: [
    AvButtonComponent,
    AvCardComponent,
    AvCardContentComponent,
    AvCardDescriptionComponent,
    AvCardFooterComponent,
    AvCardHeaderComponent,
    AvCardTitleComponent,
    AvMeterComponent,
    AvMeterFillComponent,
    AvMeterTrackComponent,
    AvSliderComponent,
    AvSliderFillComponent,
    AvSliderThumbComponent,
    AvSliderTrackComponent,
    AvLabelComponent,
  ],
  template: `
    <div class="grid gap-3 md:grid-cols-2">
      <div av-card>
        <div av-card-header>
          <h3 av-card-title>Balance</h3>
          <p av-card-description>Operating account</p>
        </div>
        <div av-card-content>
          <p class="text-3xl font-semibold tracking-tight">$48,920</p>
          <p class="mt-1 text-sm text-muted">Available to spend</p>
        </div>
        <div av-card-footer class="gap-2">
          <button av-button size="sm">Transfer</button>
          <button av-button size="sm" variant="secondary">Request</button>
        </div>
      </div>

      <div av-card>
        <div av-card-header>
          <h3 av-card-title>Budget used</h3>
          <p av-card-description>Marketing · July</p>
        </div>
        <div av-card-content class="flex flex-col gap-3">
          <div av-meter [value]="budget()" aria-label="Budget">
            <div av-meter-track>
              <div av-meter-fill></div>
            </div>
          </div>
          <div av-slider [(value)]="budget" [default-value]="64" [max]="100">
            <label av-label>Adjust forecast</label>
            <div av-slider-track>
              <div av-slider-fill></div>
              <div av-slider-thumb></div>
            </div>
          </div>
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
export class HomeFinancesPanelComponent {
  readonly budget = signal(64);
}
