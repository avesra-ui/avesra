import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { AvLabelComponent } from '../label/label.component';
import { AvSliderComponent } from './slider.component';
import { AvSliderFillComponent } from './slider-fill.component';
import { AvSliderOutputComponent } from './slider-output.component';
import { AvSliderThumbComponent } from './slider-thumb.component';
import { AvSliderTrackComponent } from './slider-track.component';

@Component({
  template: `
    <div av-slider class="w-full" [default-value]="30" [(value)]="volume">
      <label av-label>Volume</label>
      <span av-slider-output></span>
      <div av-slider-track>
        <div av-slider-fill></div>
        <div av-slider-thumb></div>
      </div>
    </div>
  `,
  imports: [
    AvSliderComponent,
    AvSliderOutputComponent,
    AvSliderTrackComponent,
    AvSliderFillComponent,
    AvSliderThumbComponent,
    AvLabelComponent,
  ],
})
class SliderHostComponent {
  volume = signal<number | number[] | undefined>(undefined);
}

describe('AvSliderComponent', () => {
  let fixture: ComponentFixture<SliderHostComponent>;
  let host: SliderHostComponent;
  let root: HTMLElement;
  let thumb: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SliderHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();

    root = fixture.nativeElement.querySelector('[av-slider]')!;
    thumb = fixture.nativeElement.querySelector('[av-slider-thumb]')!;
  });

  it('should render slider with default value', () => {
    expect(root.classList.contains('av-slider')).toBeTrue();
    expect(root.getAttribute('data-orientation')).toBe('horizontal');
    expect(host.volume()).toBe(30);
    expect(fixture.nativeElement.querySelector('.av-slider__output')?.textContent?.trim()).toBe(
      '30',
    );
  });

  it('should update value on keyboard interaction', () => {
    thumb.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
    fixture.detectChanges();

    expect(host.volume()).toBe(31);
    expect(thumb.getAttribute('aria-valuenow')).toBe('31');
  });

  it('should render compound parts', () => {
    expect(fixture.nativeElement.querySelector('.av-slider__track')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.av-slider__fill')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.av-slider__thumb')).toBeTruthy();
  });
});

@Component({
  template: `
    <div av-slider class="w-full" [formControl]="control">
      <label av-label>Volume</label>
      <span av-slider-output></span>
      <div av-slider-track>
        <div av-slider-fill></div>
        <div av-slider-thumb></div>
      </div>
    </div>
  `,
  imports: [
    ReactiveFormsModule,
    AvSliderComponent,
    AvSliderOutputComponent,
    AvSliderTrackComponent,
    AvSliderFillComponent,
    AvSliderThumbComponent,
    AvLabelComponent,
  ],
})
class ReactiveSliderHostComponent {
  readonly control = new FormControl(40);
}

describe('AvSliderComponent with reactive forms', () => {
  let fixture: ComponentFixture<ReactiveSliderHostComponent>;
  let host: ReactiveSliderHostComponent;
  let thumb: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveSliderHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReactiveSliderHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();

    thumb = fixture.nativeElement.querySelector('[av-slider-thumb]')!;
  });

  it('should reflect form control value', () => {
    expect(thumb.getAttribute('aria-valuenow')).toBe('40');
  });

  it('should update form control on keyboard interaction', () => {
    thumb.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
    fixture.detectChanges();

    expect(host.control.value).toBe(41);
  });
});
