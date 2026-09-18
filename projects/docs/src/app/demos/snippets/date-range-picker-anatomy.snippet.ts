export const SNIPPET_ID = 'date-range-picker-anatomy';
export const SNIPPET_LANG = 'html';
export const SNIPPET_SOURCE = `<div av-date-range-picker start-name="startDate" end-name="endDate">
  <label av-label></label>
  <div av-date-input-group full-width>
    <div av-date-input-group-input slot="start"></div>
    <span av-date-range-picker-range-separator></span>
    <div av-date-input-group-input slot="end"></div>
    <div av-date-input-group-suffix>
      <button type="button" av-date-range-picker-trigger>
        <span av-date-range-picker-trigger-indicator></span>
      </button>
    </div>
  </div>
  <av-date-range-picker-popover>
    <div av-range-calendar aria-label="Choose dates">
      <div av-range-calendar-header>
        <button av-range-calendar-year-picker-trigger>
          <span av-range-calendar-year-picker-trigger-heading></span>
          <span av-range-calendar-year-picker-trigger-indicator></span>
        </button>
        <button av-range-calendar-nav-button slot="previous"></button>
        <button av-range-calendar-nav-button slot="next"></button>
      </div>
      <div av-range-calendar-grid>
        <div av-range-calendar-grid-header></div>
        <div av-range-calendar-grid-body></div>
      </div>
      <div av-range-calendar-year-picker-grid></div>
    </div>
  </av-date-range-picker-popover>
</div>`;
