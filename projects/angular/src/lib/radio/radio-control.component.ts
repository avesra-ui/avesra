import { Component } from '@angular/core';

@Component({
  selector: '[av-radio-control]',
  template: `<ng-content />`,
  host: {
    class: 'av-radio__control',
    'data-slot': 'radio-control',
  },
})
export class AvRadioControlComponent {}
