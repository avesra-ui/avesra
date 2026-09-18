import { Component } from '@angular/core';

@Component({
  selector: '[av-toggle-button-group-separator]',
  template: '',
  host: {
    class: 'av-toggle-button-group__separator',
    'aria-hidden': 'true',
    'data-slot': 'toggle-button-group-separator',
  },
})
export class AvToggleButtonGroupSeparatorComponent {}
