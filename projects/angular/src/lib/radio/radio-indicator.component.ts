import { Component } from '@angular/core';

@Component({
  selector: '[av-radio-indicator]',
  template: `<ng-content />`,
  host: {
    class: 'av-radio__indicator',
    'data-slot': 'radio-indicator',
    'aria-hidden': 'true',
  },
})
export class AvRadioIndicatorComponent {}
