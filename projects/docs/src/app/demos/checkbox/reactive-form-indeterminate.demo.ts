import { Component, DestroyRef, inject, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { startWith } from 'rxjs';
import {
  AvCheckboxImports,
  AvDescriptionComponent,
  AvLabelComponent,
} from '@avesra/angular';

type PermissionKey = 'read' | 'write' | 'delete';

const DEMO_TEMPLATE = `<p class="text-sm text-muted">
      Select-all pattern: parent checkbox reflects child form controls and shows indeterminate
      when only some permissions are enabled.
    </p>
    <form class="flex flex-col gap-4" [formGroup]="permissionsForm">
      <div
        av-checkbox
        [selected]="selectAllSelected()"
        [indeterminate]="selectAllIndeterminate()"
        (selectedChange)="onSelectAllChange($event)"
      >
        <span av-checkbox-control>
          <span av-checkbox-indicator></span>
        </span>
        <span av-checkbox-content>
          <label av-label class="text-sm font-medium">Select all permissions</label>
          <p av-description>Indeterminate when some items are checked</p>
        </span>
      </div>

      <div class="ms-6 flex flex-col gap-3">
        <div av-checkbox formControlName="read">
          <span av-checkbox-control>
            <span av-checkbox-indicator></span>
          </span>
          <label av-label class="text-sm">Read</label>
        </div>
        <div av-checkbox formControlName="write">
          <span av-checkbox-control>
            <span av-checkbox-indicator></span>
          </span>
          <label av-label class="text-sm">Write</label>
        </div>
        <div av-checkbox formControlName="delete">
          <span av-checkbox-control>
            <span av-checkbox-indicator></span>
          </span>
          <label av-label class="text-sm">Delete</label>
        </div>
      </div>

      <p class="text-sm text-muted">
        Form value:
        {{ permissionsForm.value | json }}
      </p>
      <p class="text-sm text-muted">
        Select all — selected: {{ selectAllSelected() }}, indeterminate:
        {{ selectAllIndeterminate() }}
      </p>
    </form>`;

export const DEMO_NAME = 'checkbox-reactive-form-indeterminate';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, DestroyRef, inject, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { startWith } from 'rxjs';
import {
  AvCheckboxImports,
  AvDescriptionComponent,
  AvLabelComponent,
} from '@avesra/angular';

type PermissionKey = 'read' | 'write' | 'delete';

@Component({
  selector: 'app-checkbox-reactive-form-indeterminate-demo',
  imports: [JsonPipe, ReactiveFormsModule, AvCheckboxImports, AvLabelComponent, AvDescriptionComponent],
  host: { class: 'flex w-full items-center flex-col gap-3' },
  template: \`<p class="text-sm text-muted">
      Select-all pattern: parent checkbox reflects child form controls and shows indeterminate
      when only some permissions are enabled.
    </p>
    <form class="flex flex-col gap-4" [formGroup]="permissionsForm">
      <div
        av-checkbox
        [selected]="selectAllSelected()"
        [indeterminate]="selectAllIndeterminate()"
        (selectedChange)="onSelectAllChange(\$event)"
      >
        <span av-checkbox-control>
          <span av-checkbox-indicator></span>
        </span>
        <span av-checkbox-content>
          <label av-label class="text-sm font-medium">Select all permissions</label>
          <p av-description>Indeterminate when some items are checked</p>
        </span>
      </div>

      <div class="ms-6 flex flex-col gap-3">
        <div av-checkbox formControlName="read">
          <span av-checkbox-control>
            <span av-checkbox-indicator></span>
          </span>
          <label av-label class="text-sm">Read</label>
        </div>
        <div av-checkbox formControlName="write">
          <span av-checkbox-control>
            <span av-checkbox-indicator></span>
          </span>
          <label av-label class="text-sm">Write</label>
        </div>
        <div av-checkbox formControlName="delete">
          <span av-checkbox-control>
            <span av-checkbox-indicator></span>
          </span>
          <label av-label class="text-sm">Delete</label>
        </div>
      </div>

      <p class="text-sm text-muted">
        Form value:
        {{ permissionsForm.value | json }}
      </p>
      <p class="text-sm text-muted">
        Select all — selected: {{ selectAllSelected() }}, indeterminate:
        {{ selectAllIndeterminate() }}
      </p>
    </form>\`,
})
export class CheckboxReactiveFormIndeterminateDemo {
  private readonly destroyRef = inject(DestroyRef);

  readonly permissionKeys: PermissionKey[] = ['read', 'write', 'delete'];

  readonly permissionsForm = new FormGroup({
    read: new FormControl(true),
    write: new FormControl(false),
    delete: new FormControl(false),
  });

  readonly selectAllSelected = signal(false);
  readonly selectAllIndeterminate = signal(true);

  constructor() {
    this.permissionsForm.valueChanges
      .pipe(startWith(this.permissionsForm.value), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.syncSelectAllState());
  }

  onSelectAllChange(selected: boolean): void {
    for (const key of this.permissionKeys) {
      this.permissionsForm.controls[key].setValue(selected);
    }
  }

  private syncSelectAllState(): void {
    const selectedCount = this.permissionKeys.filter(
      (key) => this.permissionsForm.controls[key].value,
    ).length;

    this.selectAllSelected.set(selectedCount === this.permissionKeys.length);
    this.selectAllIndeterminate.set(
      selectedCount > 0 && selectedCount < this.permissionKeys.length,
    );
  }
}`;

@Component({
  selector: 'app-checkbox-reactive-form-indeterminate-demo',
  imports: [
    JsonPipe,
    ReactiveFormsModule,
    AvCheckboxImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  host: { class: 'flex w-full items-center flex-col gap-3' },
  template: DEMO_TEMPLATE,
})
export class CheckboxReactiveFormIndeterminateDemo {
  private readonly destroyRef = inject(DestroyRef);

  readonly permissionKeys: PermissionKey[] = ['read', 'write', 'delete'];

  readonly permissionsForm = new FormGroup({
    read: new FormControl(true),
    write: new FormControl(false),
    delete: new FormControl(false),
  });

  readonly selectAllSelected = signal(false);
  readonly selectAllIndeterminate = signal(true);

  constructor() {
    this.permissionsForm.valueChanges
      .pipe(startWith(this.permissionsForm.value), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.syncSelectAllState());
  }

  onSelectAllChange(selected: boolean): void {
    for (const key of this.permissionKeys) {
      this.permissionsForm.controls[key].setValue(selected);
    }
  }

  private syncSelectAllState(): void {
    const selectedCount = this.permissionKeys.filter(
      (key) => this.permissionsForm.controls[key].value,
    ).length;

    this.selectAllSelected.set(selectedCount === this.permissionKeys.length);
    this.selectAllIndeterminate.set(
      selectedCount > 0 && selectedCount < this.permissionKeys.length,
    );
  }
}
