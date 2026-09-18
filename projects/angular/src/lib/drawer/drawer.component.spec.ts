import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, inject } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { AvButtonComponent } from '../button/button.component';
import { AvDrawerBodyComponent } from './drawer-body.component';
import { AvDrawerCloseDirective } from './drawer-close.directive';
import { AvDrawerCloseTriggerComponent } from './drawer-close-trigger.component';
import { AvDrawerContentDirective } from './drawer-content.directive';
import { AvDrawerDialogComponent } from './drawer-dialog.component';
import { AvDrawerFooterComponent } from './drawer-footer.component';
import { AvDrawerHeaderComponent } from './drawer-header.component';
import { AvDrawerHeadingComponent } from './drawer-heading.component';
import { AvDrawerComponent } from './drawer.component';
import { AvDrawerService } from './drawer.service';
import { AvDrawerTriggerDirective } from './drawer-trigger.directive';
import { AV_DRAWER_DATA } from './drawer.tokens';
import { AV_DRAWER_EXIT_FALLBACK_MS } from './drawer.utils';

@Component({
  template: `
    <av-drawer [(open)]="open">
      <button av-button av-drawer-trigger>Open</button>
      <ng-template avDrawerContent>
        <div av-drawer-dialog>
          <av-drawer-close-trigger />
          <div av-drawer-header>
            <h2 av-drawer-heading>Welcome</h2>
          </div>
          <div av-drawer-body>
            <p>Drawer content</p>
          </div>
          <div av-drawer-footer>
            <button av-button av-drawer-close>Continue</button>
          </div>
        </div>
      </ng-template>
    </av-drawer>
  `,
  imports: [
    AvDrawerComponent,
    AvDrawerTriggerDirective,
    AvDrawerContentDirective,
    AvDrawerDialogComponent,
    AvDrawerHeaderComponent,
    AvDrawerHeadingComponent,
    AvDrawerBodyComponent,
    AvDrawerFooterComponent,
    AvDrawerCloseTriggerComponent,
    AvDrawerCloseDirective,
    AvButtonComponent,
  ],
})
class DrawerHostComponent {
  open = false;
}

@Component({
  template: `
    <av-drawer
      [(open)]="open"
      backdrop="blur"
      backdrop-class="bg-linear-to-t from-black/80 via-black/40 to-transparent"
    >
      <button av-button av-drawer-trigger>Open</button>
      <ng-template avDrawerContent>
        <div av-drawer-dialog>
          <div av-drawer-header>
            <h2 av-drawer-heading>Custom</h2>
          </div>
        </div>
      </ng-template>
    </av-drawer>
  `,
  imports: [
    AvDrawerComponent,
    AvDrawerTriggerDirective,
    AvDrawerContentDirective,
    AvDrawerDialogComponent,
    AvDrawerHeaderComponent,
    AvDrawerHeadingComponent,
    AvButtonComponent,
  ],
})
class DrawerCustomBackdropHostComponent {
  open = false;
}

@Component({
  selector: 'app-drawer-service-panel',
  imports: [
    AvDrawerDialogComponent,
    AvDrawerHeaderComponent,
    AvDrawerHeadingComponent,
    AvDrawerBodyComponent,
    AvDrawerFooterComponent,
    AvDrawerCloseDirective,
    AvButtonComponent,
  ],
  template: `
    <div av-drawer-dialog>
      <div av-drawer-header>
        <h2 av-drawer-heading>{{ title }}</h2>
      </div>
      <div av-drawer-body>
        <p>Service content</p>
      </div>
      <div av-drawer-footer>
        <button av-button [av-drawer-close]="'saved'">Save</button>
      </div>
    </div>
  `,
})
class DrawerServicePanelComponent {
  private readonly data = inject<{ title: string }>(AV_DRAWER_DATA);
  readonly title = this.data.title;
}

describe('AvDrawerComponent', () => {
  let fixture: ComponentFixture<DrawerHostComponent>;
  let host: DrawerHostComponent;
  let overlayContainer: OverlayContainer;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawerHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DrawerHostComponent);
    host = fixture.componentInstance;
    overlayContainer = TestBed.inject(OverlayContainer);
    fixture.detectChanges();
  });

  afterEach(() => {
    overlayContainer.ngOnDestroy();
  });

  it('should open drawer in the overlay when trigger is clicked', () => {
    const trigger = fixture.nativeElement.querySelector('[av-drawer-trigger]') as HTMLButtonElement;
    trigger.click();
    fixture.detectChanges();

    expect(host.open).toBeTrue();
    const dialog = overlayContainer.getContainerElement().querySelector('[av-drawer-dialog]');
    expect(dialog).toBeTruthy();
    expect(dialog?.getAttribute('role')).toBe('dialog');
  });

  it('should close via close directive', fakeAsync(() => {
    const trigger = fixture.nativeElement.querySelector('[av-drawer-trigger]') as HTMLButtonElement;
    trigger.click();
    fixture.detectChanges();

    const closeBtn = overlayContainer
      .getContainerElement()
      .querySelector('[av-drawer-close]') as HTMLButtonElement;
    closeBtn.click();
    fixture.detectChanges();
    tick(AV_DRAWER_EXIT_FALLBACK_MS + 50);
    fixture.detectChanges();

    expect(host.open).toBeFalse();
    expect(overlayContainer.getContainerElement().querySelector('[av-drawer-dialog]')).toBeNull();
  }));
});

describe('AvDrawerComponent custom backdrop', () => {
  let fixture: ComponentFixture<DrawerCustomBackdropHostComponent>;
  let overlayContainer: OverlayContainer;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawerCustomBackdropHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DrawerCustomBackdropHostComponent);
    overlayContainer = TestBed.inject(OverlayContainer);
    fixture.detectChanges();
  });

  afterEach(() => {
    overlayContainer.ngOnDestroy();
  });

  it('should paint custom gradient utilities on the visual backdrop node', () => {
    const trigger = fixture.nativeElement.querySelector('[av-drawer-trigger]') as HTMLButtonElement;
    trigger.click();
    fixture.detectChanges();

    const backdrop = overlayContainer
      .getContainerElement()
      .querySelector('[data-slot="drawer-backdrop"]');

    expect(backdrop).toBeTruthy();
    expect(backdrop?.classList.contains('av-drawer__backdrop--blur')).toBeTrue();
    expect(backdrop?.classList.contains('av-drawer__backdrop--opaque')).toBeFalse();
    expect(backdrop?.classList.contains('bg-linear-to-t')).toBeTrue();
  });
});

describe('AvDrawerService', () => {
  let overlayContainer: OverlayContainer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    overlayContainer = TestBed.inject(OverlayContainer);
  });

  afterEach(() => {
    overlayContainer.ngOnDestroy();
  });

  it('should open a component and emit close result', fakeAsync(() => {
    const service = TestBed.inject(AvDrawerService);
    const results: Array<string | undefined> = [];

    const ref = service.open(DrawerServicePanelComponent, {
      data: { title: 'Edit profile' },
      placement: 'right',
    });

    ref.afterClosed().subscribe((result) => results.push(result as string | undefined));
    tick();

    const heading = overlayContainer.getContainerElement().querySelector('[av-drawer-heading]');
    expect(heading?.textContent).toContain('Edit profile');

    const saveBtn = Array.from(
      overlayContainer.getContainerElement().querySelectorAll('button'),
    ).find((button) => button.textContent?.includes('Save')) as HTMLButtonElement;

    expect(saveBtn).toBeTruthy();
    saveBtn.click();
    tick(AV_DRAWER_EXIT_FALLBACK_MS + 50);

    expect(results).toEqual(['saved']);
  }));
});
