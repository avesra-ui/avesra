export const SNIPPET_ID = 'checkbox-group-anatomy';
export const SNIPPET_LANG = 'html';
export const SNIPPET_SOURCE = `<av-checkbox-group name="interests">
  <label av-label></label>
  <p av-description></p> <!-- Optional -->
  <div av-checkbox value="option1">
    <span av-checkbox-control>
      <span av-checkbox-indicator></span>
    </span>
    <span av-checkbox-content>
      Label <!-- plain text — the clickable label -->
    </span>
    <p av-description></p> <!-- Optional per-checkbox help text -->
  </div>
  <p av-error-message></p> <!-- Optional -->
</av-checkbox-group>`;
