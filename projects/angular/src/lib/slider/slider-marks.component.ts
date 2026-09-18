import { Component } from '@angular/core';

@Component({
  selector: '[av-slider-marks]',
  template: `<ng-content />`,
  host: {
    class: 'av-slider__marks',
    'data-slot': 'slider-marks',
  },
})
export class AvSliderMarksComponent {}
