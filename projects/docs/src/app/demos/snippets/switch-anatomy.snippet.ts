export const SNIPPET_ID = 'switch-anatomy';
export const SNIPPET_LANG = 'html';
export const SNIPPET_SOURCE = `<!-- Single switch -->
<div av-switch>
  <span av-switch-control>
    <span av-switch-thumb>
      <!-- Optional icon -->
      <span av-switch-icon></span>
    </span>
  </span>
  <span av-switch-content>
    Enable notifications
    <!-- Optional — field-level help text -->
    <p av-description></p>
  </span>
</div>

<!-- Grouped switches -->
<av-switch-group>
  <div av-switch>
    <span av-switch-control>
      <span av-switch-thumb></span>
    </span>
    <span av-switch-content>Option 1</span>
  </div>
  <div av-switch>
    <span av-switch-control>
      <span av-switch-thumb></span>
    </span>
    <span av-switch-content>Option 2</span>
  </div>
</av-switch-group>`;
