import { Component } from '@angular/core';

@Component({
  selector: '[av-switch-thumb]',
  template: `<ng-content />`,
  host: {
    class: 'av-switch__thumb',
    'data-slot': 'switch-thumb',
  },
})
export class AvSwitchThumbComponent {}
