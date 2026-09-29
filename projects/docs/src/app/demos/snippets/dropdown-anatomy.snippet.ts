export const SNIPPET_ID = 'dropdown-anatomy';
export const SNIPPET_LANG = 'html';
export const SNIPPET_SOURCE = `<av-dropdown>
  <button av-button av-dropdown-trigger></button>
  <ng-template avDropdownContent>
    <div av-dropdown-popover>
      <div av-dropdown-menu>
      <div av-dropdown-menu-item>
        <label av-label></label>
        <p av-description></p>
        <kbd av-kbd></kbd>
        <span av-dropdown-menu-item-indicator></span>
      </div>
      <div av-separator></div>
      <div av-dropdown-menu-section>
        <p></p>
        <div av-dropdown-menu-item></div>
      </div>
      </div>
    </div>
  </ng-template>
</av-dropdown>`;
