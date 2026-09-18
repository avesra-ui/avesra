import { TestBed } from '@angular/core/testing';

import { AV_DESIGN_THEME_ATTRIBUTE, AV_VIBRANT_PALETTE_ATTRIBUTE } from './theme.model';
import { AV_THEME_OPTIONS } from './theme.model';
import { AvThemeService } from './theme.service';

describe('AvThemeService', () => {
  let service: AvThemeService;

  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-av-theme');
    document.documentElement.removeAttribute(AV_DESIGN_THEME_ATTRIBUTE);
    document.documentElement.removeAttribute(AV_VIBRANT_PALETTE_ATTRIBUTE);
    document.documentElement.classList.remove('light', 'dark', 'av-light', 'av-dark');

    TestBed.configureTestingModule({
      providers: [{ provide: AV_THEME_OPTIONS, useValue: { persist: false } }],
    });

    service = TestBed.inject(AvThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should apply light scheme to document', () => {
    service.setMode('light');
    TestBed.flushEffects();

    expect(service.colorScheme()).toBe('light');
    expect(document.documentElement.getAttribute('data-av-theme')).toBe('light');
    expect(document.documentElement.classList.contains('av-light')).toBeTrue();
  });

  it('should apply dark scheme to document', () => {
    service.setMode('dark');
    TestBed.flushEffects();

    expect(service.colorScheme()).toBe('dark');
    expect(document.documentElement.getAttribute('data-av-theme')).toBe('dark');
    expect(document.documentElement.classList.contains('av-dark')).toBeTrue();
    expect(document.documentElement.classList.contains('dark')).toBeTrue();
  });

  it('should apply standard light/dark classes for Tailwind dark: variant', () => {
    service.setMode('light');
    TestBed.flushEffects();
    expect(document.documentElement.classList.contains('light')).toBeTrue();
    expect(document.documentElement.classList.contains('dark')).toBeFalse();

    service.setMode('dark');
    TestBed.flushEffects();
    expect(document.documentElement.classList.contains('dark')).toBeTrue();
    expect(document.documentElement.classList.contains('light')).toBeFalse();
  });

  it('should toggle between light and dark', () => {
    service.setMode('light');
    TestBed.flushEffects();
    service.toggle();
    TestBed.flushEffects();
    expect(service.colorScheme()).toBe('dark');

    service.toggle();
    TestBed.flushEffects();
    expect(service.colorScheme()).toBe('light');
  });

  it('should apply custom design preset to document', () => {
    service.setDesignTheme('sky');
    TestBed.flushEffects();

    expect(service.designTheme()).toBe('sky');
    expect(document.documentElement.getAttribute(AV_DESIGN_THEME_ATTRIBUTE)).toBe('sky');
  });

  it('should restore persisted custom design presets', () => {
    localStorage.setItem('av-design-theme', 'lavender');

    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [{ provide: AV_THEME_OPTIONS, useValue: { persist: true } }],
    });
    service = TestBed.inject(AvThemeService);
    TestBed.flushEffects();

    expect(service.designTheme()).toBe('lavender');
    expect(document.documentElement.getAttribute(AV_DESIGN_THEME_ATTRIBUTE)).toBe('lavender');
  });

  it('should remove design preset attribute when set to default', () => {
    service.setDesignTheme('discord');
    TestBed.flushEffects();
    service.setDesignTheme('default');
    TestBed.flushEffects();

    expect(service.designTheme()).toBe('default');
    expect(document.documentElement.hasAttribute(AV_DESIGN_THEME_ATTRIBUTE)).toBeFalse();
  });

  it('should apply vibrant palette attribute when enabled', () => {
    service.setVibrantPalette(true);
    TestBed.flushEffects();

    expect(service.vibrantPalette()).toBeTrue();
    expect(document.documentElement.getAttribute(AV_VIBRANT_PALETTE_ATTRIBUTE)).toBe('true');
  });

  it('should remove vibrant palette attribute when disabled', () => {
    service.setVibrantPalette(true);
    TestBed.flushEffects();
    service.setVibrantPalette(false);
    TestBed.flushEffects();

    expect(service.vibrantPalette()).toBeFalse();
    expect(document.documentElement.hasAttribute(AV_VIBRANT_PALETTE_ATTRIBUTE)).toBeFalse();
  });
});
