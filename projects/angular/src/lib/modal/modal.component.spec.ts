import { OverlayContainer } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { AvButtonComponent } from '../button/button.component';
import { AvModalBodyComponent } from './modal-body.component';
import { AvModalCloseDirective } from './modal-close.directive';
import { AvModalCloseTriggerComponent } from './modal-close-trigger.component';
import { AvModalContentDirective } from './modal-content.directive';
import { AvModalDialogComponent } from './modal-dialog.component';
import { AvModalFooterComponent } from './modal-footer.component';
import { AvModalHeaderComponent } from './modal-header.component';
import { AvModalHeadingComponent } from './modal-heading.component';
import { AvModalComponent } from './modal.component';
import { AvModalService } from './modal.service';
import { AvModalTriggerDirective } from './modal-trigger.directive';
import { AV_MODAL_DATA } from './modal.tokens';
import { AV_MODAL_EXIT_FALLBACK_MS } from './modal.utils';
import { inject } from '@angular/core';

@Component({
  template: `
    <av-modal [(open)]="open">
      <button av-button av-modal-trigger>Open</button>
      <ng-template avModalContent>
        <div av-modal-dialog>
          <av-modal-close-trigger />
          <div av-modal-header>
            <h2 av-modal-heading>Welcome</h2>
          </div>
          <div av-modal-body>
            <p>Modal content</p>
          </div>
          <div av-modal-footer>
            <button av-button av-modal-close>Continue</button>
          </div>
        </div>
      </ng-template>
    </av-modal>
  `,
  imports: [
    AvModalComponent,
    AvModalTriggerDirective,
    AvModalContentDirective,
    AvModalDialogComponent,
    AvModalHeaderComponent,
    AvModalHeadingComponent,
    AvModalBodyComponent,
    AvModalFooterComponent,
    AvModalCloseTriggerComponent,
    AvModalCloseDirective,
    AvButtonComponent,
  ],
})
class ModalHostComponent {
  open = false;
}

@Component({
  template: `
    <av-modal
      [(open)]="open"
      backdrop="blur"
      backdrop-class="bg-linear-to-t from-black/80 via-black/40 to-transparent"
    >
      <button av-button av-modal-trigger>Open</button>
      <ng-template avModalContent>
        <div av-modal-dialog>
          <div av-modal-header>
            <h2 av-modal-heading>Custom</h2>
          </div>
        </div>
      </ng-template>
    </av-modal>
  `,
  imports: [
    AvModalComponent,
    AvModalTriggerDirective,
    AvModalContentDirective,
    AvModalDialogComponent,
    AvModalHeaderComponent,
    AvModalHeadingComponent,
    AvButtonComponent,
  ],
})
class ModalCustomBackdropHostComponent {
  open = false;
}

@Component({
  selector: 'app-modal-service-panel',
  imports: [
    AvModalDialogComponent,
    AvModalHeaderComponent,
    AvModalHeadingComponent,
    AvModalBodyComponent,
    AvModalFooterComponent,
    AvModalCloseDirective,
    AvButtonComponent,
  ],
  template: `
    <div av-modal-dialog>
      <div av-modal-header>
        <h2 av-modal-heading>{{ title }}</h2>
      </div>
      <div av-modal-body>
        <p>Service content</p>
      </div>
      <div av-modal-footer>
        <button av-button [av-modal-close]="'saved'">Save</button>
      </div>
    </div>
  `,
})
class ModalServicePanelComponent {
  private readonly data = inject<{ title: string }>(AV_MODAL_DATA);
  readonly title = this.data.title;
}

describe('AvModalComponent', () => {
  let fixture: ComponentFixture<ModalHostComponent>;
  let host: ModalHostComponent;
  let overlayContainer: OverlayContainer;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalHostComponent);
    host = fixture.componentInstance;
    overlayContainer = TestBed.inject(OverlayContainer);
    fixture.detectChanges();
  });

  afterEach(() => {
    overlayContainer.ngOnDestroy();
  });

  it('should open modal in the overlay when trigger is clicked', () => {
    const trigger = fixture.nativeElement.querySelector('[av-modal-trigger]') as HTMLButtonElement;
    trigger.click();
    fixture.detectChanges();

    expect(host.open).toBeTrue();
    const dialog = overlayContainer.getContainerElement().querySelector('[av-modal-dialog]');
    expect(dialog).toBeTruthy();
    expect(dialog?.getAttribute('role')).toBe('dialog');
  });

  it('should close via close directive', fakeAsync(() => {
    const trigger = fixture.nativeElement.querySelector('[av-modal-trigger]') as HTMLButtonElement;
    trigger.click();
    fixture.detectChanges();

    const closeBtn = overlayContainer
      .getContainerElement()
      .querySelector('[av-modal-close]') as HTMLButtonElement;
    closeBtn.click();
    fixture.detectChanges();
    tick(AV_MODAL_EXIT_FALLBACK_MS + 50);
    fixture.detectChanges();

    expect(host.open).toBeFalse();
    expect(overlayContainer.getContainerElement().querySelector('[av-modal-dialog]')).toBeNull();
  }));
});

describe('AvModalComponent custom backdrop', () => {
  let fixture: ComponentFixture<ModalCustomBackdropHostComponent>;
  let overlayContainer: OverlayContainer;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCustomBackdropHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCustomBackdropHostComponent);
    overlayContainer = TestBed.inject(OverlayContainer);
    fixture.detectChanges();
  });

  afterEach(() => {
    overlayContainer.ngOnDestroy();
  });

  it('should paint custom gradient utilities on the visual backdrop node', () => {
    const trigger = fixture.nativeElement.querySelector('[av-modal-trigger]') as HTMLButtonElement;
    trigger.click();
    fixture.detectChanges();

    const backdrop = overlayContainer
      .getContainerElement()
      .querySelector('[data-slot="modal-backdrop"]');

    expect(backdrop).toBeTruthy();
    expect(backdrop?.classList.contains('av-modal__backdrop--blur')).toBeTrue();
    expect(backdrop?.classList.contains('av-modal__backdrop--opaque')).toBeFalse();
    expect(backdrop?.classList.contains('bg-linear-to-t')).toBeTrue();
  });
});

describe('AvModalService', () => {
  let overlayContainer: OverlayContainer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    overlayContainer = TestBed.inject(OverlayContainer);
  });

  afterEach(() => {
    overlayContainer.ngOnDestroy();
  });

  it('should open a component and emit close result', fakeAsync(() => {
    const service = TestBed.inject(AvModalService);
    const results: Array<string | undefined> = [];

    const ref = service.open(ModalServicePanelComponent, {
      data: { title: 'Edit profile' },
      size: 'md',
    });

    ref.afterClosed().subscribe((result) => results.push(result as string | undefined));
    tick();

    const heading = overlayContainer.getContainerElement().querySelector('[av-modal-heading]');
    expect(heading?.textContent).toContain('Edit profile');

    const saveBtn = Array.from(
      overlayContainer.getContainerElement().querySelectorAll('button'),
    ).find((button) => button.textContent?.includes('Save')) as HTMLButtonElement;

    expect(saveBtn).toBeTruthy();
    saveBtn.click();
    tick(AV_MODAL_EXIT_FALLBACK_MS + 50);

    expect(results).toEqual(['saved']);
  }));
});
