import { Component, computed, signal } from '@angular/core';

import { AvCheckboxGroupImports } from '@avesra/angular';

const ALL_OPTIONS = ['coding', 'design', 'writing'] as const;

const DEMO_TEMPLATE = `<div>
      <div
        av-checkbox
        name="select-all"
        [selected]="selectAllSelected()"
        [indeterminate]="selectAllIndeterminate()"
        (selectedChange)="onSelectAllChange($event)"
      >
        <span av-checkbox-control>
          <span av-checkbox-indicator></span>
        </span>
        <span av-checkbox-content>Select all</span>
      </div>
      <div class="ms-6 flex flex-col gap-2">
        <av-checkbox-group [(value)]="selected">
          <div av-checkbox value="coding">
            <span av-checkbox-control>
              <span av-checkbox-indicator></span>
            </span>
            <span av-checkbox-content>Coding</span>
          </div>
          <div av-checkbox value="design">
            <span av-checkbox-control>
              <span av-checkbox-indicator></span>
            </span>
            <span av-checkbox-content>Design</span>
          </div>
          <div av-checkbox value="writing">
            <span av-checkbox-control>
              <span av-checkbox-indicator></span>
            </span>
            <span av-checkbox-content>Writing</span>
          </div>
        </av-checkbox-group>
      </div>
    </div>`;

export const DEMO_NAME = 'checkbox-group-indeterminate';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, computed, signal } from '@angular/core';
import { AvCheckboxGroupImports } from '@avesra/angular';

@Component({
  selector: 'app-checkbox-group-indeterminate-demo',
  imports: [AvCheckboxGroupImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class CheckboxGroupIndeterminateDemo {
  readonly allOptions = ['coding', 'design', 'writing'] as const;
  readonly selected = signal<string[]>(['coding']);

  readonly selectAllSelected = computed(
    () => this.selected().length === this.allOptions.length,
  );

  readonly selectAllIndeterminate = computed(() => {
    const length = this.selected().length;
    return length > 0 && length < this.allOptions.length;
  });

  onSelectAllChange(isSelected: boolean): void {
    this.selected.set(isSelected ? [...this.allOptions] : []);
  }
}`;

@Component({
  selector: 'app-checkbox-group-indeterminate-demo',
  imports: [AvCheckboxGroupImports],
  template: DEMO_TEMPLATE,
})
export class CheckboxGroupIndeterminateDemo {
  readonly allOptions = ALL_OPTIONS;
  readonly selected = signal<string[]>(['coding']);

  readonly selectAllSelected = computed(
    () => this.selected().length === this.allOptions.length,
  );

  readonly selectAllIndeterminate = computed(() => {
    const length = this.selected().length;
    return length > 0 && length < this.allOptions.length;
  });

  onSelectAllChange(isSelected: boolean): void {
    this.selected.set(isSelected ? [...this.allOptions] : []);
  }
}
