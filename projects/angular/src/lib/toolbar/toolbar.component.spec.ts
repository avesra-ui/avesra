import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvButtonComponent } from '../button/button.component';
import { AvButtonGroupComponent } from '../button-group/button-group.component';
import { AvSeparatorComponent } from '../separator/separator.component';
import { AvToggleButtonComponent } from '../toggle-button/toggle-button.component';
import { AvToggleButtonGroupComponent } from '../toggle-button-group/toggle-button-group.component';
import { AvToolbarComponent } from './toolbar.component';

@Component({
  template: `
    <av-toolbar aria-label="Text formatting" [attached]="attached">
      <av-toggle-button-group selection-mode="multiple">
        <button av-toggle-button value="bold" icon-only aria-label="Bold">B</button>
        <button av-toggle-button value="italic" icon-only aria-label="Italic">I</button>
      </av-toggle-button-group>
      <hr av-separator />
      <av-button-group>
        <button av-button variant="secondary" icon-only aria-label="Copy">C</button>
      </av-button-group>
    </av-toolbar>
  `,
  imports: [
    AvToolbarComponent,
    AvToggleButtonGroupComponent,
    AvToggleButtonComponent,
    AvSeparatorComponent,
    AvButtonGroupComponent,
    AvButtonComponent,
  ],
})
class ToolbarHostComponent {
  attached = false;
}

describe('AvToolbarComponent', () => {
  let fixture: ComponentFixture<ToolbarHostComponent>;
  let toolbar: HTMLElement;
  let separator: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToolbarHostComponent);
    fixture.detectChanges();

    toolbar = fixture.nativeElement.querySelector('av-toolbar')!;
    separator = fixture.nativeElement.querySelector('[av-separator]')!;
  });

  it('should render toolbar with default horizontal classes', () => {
    expect(toolbar.classList.contains('av-toolbar')).toBeTrue();
    expect(toolbar.classList.contains('av-toolbar--horizontal')).toBeTrue();
    expect(toolbar.getAttribute('role')).toBe('toolbar');
    expect(toolbar.getAttribute('aria-orientation')).toBe('horizontal');
    expect(toolbar.getAttribute('aria-label')).toBe('Text formatting');
  });

  it('should inherit vertical separator orientation in horizontal toolbar', () => {
    expect(separator.classList.contains('av-separator--vertical')).toBeTrue();
    expect(separator.getAttribute('aria-orientation')).toBe('vertical');
  });

  it('should apply attached modifier', () => {
    fixture.componentInstance.attached = true;
    fixture.detectChanges();

    expect(toolbar.classList.contains('av-toolbar--attached')).toBeTrue();
  });
});

@Component({
  template: `
    <av-toolbar aria-label="Tools" orientation="vertical">
      <hr av-separator />
    </av-toolbar>
  `,
  imports: [AvToolbarComponent, AvSeparatorComponent],
})
class VerticalToolbarHostComponent {}

describe('AvToolbarComponent vertical', () => {
  let fixture: ComponentFixture<VerticalToolbarHostComponent>;
  let toolbar: HTMLElement;
  let separator: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerticalToolbarHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VerticalToolbarHostComponent);
    fixture.detectChanges();

    toolbar = fixture.nativeElement.querySelector('av-toolbar')!;
    separator = fixture.nativeElement.querySelector('[av-separator]')!;
  });

  it('should render vertical toolbar classes', () => {
    expect(toolbar.classList.contains('av-toolbar--vertical')).toBeTrue();
    expect(toolbar.getAttribute('aria-orientation')).toBe('vertical');
  });

  it('should inherit horizontal separator orientation in vertical toolbar', () => {
    expect(separator.classList.contains('av-separator--horizontal')).toBeTrue();
    expect(separator.getAttribute('aria-orientation')).toBe('horizontal');
  });
});
