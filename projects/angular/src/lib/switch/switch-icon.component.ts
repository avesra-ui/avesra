import { Component } from '@angular/core';

@Component({
  selector: '[av-switch-icon]',
  template: `<ng-content />`,
  host: {
    class: 'av-switch__icon',
    'data-slot': 'switch-icon',
  },
})
export class AvSwitchIconComponent {}
