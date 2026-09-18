import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvTagComponent } from '../tag/tag.component';
import { AvTagGroupComponent } from './tag-group.component';
import { AvTagGroupListComponent } from './tag-group-list.component';

@Component({
  template: `
    <av-tag-group
      selection-mode="single"
      [disabled]="groupDisabled"
      [disabled-keys]="disabledKeys"
      [(selectedKeys)]="selectedKeys"
    >
      <div av-tag-group-list>
        <div av-tag value="news">News</div>
        <div av-tag value="travel">Travel</div>
        <div av-tag value="gaming">Gaming</div>
      </div>
    </av-tag-group>
  `,
  imports: [AvTagGroupComponent, AvTagGroupListComponent, AvTagComponent],
})
class TagGroupHostComponent {
  groupDisabled = false;
  disabledKeys: string[] = [];
  selectedKeys = signal<string[]>([]);
}

describe('AvTagGroupComponent', () => {
  let fixture: ComponentFixture<TagGroupHostComponent>;
  let host: TagGroupHostComponent;
  let group: HTMLElement;
  let list: HTMLElement;
  let tags: HTMLElement[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagGroupHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TagGroupHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();

    group = fixture.nativeElement.querySelector('av-tag-group')!;
    list = fixture.nativeElement.querySelector('[data-slot="tag-group-list"]')!;
    tags = [...fixture.nativeElement.querySelectorAll('[data-slot="tag"]')];
  });

  it('should render group and list slots', () => {
    expect(group.classList.contains('av-tag-group')).toBeTrue();
    expect(group.getAttribute('role')).toBe('group');
    expect(list.classList.contains('av-tag-group__list')).toBeTrue();
    expect(list.getAttribute('role')).toBe('listbox');
  });

  it('should manage single selection', () => {
    tags[0].click();
    fixture.detectChanges();
    expect(host.selectedKeys()).toEqual(['news']);

    tags[1].click();
    fixture.detectChanges();
    expect(host.selectedKeys()).toEqual(['travel']);
  });

  it('should honor disabledKeys', () => {
    host.disabledKeys = ['travel'];
    fixture.detectChanges();

    tags[1].click();
    fixture.detectChanges();

    expect(host.selectedKeys()).toEqual([]);
    expect(tags[1].getAttribute('data-disabled')).toBe('true');
  });

  it('should disable all tags when the group is disabled', () => {
    host.groupDisabled = true;
    fixture.detectChanges();

    expect(tags.every((tag) => tag.getAttribute('data-disabled') === 'true')).toBeTrue();
  });
});
