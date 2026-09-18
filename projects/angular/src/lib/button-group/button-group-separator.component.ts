import { Component } from '@angular/core';

@Component({
  selector: '[av-button-group-separator]',
  template: '',
  host: {
    class: 'av-button-group__separator',
    'aria-hidden': 'true',
    'data-slot': 'button-group-separator',
  },
})
export class AvButtonGroupSeparatorComponent {}
