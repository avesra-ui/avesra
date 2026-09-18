import { Component } from '@angular/core';
import {
  AvChipImports,
  AvTableImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="w-full max-w-3xl">
  <div av-table>
    <div av-table-resizable-container>
      <table av-table-content aria-label="Table with resizable columns" class="min-w-[700px]">
        <thead av-table-header>
          <tr>
            <th av-table-column class="relative min-w-40">
              Name
              <div av-table-column-resizer></div>
            </th>
            <th av-table-column class="relative min-w-52">
              Role
              <div av-table-column-resizer></div>
            </th>
            <th av-table-column class="relative min-w-28">
              Status
              <div av-table-column-resizer></div>
            </th>
            <th av-table-column class="min-w-48">Email</th>
          </tr>
        </thead>
        <tbody av-table-body>
          <tr av-table-row>
            <td av-table-cell>Kate Moore</td>
            <td av-table-cell>CEO</td>
            <td av-table-cell>
              <span av-chip color="success" size="sm" variant="soft">
                <span av-chip-label>Active</span>
              </span>
            </td>
            <td av-table-cell>kate&#64;acme.com</td>
          </tr>
          <tr av-table-row>
            <td av-table-cell>John Smith</td>
            <td av-table-cell>CTO</td>
            <td av-table-cell>
              <span av-chip color="success" size="sm" variant="soft">
                <span av-chip-label>Active</span>
              </span>
            </td>
            <td av-table-cell>john&#64;acme.com</td>
          </tr>
          <tr av-table-row>
            <td av-table-cell>Sara Johnson</td>
            <td av-table-cell>CMO</td>
            <td av-table-cell>
              <span av-chip color="warning" size="sm" variant="soft">
                <span av-chip-label>On Leave</span>
              </span>
            </td>
            <td av-table-cell>sara&#64;acme.com</td>
          </tr>
          <tr av-table-row>
            <td av-table-cell>Michael Brown</td>
            <td av-table-cell>CFO</td>
            <td av-table-cell>
              <span av-chip color="success" size="sm" variant="soft">
                <span av-chip-label>Active</span>
              </span>
            </td>
            <td av-table-cell>michael&#64;acme.com</td>
          </tr>
          <tr av-table-row>
            <td av-table-cell>Emily Davis</td>
            <td av-table-cell>Product Manager</td>
            <td av-table-cell>
              <span av-chip color="danger" size="sm" variant="soft">
                <span av-chip-label>Inactive</span>
              </span>
            </td>
            <td av-table-cell>emily&#64;acme.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>`;

export const DEMO_NAME = 'table-column-resizing';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvChipImports,
  AvTableImports,
} from '@avesra/angular';

@Component({
  selector: 'app-table-column-resizing-demo',
  imports: [
    AvTableImports,
    AvChipImports,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class TableColumnResizingDemo {}`;

@Component({
  selector: 'app-table-column-resizing-demo',
  imports: [
    AvTableImports,
    AvChipImports,
  ],
  template: DEMO_TEMPLATE,
})
export class TableColumnResizingDemo {}
