import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvLabelComponent } from '../label/label.component';
import { AvSwitchComponent } from '../switch/switch.component';
import { AvSwitchControlComponent } from '../switch/switch-control.component';
import { AvSwitchThumbComponent } from '../switch/switch-thumb.component';
import { AvSwitchGroupComponent } from './switch-group.component';

@Component({
  template: `
    <av-switch-group orientation="horizontal">
      <div av-switch name="notifications">
        <span av-switch-control>
          <span av-switch-thumb></span>
        </span>
        <label av-label>Notifications</label>
      </div>
      <div av-switch name="marketing">
        <span av-switch-control>
          <span av-switch-thumb></span>
        </span>
        <label av-label>Marketing</label>
      </div>
    </av-switch-group>
  `,
  imports: [
    AvSwitchGroupComponent,
    AvSwitchComponent,
    AvSwitchControlComponent,
    AvSwitchThumbComponent,
    AvLabelComponent,
  ],
})
class SwitchGroupHostComponent {}

describe('AvSwitchGroupComponent', () => {
  let fixture: ComponentFixture<SwitchGroupHostComponent>;
  let group: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchGroupHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SwitchGroupHostComponent);
    fixture.detectChanges();

    group = fixture.nativeElement.querySelector('av-switch-group')!;
  });

  it('should render group with orientation class', () => {
    expect(group.classList.contains('av-switch-group')).toBeTrue();
    expect(group.classList.contains('av-switch-group--horizontal')).toBeTrue();
    expect(group.getAttribute('data-slot')).toBe('switch-group');
  });

  it('should render child switches', () => {
    const switches = group.querySelectorAll('[av-switch]');

    expect(switches.length).toBe(2);
  });
});
