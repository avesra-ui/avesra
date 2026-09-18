export const SNIPPET_ID = 'toast-anatomy';
export const SNIPPET_LANG = 'typescript';
export const SNIPPET_SOURCE = `import { provideAvesraToast, AvToastService } from '@avesra/angular';

// app.config.ts
providers: [provideAvesraToast()]

// Root template — toast region (optional icon slots)
<av-toast placement="bottom">
  <!-- <ng-template #successIcon>…</ng-template> -->
</av-toast>

// Anywhere — inject and publish
private readonly toast = inject(AvToastService);

this.toast.add('Title', {
  description: 'Optional description',
  variant: 'success',
  actionLabel: 'Undo',
  action: () => undefined,
});

this.toast.promise(save(), {
  loading: 'Saving…',
  success: 'Saved',
  error: 'Failed',
});`;
