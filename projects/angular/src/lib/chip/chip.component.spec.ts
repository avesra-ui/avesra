import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvChipComponent, AvChipLabelComponent } from './index';
import type { AvChipColor, AvChipSize, AvChipVariant } from './chip.utils';

@Component({
  template: `
    <span
      av-chip
      [color]="color"
      [size]="size"
      [variant]="variant"
      [label]="label"
    ></span>
  `,
  imports: [AvChipComponent],
})
class ChipHostComponent {
  color: AvChipColor = 'accent';
  size: AvChipSize = 'md';
  variant: AvChipVariant = 'secondary';
  label: string | number | undefined = 'Label';
}

@Component({
  template: `
    <span av-chip>
      <span av-chip-label>{{ text }}</span>
    </span>
  `,
  imports: [AvChipComponent, AvChipLabelComponent],
})
class ChipLabelHostComponent {
  text = 'Custom';
}

describe('AvChipComponent', () => {
  let fixture: ComponentFixture<ChipHostComponent>;
  let host: ChipHostComponent;
  let chip: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChipHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
    chip = fixture.nativeElement.querySelector('[data-slot="chip"]')!;
  });

  it('should create with default modifier classes', () => {
    expect(chip.classList.contains('av-chip')).toBeTrue();
    expect(chip.classList.contains('av-chip--accent')).toBeTrue();
    expect(chip.classList.contains('av-chip--md')).toBeTrue();
    expect(chip.classList.contains('av-chip--secondary')).toBeTrue();
  });

  it('should render label input content', () => {
    const label = chip.querySelector('[data-slot="chip-label"]');

    expect(label).toBeTruthy();
    expect(label?.textContent?.trim()).toBe('Label');
    expect(label?.classList.contains('av-chip__label')).toBeTrue();
  });

  it('should apply updated variant and color classes', () => {
    host.variant = 'soft';
    host.color = 'danger';
    host.size = 'lg';
    fixture.detectChanges();

    expect(chip.classList.contains('av-chip--soft')).toBeTrue();
    expect(chip.classList.contains('av-chip--danger')).toBeTrue();
    expect(chip.classList.contains('av-chip--lg')).toBeTrue();
  });
});

describe('AvChipLabelComponent', () => {
  let fixture: ComponentFixture<ChipLabelHostComponent>;
  let label: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipLabelHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChipLabelHostComponent);
    fixture.detectChanges();
    label = fixture.nativeElement.querySelector('[data-slot="chip-label"]')!;
  });

  it('should render projected label content', () => {
    expect(label.classList.contains('av-chip__label')).toBeTrue();
    expect(label.textContent?.trim()).toBe('Custom');
  });
});
