import { OverlayContainer } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { AvButtonComponent } from '../button/button.component';
import { AvAlertDialogBodyComponent } from './alert-dialog-body.component';
import { AvAlertDialogCloseDirective } from './alert-dialog-close.directive';
import { AvAlertDialogCloseTriggerComponent } from './alert-dialog-close-trigger.component';
import { AvAlertDialogContentDirective } from './alert-dialog-content.directive';
import { AvAlertDialogDialogComponent } from './alert-dialog-dialog.component';
import { AvAlertDialogFooterComponent } from './alert-dialog-footer.component';
import { AvAlertDialogHeaderComponent } from './alert-dialog-header.component';
import { AvAlertDialogHeadingComponent } from './alert-dialog-heading.component';
import { AvAlertDialogIconComponent } from './alert-dialog-icon.component';
import { AvAlertDialogComponent } from './alert-dialog.component';
import { AvAlertDialogService } from './alert-dialog.service';
import { AvAlertDialogTriggerDirective } from './alert-dialog-trigger.directive';
import { AV_ALERT_DIALOG_EXIT_FALLBACK_MS } from './alert-dialog.utils';

@Component({
  template: `
    <av-alert-dialog [(open)]="open">
      <button av-button av-alert-dialog-trigger>Delete</button>
      <ng-template avAlertDialogContent>
        <div av-alert-dialog-dialog>
          <av-alert-dialog-close-trigger />
          <div av-alert-dialog-header>
            <div av-alert-dialog-icon status="danger">🗑️</div>
            <h2 av-alert-dialog-heading>Delete project?</h2>
          </div>
          <div av-alert-dialog-body>
            <p>This action cannot be undone.</p>
          </div>
          <div av-alert-dialog-footer>
            <button av-button variant="secondary" av-alert-dialog-close>Cancel</button>
            <button av-button variant="danger" [av-alert-dialog-close]="'confirm'">Delete</button>
          </div>
        </div>
      </ng-template>
    </av-alert-dialog>
  `,
  imports: [
    AvAlertDialogComponent,
    AvAlertDialogTriggerDirective,
    AvAlertDialogContentDirective,
    AvAlertDialogDialogComponent,
    AvAlertDialogHeaderComponent,
    AvAlertDialogIconComponent,
    AvAlertDialogHeadingComponent,
    AvAlertDialogBodyComponent,
    AvAlertDialogFooterComponent,
    AvAlertDialogCloseTriggerComponent,
    AvAlertDialogCloseDirective,
    AvButtonComponent,
  ],
})
class AlertDialogHostComponent {
  open = false;
}

describe('AvAlertDialogComponent', () => {
  let fixture: ComponentFixture<AlertDialogHostComponent>;
  let host: AlertDialogHostComponent;
  let overlayContainer: OverlayContainer;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertDialogHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertDialogHostComponent);
    host = fixture.componentInstance;
    overlayContainer = TestBed.inject(OverlayContainer);
    fixture.detectChanges();
  });

  afterEach(() => {
    overlayContainer.ngOnDestroy();
  });

  it('should open alert dialog in the overlay when trigger is clicked', () => {
    const trigger = fixture.nativeElement.querySelector(
      '[av-alert-dialog-trigger]',
    ) as HTMLButtonElement;
    trigger.click();
    fixture.detectChanges();

    expect(host.open).toBeTrue();
    const dialog = overlayContainer
      .getContainerElement()
      .querySelector('[av-alert-dialog-dialog]');
    expect(dialog).toBeTruthy();
    expect(dialog?.getAttribute('role')).toBe('alertdialog');
  });

  it('should render status icon classes', () => {
    const trigger = fixture.nativeElement.querySelector(
      '[av-alert-dialog-trigger]',
    ) as HTMLButtonElement;
    trigger.click();
    fixture.detectChanges();

    const icon = overlayContainer
      .getContainerElement()
      .querySelector('[av-alert-dialog-icon]');

    expect(icon?.classList.contains('av-alert-dialog__icon--danger')).toBeTrue();
  });

  it('should close via close directive', fakeAsync(() => {
    const trigger = fixture.nativeElement.querySelector(
      '[av-alert-dialog-trigger]',
    ) as HTMLButtonElement;
    trigger.click();
    fixture.detectChanges();

    const cancel = overlayContainer
      .getContainerElement()
      .querySelector('[av-alert-dialog-close]') as HTMLButtonElement;
    cancel.click();
    fixture.detectChanges();
    tick(AV_ALERT_DIALOG_EXIT_FALLBACK_MS + 50);
    fixture.detectChanges();

    expect(host.open).toBeFalse();
    expect(
      overlayContainer.getContainerElement().querySelector('[av-alert-dialog-dialog]'),
    ).toBeNull();
  }));
});

