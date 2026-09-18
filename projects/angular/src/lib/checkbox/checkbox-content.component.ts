import { Component } from '@angular/core';

@Component({
  selector: '[av-checkbox-content]',
  template: `<ng-content />`,
  host: {
    class: 'av-checkbox__content',
    'data-slot': 'checkbox-content',
  },
})
export class AvCheckboxContentComponent {}
