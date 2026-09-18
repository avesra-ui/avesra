import { Component } from '@angular/core';

@Component({
  selector: '[av-radio-content]',
  template: `<ng-content />`,
  host: {
    class: 'av-radio__content',
    'data-slot': 'radio-content',
  },
})
export class AvRadioContentComponent {}
