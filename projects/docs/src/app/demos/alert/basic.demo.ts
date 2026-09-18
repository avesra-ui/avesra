import { Component } from '@angular/core';

import {
  AvAlertImports,
  AvButtonComponent,
  AvCloseButtonComponent,
  AvSpinnerComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="grid w-full max-w-xl gap-4">
      <!-- Default - General information -->
      <div av-alert>
        <div av-alert-indicator></div>
        <div av-alert-content>
          <p av-alert-title>New features available</p>
          <span av-alert-description>
            Check out our latest updates including dark mode support and improved accessibility
            features.
          </span>
        </div>
      </div>

      <!-- Accent - Important information with action -->
      <div av-alert status="accent">
        <div av-alert-indicator></div>
        <div av-alert-content>
          <p av-alert-title>Update available</p>
          <span av-alert-description>
            A new version of the application is available. Please refresh to get the latest features
            and bug fixes.
          </span>
          <button class="mt-2 sm:hidden" av-button size="sm" variant="primary">Refresh</button>
        </div>
        <button class="hidden sm:block" av-button size="sm" variant="primary">Refresh</button>
      </div>

      <!-- Danger - Error with detailed steps -->
      <div av-alert status="danger">
        <div av-alert-indicator></div>
        <div av-alert-content>
          <p av-alert-title>Unable to connect to server</p>
          <span av-alert-description>
            We're experiencing connection issues. Please try the following:
            <ul class="mt-2 list-inside list-disc space-y-1 text-sm">
              <li>Check your internet connection</li>
              <li>Refresh the page</li>
              <li>Clear your browser cache</li>
            </ul>
          </span>
          <button class="mt-2 sm:hidden" av-button size="sm" variant="danger">Retry</button>
        </div>
        <button class="hidden sm:block" av-button size="sm" variant="danger">Retry</button>
      </div>

      <!-- Without description -->
      <div av-alert status="success">
        <div av-alert-indicator></div>
        <div av-alert-content>
          <p av-alert-title>Profile updated successfully</p>
        </div>
        <button av-close-button aria-label="Dismiss"></button>
      </div>

      <!-- Custom indicator - Loading state -->
      <div av-alert status="accent">
        <div av-alert-indicator>
          <span av-spinner size="sm"></span>
        </div>
        <div av-alert-content>
          <p av-alert-title>Processing your request</p>
          <span av-alert-description>
            Please wait while we sync your data. This may take a few moments.
          </span>
        </div>
      </div>

      <!-- Without close button -->
      <div av-alert status="warning">
        <div av-alert-indicator></div>
        <div av-alert-content>
          <p av-alert-title>Scheduled maintenance</p>
          <span av-alert-description>
            Our services will be unavailable on Sunday, March 15th from 2:00 AM to 6:00 AM UTC for
            scheduled maintenance.
          </span>
        </div>
      </div>
    </div>`;

export const DEMO_NAME = 'alert-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvAlertImports,
  AvButtonComponent,
  AvCloseButtonComponent,
  AvSpinnerComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-alert-basic-demo',
  imports: [
    AvAlertImports,
    AvButtonComponent,
    AvCloseButtonComponent,
    AvSpinnerComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class AlertBasicDemo {}`;

@Component({
  selector: 'app-alert-basic-demo',
  imports: [
    AvAlertImports,
    AvButtonComponent,
    AvCloseButtonComponent,
    AvSpinnerComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class AlertBasicDemo {}
