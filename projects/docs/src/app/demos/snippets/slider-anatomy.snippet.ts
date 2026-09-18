export const SNIPPET_ID = 'slider-anatomy';
export const SNIPPET_LANG = 'html';
export const SNIPPET_SOURCE = `<div av-slider [default-value]="30">
  <label av-label>Volume</label>
  <span av-slider-output></span>
  <div av-slider-track>
    <div av-slider-fill></div>
    <div av-slider-thumb></div>
  </div>
</div>`;

export const RANGE_SNIPPET_ID = 'slider-range-anatomy';
export const RANGE_SNIPPET_LANG = 'html';
export const RANGE_SNIPPET_SOURCE = `<div av-slider [default-value]="[25, 75]">
  <label av-label>Range</label>
  <span av-slider-output></span>
  <div av-slider-track>
    <div av-slider-fill></div>
    <div av-slider-thumb [index]="0"></div>
    <div av-slider-thumb [index]="1"></div>
  </div>
</div>`;