@Component({
  template: `
    <av-alert-dialog
      [(open)]="open"
      backdrop="blur"
      backdrop-class="bg-linear-to-t from-red-950/90 via-red-950/50 to-transparent"
    >
      <button av-button av-alert-dialog-trigger>Delete</button>
      <ng-template avAlertDialogContent>
        <div av-alert-dialog-dialog>
          <div av-alert-dialog-header>
            <h2 av-alert-dialog-heading>Custom</h2>
          </div>
        </div>
      </ng-template>
    </av-alert-dialog>
  `,
  imports: [
    AvAlertDialogComponent,
    AvAlertDialogTriggerDirective,
    AvAlertDialogContentDirective,
    AvAlertDialogDialogComponent,
    AvAlertDialogHeaderComponent,
    AvAlertDialogHeadingComponent,
    AvButtonComponent,
  ],
})
class AlertDialogCustomBackdropHostComponent {
  open = false;
}

describe('AvAlertDialogComponent custom backdrop', () => {
  let fixture: ComponentFixture<AlertDialogCustomBackdropHostComponent>;
  let overlayContainer: OverlayContainer;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertDialogCustomBackdropHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertDialogCustomBackdropHostComponent);
    overlayContainer = TestBed.inject(OverlayContainer);
    fixture.detectChanges();
  });

  afterEach(() => {
    overlayContainer.ngOnDestroy();
  });

  it('should paint custom gradient utilities on the visual backdrop node', () => {
    const trigger = fixture.nativeElement.querySelector(
      '[av-alert-dialog-trigger]',
    ) as HTMLButtonElement;
    trigger.click();
    fixture.detectChanges();

    const backdrop = overlayContainer
      .getContainerElement()
      .querySelector('[data-slot="alert-dialog-backdrop"]');

    expect(backdrop).toBeTruthy();
    expect(backdrop?.classList.contains('av-alert-dialog__backdrop--blur')).toBeTrue();
    expect(backdrop?.classList.contains('av-alert-dialog__backdrop--opaque')).toBeFalse();
    expect(backdrop?.classList.contains('bg-linear-to-t')).toBeTrue();
    expect(backdrop?.classList.contains('from-red-950/90')).toBeTrue();
  });
});

describe('AvAlertDialogService', () => {
  let overlayContainer: OverlayContainer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    overlayContainer = TestBed.inject(OverlayContainer);
  });

  afterEach(() => {
    overlayContainer.ngOnDestroy();
  });

  it('should open a confirm dialog and emit confirm result', fakeAsync(() => {
    const service = TestBed.inject(AvAlertDialogService);
    const results: Array<string | undefined> = [];

    const ref = service.confirm({
      title: 'Delete?',
      description: 'Cannot undo.',
      confirmText: 'Delete',
      cancelText: 'Cancel',
      status: 'danger',
    });

    ref.afterClosed().subscribe((result) => results.push(result));
    tick();

    const confirmBtn = Array.from(
      overlayContainer.getContainerElement().querySelectorAll('button'),
    ).find((button) => button.textContent?.includes('Delete')) as HTMLButtonElement;

    expect(confirmBtn).toBeTruthy();
    confirmBtn.click();
    tick(AV_ALERT_DIALOG_EXIT_FALLBACK_MS + 50);

    expect(results).toEqual(['confirm']);
  }));
});
