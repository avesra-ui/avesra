import { Component } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { AvToastComponent } from './toast.component';
import { AvToastService } from './toast.service';
import type { AvToastPlacement } from './toast.types';
import { AV_TOAST_ENTER_MS, AV_TOAST_EXIT_MS } from './toast.utils';

@Component({
  template: `<av-toast [key]="toastKey" />`,
  imports: [AvToastComponent],
  providers: [AvToastService],
})
class ToastHostComponent {
  toastKey?: string;
}

@Component({
  template: `
    <av-toast placement="bottom" />
    @for (placement of placements; track placement) {
      <av-toast [placement]="placement" [key]="placement" />
    }
  `,
  imports: [AvToastComponent],
  providers: [AvToastService],
})
class MultiToastHostComponent {
  readonly placements: AvToastPlacement[] = [
    'bottom',
    'bottom-start',
    'bottom-end',
    'top',
    'top-start',
    'top-end',
  ];
}

describe('AvToastComponent', () => {
  let fixture: ComponentFixture<ToastHostComponent>;
  let service: AvToastService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToastHostComponent);
    service = fixture.debugElement.injector.get(AvToastService);
    fixture.detectChanges();
  });

  afterEach(() => {
    document.querySelectorAll('.av-toast').forEach((node) => node.remove());
  });

  it('should render a toast when service adds a message', fakeAsync(() => {
    service.add('Toast title', { description: 'Toast description' });
    fixture.detectChanges();
    tick(0);

    const toast = document.querySelector('.av-toast');
    expect(toast).toBeTruthy();
    expect(toast?.textContent).toContain('Toast title');
    expect(toast?.textContent).toContain('Toast description');

    const closeButton = document.querySelector('button.av-close-button.av-toast__close-button');
    expect(closeButton).toBeTruthy();
    expect(closeButton?.querySelector('[data-slot="close-button-icon"]')).toBeTruthy();
  }));

  it('should filter messages by key', fakeAsync(() => {
    fixture.componentInstance.toastKey = 'demo';
    fixture.detectChanges();

    service.add('Visible', { key: 'demo' });
    service.add('Hidden', { key: 'other' });
    fixture.detectChanges();
    tick(0);

    const toasts = document.querySelectorAll('.av-toast');
    expect(toasts.length).toBe(1);
    expect(toasts[0]?.textContent).toContain('Visible');
  }));

  it('should remove toast after dismiss animation', fakeAsync(() => {
    service.add('Dismiss me', { life: 10 });
    fixture.detectChanges();
    tick(0);

    expect(document.querySelectorAll('.av-toast').length).toBe(1);

    tick(AV_TOAST_ENTER_MS);
    fixture.detectChanges();
    tick(10);
    fixture.detectChanges();
    tick(AV_TOAST_EXIT_MS);
    fixture.detectChanges();

    expect(document.querySelectorAll('.av-toast').length).toBe(0);
  }));

  it('should show new toast after clear all', fakeAsync(() => {
    service.add('First toast');
    fixture.detectChanges();
    tick(AV_TOAST_ENTER_MS);

    expect(document.querySelectorAll('.av-toast').length).toBe(1);

    service.clear();
    fixture.detectChanges();
    tick(AV_TOAST_ENTER_MS + AV_TOAST_EXIT_MS);
    fixture.detectChanges();

    expect(document.querySelectorAll('.av-toast').length).toBe(0);

    service.add('After clear');
    fixture.detectChanges();
    tick(AV_TOAST_ENTER_MS);

    const toasts = document.querySelectorAll('.av-toast');
    expect(toasts.length).toBe(1);
    expect(toasts[0]?.textContent).toContain('After clear');
  }));

  it('should show new toast after clear all with multiple containers like playground', fakeAsync(() => {
    const multiFixture = TestBed.createComponent(MultiToastHostComponent);
    const multiService = multiFixture.debugElement.injector.get(AvToastService);
    multiFixture.detectChanges();

    multiService.add('First toast');
    multiFixture.detectChanges();
    tick(AV_TOAST_ENTER_MS);

    multiService.clear();
    multiFixture.detectChanges();
    tick(AV_TOAST_ENTER_MS + AV_TOAST_EXIT_MS);
    multiFixture.detectChanges();

    multiService.add('After clear');
    multiFixture.detectChanges();
    tick(AV_TOAST_ENTER_MS);

    const toasts = document.querySelectorAll('.av-toast');
    expect(toasts.length).toBe(1);
    expect(toasts[0]?.textContent).toContain('After clear');
    expect(toasts[0]?.getAttribute('data-exiting')).not.toBe('true');
  }));

  it('should mark the region expanded on hover', fakeAsync(() => {
    service.add('One');
    service.add('Two');
    fixture.detectChanges();
    tick(AV_TOAST_ENTER_MS);
    fixture.detectChanges();

    const region = fixture.nativeElement.querySelector('av-toast') as HTMLElement;
    expect(region.getAttribute('data-expanded')).toBe('false');

    region.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
    fixture.detectChanges();

    expect(region.getAttribute('data-expanded')).toBe('true');
    expect(document.querySelector('.av-toast')?.getAttribute('data-expanded')).toBe('true');
  }));

  it('should update loading toast when promise resolves', fakeAsync(() => {
    let resolveSave!: (value: string) => void;
    const pending = new Promise<string>((resolve) => {
      resolveSave = resolve;
    });

    service.promise(pending, {
      loading: 'Saving…',
      success: (name) => `Saved ${name}`,
    });
    fixture.detectChanges();
    tick(0);

    expect(document.querySelector('.av-toast')?.textContent).toContain('Saving…');

    resolveSave('file.ts');
    tick(0);
    fixture.detectChanges();

    expect(document.querySelector('.av-toast')?.textContent).toContain('Saved file.ts');
  }));
});
