import { Component } from '@angular/core';

@Component({
  selector: '[av-switch-content]',
  template: `<ng-content />`,
  host: {
    class: 'av-switch__content',
    'data-slot': 'switch-content',
  },
})
export class AvSwitchContentComponent {}
