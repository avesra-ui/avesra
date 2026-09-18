import { Component, signal } from '@angular/core';

import {
  AvDescriptionComponent,
  AvLabelComponent,
  AvTagGroupImports,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-8">
      <av-tag-group selection-mode="single" allows-removing (remove)="onRemove($event)">
        <label av-label>Removable tags</label>
        <div av-tag-group-list>
          @for (tag of tags(); track tag.id) {
            <div av-tag [value]="tag.id" [text-value]="tag.name">{{ tag.name }}</div>
          }
        </div>
        <p av-description>Click the X to remove tags</p>
      </av-tag-group>

      <av-tag-group
        selection-mode="single"
        allows-removing
        (remove)="onRemoveFramework($event)"
      >
        <label av-label>Custom remove button</label>
        <div av-tag-group-list>
          @for (tag of frameworks(); track tag.id) {
            <div av-tag [value]="tag.id" [text-value]="tag.name">
              {{ tag.name }}
              <button av-tag-remove-button type="button" [useDefaultIcon]="false">
                <app-icon icon="solar:close-circle-bold" size="12" />
              </button>
            </div>
          }
        </div>
        <p av-description>Custom remove button using compound composition</p>
      </av-tag-group>
    </div>`;

export const DEMO_NAME = 'tag-group-removable';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import {
  AvDescriptionComponent,
  AvLabelComponent,
  AvTagGroupImports,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-tag-group-removable-demo',
  imports: [
    AvTagGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AppIconComponent,
  ],
  template: \`
${DEMO_TEMPLATE}
\`,
})
export class TagGroupRemovableDemo {
  readonly tags = signal([
    { id: 'news', name: 'News' },
    { id: 'travel', name: 'Travel' },
    { id: 'gaming', name: 'Gaming' },
    { id: 'shopping', name: 'Shopping' },
  ]);

  readonly frameworks = signal([
    { id: 'react', name: 'React' },
    { id: 'vue', name: 'Vue' },
    { id: 'angular', name: 'Angular' },
    { id: 'svelte', name: 'Svelte' },
  ]);

  onRemove(keys: string[]): void {
    this.tags.update((items) => items.filter((tag) => !keys.includes(tag.id)));
  }

  onRemoveFramework(keys: string[]): void {
    this.frameworks.update((items) => items.filter((tag) => !keys.includes(tag.id)));
  }
}`;

@Component({
  selector: 'app-tag-group-removable-demo',
  imports: [
    AvTagGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AppIconComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class TagGroupRemovableDemo {
  readonly tags = signal([
    { id: 'news', name: 'News' },
    { id: 'travel', name: 'Travel' },
    { id: 'gaming', name: 'Gaming' },
    { id: 'shopping', name: 'Shopping' },
  ]);

  readonly frameworks = signal([
    { id: 'react', name: 'React' },
    { id: 'vue', name: 'Vue' },
    { id: 'angular', name: 'Angular' },
    { id: 'svelte', name: 'Svelte' },
  ]);

  onRemove(keys: string[]): void {
    this.tags.update((items) => items.filter((tag) => !keys.includes(tag.id)));
  }

  onRemoveFramework(keys: string[]): void {
    this.frameworks.update((items) => items.filter((tag) => !keys.includes(tag.id)));
  }
}
