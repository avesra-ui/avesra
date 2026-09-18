import { Component } from '@angular/core';

@Component({
  selector: '[av-switch-control]',
  template: `<ng-content />`,
  host: {
    class: 'av-switch__control',
    'data-slot': 'switch-control',
  },
})
export class AvSwitchControlComponent {}
