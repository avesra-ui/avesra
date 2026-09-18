import { Component } from '@angular/core';

import {
  AvAlertDialogImports,
  AvButtonComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const KINEMATIC_BACKDROP = [
  'data-[entering]:duration-400',
  'data-[entering]:ease-[cubic-bezier(0.16,1,0.3,1)]',
  'data-[exiting]:duration-200',
  'data-[exiting]:ease-[cubic-bezier(0.7,0,0.84,0)]',
].join(' ');

const KINEMATIC_CONTAINER = [
  'data-[entering]:animate-in',
  'data-[entering]:fade-in-0',
  'data-[entering]:zoom-in-95',
  'data-[entering]:duration-400',
  'data-[entering]:ease-[cubic-bezier(0.16,1,0.3,1)]',
  'data-[exiting]:animate-out',
  'data-[exiting]:fade-out-0',
  'data-[exiting]:zoom-out-95',
  'data-[exiting]:duration-200',
  'data-[exiting]:ease-[cubic-bezier(0.7,0,0.84,0)]',
].join(' ');

const FLUID_BACKDROP = [
  'data-[entering]:duration-500',
  'data-[entering]:ease-[cubic-bezier(0.25,1,0.5,1)]',
  'data-[exiting]:duration-200',
  'data-[exiting]:ease-[cubic-bezier(0.5,0,0.75,0)]',
].join(' ');

const FLUID_CONTAINER = [
  'data-[entering]:animate-in',
  'data-[entering]:fade-in-0',
  'data-[entering]:slide-in-from-bottom-4',
  'data-[entering]:duration-500',
  'data-[entering]:ease-[cubic-bezier(0.25,1,0.5,1)]',
  'data-[exiting]:animate-out',
  'data-[exiting]:fade-out-0',
  'data-[exiting]:slide-out-to-bottom-2',
  'data-[exiting]:duration-200',
  'data-[exiting]:ease-[cubic-bezier(0.5,0,0.75,0)]',
].join(' ');

const DEMO_TEMPLATE = `<div class="flex flex-wrap gap-4">
      <av-alert-dialog
        [backdrop-class]="kinematicBackdrop"
        [container-class]="kinematicContainer"
      >
        <button av-button variant="secondary" av-alert-dialog-trigger>Kinematic Scale</button>
        <ng-template avAlertDialogContent>
          <div av-alert-dialog-dialog class="sm:max-w-[400px]">
            <av-alert-dialog-close-trigger />
            <div av-alert-dialog-header>
              <div av-alert-dialog-icon status="accent">
                <app-icon icon="solar:stars-linear" size="20" />
              </div>
              <h2 av-alert-dialog-heading>Kinematic Scale Animation</h2>
            </div>
            <div av-alert-dialog-body>
              <p class="mt-1">
                Physics-based elastic scaling. Simulates a high-damping spring system with fast
                transient response and prolonged settling time. Ideal for Alert Dialogs and Modals.
              </p>
            </div>
            <div av-alert-dialog-footer>
              <button av-button variant="tertiary" av-alert-dialog-close>Close</button>
              <button av-button av-alert-dialog-close>Try Again</button>
            </div>
          </div>
        </ng-template>
      </av-alert-dialog>

      <av-alert-dialog
        [backdrop-class]="fluidBackdrop"
        [container-class]="fluidContainer"
      >
        <button av-button variant="secondary" av-alert-dialog-trigger>Fluid Slide</button>
        <ng-template avAlertDialogContent>
          <div av-alert-dialog-dialog class="sm:max-w-[400px]">
            <av-alert-dialog-close-trigger />
            <div av-alert-dialog-header>
              <div av-alert-dialog-icon status="accent">
                <app-icon icon="solar:arrow-up-linear" size="20" />
              </div>
              <h2 av-alert-dialog-heading>Fluid Slide Animation</h2>
            </div>
            <div av-alert-dialog-body>
              <p class="mt-1">
                Simulates movement through a medium with fluid resistance. Eliminates mechanical
                linearity for a natural, grounded feel. Perfect for Bottom Sheets or Toasts.
              </p>
            </div>
            <div av-alert-dialog-footer>
              <button av-button variant="tertiary" av-alert-dialog-close>Close</button>
              <button av-button av-alert-dialog-close>Try Again</button>
            </div>
          </div>
        </ng-template>
      </av-alert-dialog>
    </div>`;

export const DEMO_NAME = 'alert-dialog-custom-animations';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvAlertDialogImports,
  AvButtonComponent,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const kinematicBackdrop = [
  'data-[entering]:duration-400',
  'data-[entering]:ease-[cubic-bezier(0.16,1,0.3,1)]',
  'data-[exiting]:duration-200',
  'data-[exiting]:ease-[cubic-bezier(0.7,0,0.84,0)]',
].join(' ');

const kinematicContainer = [
  'data-[entering]:animate-in',
  'data-[entering]:fade-in-0',
  'data-[entering]:zoom-in-95',
  'data-[entering]:duration-400',
  'data-[entering]:ease-[cubic-bezier(0.16,1,0.3,1)]',
  'data-[exiting]:animate-out',
  'data-[exiting]:fade-out-0',
  'data-[exiting]:zoom-out-95',
  'data-[exiting]:duration-200',
  'data-[exiting]:ease-[cubic-bezier(0.7,0,0.84,0)]',
].join(' ');

const fluidBackdrop = [
  'data-[entering]:duration-500',
  'data-[entering]:ease-[cubic-bezier(0.25,1,0.5,1)]',
  'data-[exiting]:duration-200',
  'data-[exiting]:ease-[cubic-bezier(0.5,0,0.75,0)]',
].join(' ');

const fluidContainer = [
  'data-[entering]:animate-in',
  'data-[entering]:fade-in-0',
  'data-[entering]:slide-in-from-bottom-4',
  'data-[entering]:duration-500',
  'data-[entering]:ease-[cubic-bezier(0.25,1,0.5,1)]',
  'data-[exiting]:animate-out',
  'data-[exiting]:fade-out-0',
  'data-[exiting]:slide-out-to-bottom-2',
  'data-[exiting]:duration-200',
  'data-[exiting]:ease-[cubic-bezier(0.5,0,0.75,0)]',
].join(' ');

@Component({
  selector: 'app-alert-dialog-custom-animations-demo',
  imports: [
    AppIconComponent,
    AvAlertDialogImports,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class AlertDialogCustomAnimationsDemo {
  readonly kinematicBackdrop = kinematicBackdrop;
  readonly kinematicContainer = kinematicContainer;
  readonly fluidBackdrop = fluidBackdrop;
  readonly fluidContainer = fluidContainer;
}`;

@Component({
  selector: 'app-alert-dialog-custom-animations-demo',
  imports: [
    AppIconComponent,
    AvAlertDialogImports,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class AlertDialogCustomAnimationsDemo {
  readonly kinematicBackdrop = KINEMATIC_BACKDROP;
  readonly kinematicContainer = KINEMATIC_CONTAINER;
  readonly fluidBackdrop = FLUID_BACKDROP;
  readonly fluidContainer = FLUID_CONTAINER;
}
