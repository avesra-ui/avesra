export const SNIPPET_ID = 'pagination-anatomy';
export const SNIPPET_LANG = 'html';
export const SNIPPET_SOURCE = `<av-pagination>
  <div av-pagination-summary>Showing 1-10 of 100 results</div>
  <ul av-pagination-content>
    <li av-pagination-item>
      <button av-pagination-prev>
        <span av-pagination-prev-icon></span>
        <span>Previous</span>
      </button>
    </li>
    <li av-pagination-item>
      <button av-pagination-link [active]="true">1</button>
    </li>
    <li av-pagination-item>
      <span av-pagination-ellipsis></span>
    </li>
    <li av-pagination-item>
      <button av-pagination-link>10</button>
    </li>
    <li av-pagination-item>
      <button av-pagination-next>
        <span>Next</span>
        <span av-pagination-next-icon></span>
      </button>
    </li>
  </ul>
</av-pagination>`;
