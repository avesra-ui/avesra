import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvTagGroupComponent } from '../tag-group/tag-group.component';
import { AvTagGroupListComponent } from '../tag-group/tag-group-list.component';
import { AvTagComponent } from './tag.component';
import { AvTagRemoveButtonComponent } from './tag-remove-button.component';

@Component({
  template: `
    <av-tag-group
      size="sm"
      variant="surface"
      selection-mode="multiple"
      [(selectedKeys)]="selectedKeys"
    >
      <div av-tag-group-list>
        <div av-tag value="news">News</div>
        <div av-tag value="travel" [disabled]="travelDisabled">Travel</div>
      </div>
    </av-tag-group>
  `,
  imports: [AvTagGroupComponent, AvTagGroupListComponent, AvTagComponent],
})
class TagSelectionHostComponent {
  selectedKeys = signal<string[]>([]);
  travelDisabled = false;
}

@Component({
  template: `
    <av-tag-group allows-removing (remove)="onRemove($event)">
      <div av-tag-group-list>
        <div av-tag value="news">News</div>
        <div av-tag value="travel">
          Travel
          <button av-tag-remove-button type="button" [useDefaultIcon]="false">×</button>
        </div>
      </div>
    </av-tag-group>
  `,
  imports: [
    AvTagGroupComponent,
    AvTagGroupListComponent,
    AvTagComponent,
    AvTagRemoveButtonComponent,
  ],
})
class TagRemoveHostComponent {
  removed: string[] = [];

  onRemove(keys: string[]): void {
    this.removed = keys;
  }
}

describe('AvTagComponent', () => {
  describe('selection', () => {
    let fixture: ComponentFixture<TagSelectionHostComponent>;
    let host: TagSelectionHostComponent;
    let tags: HTMLElement[];

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [TagSelectionHostComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(TagSelectionHostComponent);
      host = fixture.componentInstance;
      fixture.detectChanges();
      tags = [...fixture.nativeElement.querySelectorAll('[data-slot="tag"]')];
    });

    it('should inherit size and variant from the group', () => {
      expect(tags[0].classList.contains('av-tag')).toBeTrue();
      expect(tags[0].classList.contains('av-tag--sm')).toBeTrue();
      expect(tags[0].classList.contains('av-tag--surface')).toBeTrue();
    });

    it('should toggle multiple selection', () => {
      tags[0].click();
      tags[1].click();
      fixture.detectChanges();

      expect(host.selectedKeys()).toEqual(['news', 'travel']);
      expect(tags[0].getAttribute('data-selected')).toBe('true');
      expect(tags[1].getAttribute('data-selected')).toBe('true');
    });

    it('should disable an individual tag', () => {
      host.travelDisabled = true;
      fixture.detectChanges();

      tags[1].click();
      fixture.detectChanges();

      expect(host.selectedKeys()).toEqual([]);
      expect(tags[1].getAttribute('data-disabled')).toBe('true');
    });
  });

  describe('remove', () => {
    let fixture: ComponentFixture<TagRemoveHostComponent>;
    let host: TagRemoveHostComponent;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [TagRemoveHostComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(TagRemoveHostComponent);
      host = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should render a default remove button on tags without a custom one', () => {
      const news = fixture.nativeElement.querySelector('[data-value="news"]') as HTMLElement;
      const remove = news.querySelector('[data-slot="tag-remove-button"]');

      expect(remove).toBeTruthy();
    });

    it('should use a custom remove button when projected', () => {
      const travel = fixture.nativeElement.querySelector('[data-value="travel"]') as HTMLElement;
      const remove = travel.querySelector('[data-slot="tag-remove-button"]') as HTMLElement;

      expect(remove.textContent?.trim()).toBe('×');
      expect(travel.querySelectorAll('[data-slot="tag-remove-button"]').length).toBe(1);
    });

    it('should emit remove when the remove button is clicked', () => {
      const news = fixture.nativeElement.querySelector('[data-value="news"]') as HTMLElement;
      const remove = news.querySelector('[data-slot="tag-remove-button"]') as HTMLButtonElement;

      remove.click();
      fixture.detectChanges();

      expect(host.removed).toEqual(['news']);
    });
  });
});
