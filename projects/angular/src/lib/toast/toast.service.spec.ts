import { TestBed } from '@angular/core/testing';

import { AvToastService } from './toast.service';

describe('AvToastService', () => {
  let service: AvToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AvToastService],
    });

    service = TestBed.inject(AvToastService);
  });

  it('should add a message to the store', () => {
    const id = service.add('Hello', { description: 'World' });

    expect(id).toContain('av-toast-');
    expect(service.messages().length).toBe(1);
    expect(service.messages()[0]).toEqual(
      jasmine.objectContaining({
        id,
        title: 'Hello',
        description: 'World',
        variant: 'default',
      }),
    );
  });

  it('should emit variant helpers', () => {
    service.success('Saved');
    service.danger('Failed');
    service.info('Info');
    service.warning('Warn');

    expect(service.messages().length).toBe(4);
    expect(service.messages()[3]).toEqual(jasmine.objectContaining({ variant: 'success' }));
    expect(service.messages()[2]).toEqual(jasmine.objectContaining({ variant: 'danger' }));
    expect(service.messages()[1]).toEqual(jasmine.objectContaining({ variant: 'accent' }));
    expect(service.messages()[0]).toEqual(jasmine.objectContaining({ variant: 'warning' }));
  });

  it('should request dismiss on clear', () => {
    const id = service.add('One');
    service.clear();

    expect(service.dismissRequests().has(id)).toBe(true);
  });

  it('should request dismiss on close', () => {
    const id = service.add('One');
    service.close(id);

    expect(service.dismissRequests().has(id)).toBe(true);
  });

  it('should remove a message from the store', () => {
    const id = service.add('One');
    service.remove(id);

    expect(service.messages().length).toBe(0);
  });

  it('should update a message in place', () => {
    const id = service.add('Loading', { isLoading: true, life: 0, sticky: true });

    service.update(id, {
      title: 'Done',
      isLoading: false,
      variant: 'success',
      sticky: false,
      life: 4000,
    });

    expect(service.messages()[0]).toEqual(
      jasmine.objectContaining({
        id,
        title: 'Done',
        variant: 'success',
        isLoading: false,
        updated: true,
      }),
    );
  });

  it('should resolve promise toasts to success', async () => {
    const id = service.promise(Promise.resolve('draft.md'), {
      loading: 'Saving…',
      success: (name) => `Saved ${name}`,
      error: 'Failed',
    });

    expect(service.messages()[0]).toEqual(
      jasmine.objectContaining({
        id,
        title: 'Saving…',
        isLoading: true,
      }),
    );

    await Promise.resolve();
    await Promise.resolve();

    expect(service.messages()[0]).toEqual(
      jasmine.objectContaining({
        id,
        title: 'Saved draft.md',
        variant: 'success',
        isLoading: false,
      }),
    );
  });

  it('should resolve promise toasts to danger on reject', async () => {
    const id = service.promise(Promise.reject(new Error('offline')), {
      loading: 'Saving…',
      success: 'Saved',
      error: (err) => (err instanceof Error ? err.message : 'Failed'),
    });

    await Promise.resolve();
    await Promise.resolve();

    expect(service.messages()[0]).toEqual(
      jasmine.objectContaining({
        id,
        title: 'offline',
        variant: 'danger',
        isLoading: false,
      }),
    );
  });
});
