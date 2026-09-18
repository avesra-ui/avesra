export const SNIPPET_ID = 'date-picker-anatomy';
export const SNIPPET_LANG = 'html';
export const SNIPPET_SOURCE = `<div av-date-picker>
  <label av-label></label>
  <div av-date-input-group full-width>
    <div av-date-input-group-input></div>
    <div av-date-input-group-suffix>
      <button type="button" av-date-picker-trigger>
        <span av-date-picker-trigger-indicator></span>
      </button>
    </div>
  </div>
  <av-date-picker-popover>
    <div av-calendar aria-label="Choose date">
      <div av-calendar-header>
        <button av-calendar-year-picker-trigger>
          <span av-calendar-year-picker-trigger-heading></span>
          <span av-calendar-year-picker-trigger-indicator></span>
        </button>
        <button av-calendar-nav-button slot="previous"></button>
        <button av-calendar-nav-button slot="next"></button>
      </div>
      <div av-calendar-grid>
        <div av-calendar-grid-header></div>
        <div av-calendar-grid-body></div>
      </div>
      <div av-calendar-year-picker-grid></div>
    </div>
  </av-date-picker-popover>
</div>`;
