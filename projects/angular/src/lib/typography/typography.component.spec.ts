import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { AvTypographyComponent } from './typography.component';
import { AvTypographyHeadingComponent } from './typography-heading.component';
import { AvTypographyProseComponent } from './typography-prose.component';

@Component({
  template: `<h1 av-typography type="h1">Title</h1>`,
  imports: [AvTypographyComponent],
})
class TypographyHost {}

@Component({
  template: `<h2 av-typography-heading>Section</h2>`,
  imports: [AvTypographyHeadingComponent],
})
class HeadingHost {}

@Component({
  template: `<div av-typography-prose><p>Hi</p></div>`,
  imports: [AvTypographyProseComponent],
})
class ProseHost {}

describe('AvTypographyComponent', () => {
  it('applies type modifier class', async () => {
    await TestBed.configureTestingModule({ imports: [TypographyHost] }).compileComponents();
    const fixture = TestBed.createComponent(TypographyHost);
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('[data-slot="typography"]') as HTMLElement;
    expect(el.className).toContain('av-typography--h1');
    expect(el.getAttribute('data-type')).toBe('h1');
  });
});

describe('AvTypographyHeadingComponent', () => {
  it('infers level from host tag', async () => {
    await TestBed.configureTestingModule({ imports: [HeadingHost] }).compileComponents();
    const fixture = TestBed.createComponent(HeadingHost);
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector(
      '[data-slot="typography-heading"]',
    ) as HTMLElement;
    expect(el.className).toContain('av-typography--h2');
    expect(el.getAttribute('data-type')).toBe('h2');
  });
});

describe('AvTypographyProseComponent', () => {
  it('applies prose class', async () => {
    await TestBed.configureTestingModule({ imports: [ProseHost] }).compileComponents();
    const fixture: ComponentFixture<ProseHost> = TestBed.createComponent(ProseHost);
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector(
      '[data-slot="typography-prose"]',
    ) as HTMLElement;
    expect(el.className).toContain('av-typography-prose');
  });
});
