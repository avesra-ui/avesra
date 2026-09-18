export const SNIPPET_ID = 'input-group-anatomy';
export const SNIPPET_LANG = 'html';
export const SNIPPET_SOURCE = `<label av-label for="field">Label</label>
<div av-input-group>
  <div av-input-group-prefix><!-- icon or text --></div>
  <input av-input-group-input id="field" type="text" />
  <!-- Or use textarea[av-input-group-textarea] for multiline -->
  <div av-input-group-suffix><!-- icon, text, or actions --></div>
</div>
<p av-description>Helper text</p>
<p av-field-error [visible]="false">Error message</p>`;
