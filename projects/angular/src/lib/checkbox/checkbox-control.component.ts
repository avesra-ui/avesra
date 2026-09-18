import { Component } from '@angular/core';

@Component({
  selector: '[av-checkbox-control]',
  template: `<ng-content />`,
  host: {
    class: 'av-checkbox__control',
    'data-slot': 'checkbox-control',
  },
})
export class AvCheckboxControlComponent {}
