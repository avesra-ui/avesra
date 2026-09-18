export const SNIPPET_ID = 'table-anatomy';
export const SNIPPET_LANG = 'html';
export const SNIPPET_SOURCE = `<div av-table variant="primary">
  <div av-table-scroll-container>
    <table av-table-content aria-label="Example table">
      <thead av-table-header>
        <tr>
          <th av-table-column allows-sorting>Name</th>
          <th av-table-column>Role</th>
        </tr>
      </thead>
      <tbody av-table-body>
        <tr av-table-row>
          <td av-table-cell>Kate Moore</td>
          <td av-table-cell>CEO</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div av-table-footer><!-- Optional footer content --></div>
</div>

<!-- Optional parts -->
<!-- <div av-table-resizable-container>…</div> -->
<!-- <div av-table-column-resizer></div> -->
<!-- <tr av-table-load-more><td><div av-table-load-more-content>…</div></td></tr> -->`;
