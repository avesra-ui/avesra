import { Component } from '@angular/core';

@Component({
  selector: 'av-popover-arrow',
  template: `
    <svg
      data-slot="popover-overlay-arrow"
      fill="none"
      height="12"
      viewBox="0 0 12 12"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0C5.48483 8 6.5 8 12 0Z" />
    </svg>
  `,
  host: {
    'data-slot': 'popover-arrow',
  },
})
export class AvPopoverArrowComponent {}
