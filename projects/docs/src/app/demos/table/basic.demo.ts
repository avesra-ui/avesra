import { Component } from '@angular/core';
import { AvTableImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="w-full max-w-3xl">
  <div av-table>
    <div av-table-scroll-container>
      <table av-table-content aria-label="Team members" class="min-w-[600px]">
        <thead av-table-header>
          <tr>
            <th av-table-column>Name</th>
            <th av-table-column>Role</th>
            <th av-table-column>Status</th>
            <th av-table-column>Email</th>
          </tr>
        </thead>
        <tbody av-table-body>
          <tr av-table-row>
            <td av-table-cell>Kate Moore</td>
            <td av-table-cell>CEO</td>
            <td av-table-cell>Active</td>
            <td av-table-cell>kate&#64;acme.com</td>
          </tr>
          <tr av-table-row>
            <td av-table-cell>John Smith</td>
            <td av-table-cell>CTO</td>
            <td av-table-cell>Active</td>
            <td av-table-cell>john&#64;acme.com</td>
          </tr>
          <tr av-table-row>
            <td av-table-cell>Sara Johnson</td>
            <td av-table-cell>CMO</td>
            <td av-table-cell>On Leave</td>
            <td av-table-cell>sara&#64;acme.com</td>
          </tr>
          <tr av-table-row>
            <td av-table-cell>Michael Brown</td>
            <td av-table-cell>CFO</td>
            <td av-table-cell>Active</td>
            <td av-table-cell>michael&#64;acme.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>`;

export const DEMO_NAME = 'table-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvTableImports } from '@avesra/angular';

@Component({
  selector: 'app-table-basic-demo',
  imports: [AvTableImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class TableBasicDemo {}`;

@Component({
  selector: 'app-table-basic-demo',
  imports: [AvTableImports],
  template: DEMO_TEMPLATE,
})
export class TableBasicDemo {}
