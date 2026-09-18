import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvLabelComponent } from '../label/label.component';
import { AvListBoxItemComponent } from '../list-box-item/list-box-item.component';
import { AvListBoxItemIndicatorComponent } from '../list-box-item/list-box-item-indicator.component';
import { AvListBoxComponent } from './list-box.component';

@Component({
  template: `
    <div
      av-list-box
      aria-label="Fruits"
      selection-mode="single"
      [(selectedKeys)]="selectedKeys"
      (action)="onAction($event)"
    >
      <div av-list-box-item id="apple" textValue="Apple">
        <label av-label>Apple</label>
        <span av-list-box-item-indicator></span>
      </div>
      <div av-list-box-item id="banana" textValue="Banana">
        <label av-label>Banana</label>
        <span av-list-box-item-indicator></span>
      </div>
      <div av-list-box-item id="delete" textValue="Delete" variant="danger">
        <label av-label>Delete</label>
      </div>
    </div>
  `,
  imports: [
    AvListBoxComponent,
    AvListBoxItemComponent,
    AvListBoxItemIndicatorComponent,
    AvLabelComponent,
  ],
})
class ListBoxHostComponent {
  selectedKeys = signal<string[]>(['apple']);
  lastAction = '';

  onAction(key: string): void {
    this.lastAction = key;
  }
}

describe('AvListBoxComponent', () => {
  let fixture: ComponentFixture<ListBoxHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListBoxHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListBoxHostComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('applies listbox class', () => {
    const listBox = fixture.nativeElement.querySelector('[av-list-box]');
    expect(listBox.classList.contains('av-list-box')).toBe(true);
  });

  it('updates selectedKeys on item click', () => {
    const items = fixture.nativeElement.querySelectorAll('[av-list-box-item]');
    (items[1] as HTMLElement).click();
    fixture.detectChanges();

    expect(fixture.componentInstance.selectedKeys()).toEqual(['banana']);
  });

  it('applies danger variant class', () => {
    const dangerItem = fixture.nativeElement.querySelectorAll('[av-list-box-item]')[2];
    expect(dangerItem.classList.contains('av-list-box-item--danger')).toBe(true);
  });

  it('shows indicator when item is selected', () => {
    const indicator = fixture.nativeElement.querySelector('[av-list-box-item-indicator] svg');
    expect(indicator).toBeTruthy();
  });
});
