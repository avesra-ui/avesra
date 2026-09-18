export const SNIPPET_ID = 'radio-group-anatomy';
export const SNIPPET_LANG = 'html';
export const SNIPPET_SOURCE = `<av-radio-group>
  <label av-label></label>
  <p av-description></p> <!-- Optional -->
  <div av-radio value="option1">
    <span av-radio-control>
      <span av-radio-indicator>
        <span>✓</span> <!-- Custom indicator (optional) -->
      </span>
    </span>
    <span av-radio-content>
      Label <!-- plain text — the clickable label -->
      <p av-description></p> <!-- Optional per-radio help text -->
    </span>
  </div>
  <p av-field-error></p> <!-- Optional — group-level validation -->
</av-radio-group>`;
