import { Component, computed, signal } from '@angular/core';
import { parseDate, parseZonedDateTime, type DateValue } from '@internationalized/date';

import {
  AvDateFieldImports,
  AvLabelComponent,
  AvSelectImports,
  AvTooltipDirective,
  type AvDateFieldGranularity,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex gap-4">
  @for (g of [granularity()]; track g) {
    <div
      av-date-field
      class="w-[256px]"
      name="granularity-date"
      [default-value]="defaultValue()"
      [granularity]="g"
    >
      <label av-label>Appointment Date</label>
      <div av-date-input-group>
        <div av-date-input-group-input></div>
      </div>
    </div>
  }

  <div class="flex flex-col gap-1">
    <div class="flex items-center gap-2">
      <label av-label>Granularity</label>
      <button
        type="button"
        class="inline-flex text-muted"
        aria-label="Granularity information"
        [avTooltip]="granularityTooltip"
        tooltip-position="bottom"
        [show-delay]="0"
      >
        <app-icon icon="solar:question-circle-linear" size="16" />
      </button>
      <ng-template #granularityTooltip>
        <p>
          Determines the smallest unit displayed in the date picker. By default, this is "day"
          for dates, and "minute" for times.
        </p>
      </ng-template>
    </div>

    <div
      av-select
      class="w-[110px]"
      placeholder="Select granularity"
      variant="secondary"
      [(selectedKeys)]="selected"
    >
      <button av-select-trigger type="button">
        <span av-select-value></span>
        <span av-select-indicator></span>
      </button>
      <av-select-popover>
        <div av-list-box>
          @for (option of granularityOptions; track option.id) {
            <div av-list-box-item [id]="option.id" [textValue]="option.label">
              {{ option.label }}
              <span av-list-box-item-indicator></span>
            </div>
          }
        </div>
      </av-select-popover>
    </div>
  </div>
</div>`;

export const DEMO_NAME = 'date-field-granularity';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, computed, signal } from '@angular/core';
import { parseDate, parseZonedDateTime, type DateValue } from '@internationalized/date';
import {
  AvDateFieldImports,
  AvLabelComponent,
  AvSelectImports,
  AvTooltipDirective,
  type AvDateFieldGranularity,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-date-field-granularity-demo',
  imports: [
    AvDateFieldImports,
    AvLabelComponent,
    AvSelectImports,
    AvTooltipDirective,
    AppIconComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DateFieldGranularityDemo {
  readonly granularityOptions = [
    { id: 'day', label: 'Day' },
    { id: 'hour', label: 'Hour' },
    { id: 'minute', label: 'Minute' },
    { id: 'second', label: 'Second' },
  ] as const;

  readonly selected = signal<string[]>(['day']);
  readonly granularity = computed(
    () => (this.selected()[0] as AvDateFieldGranularity) || 'day',
  );

  /** Day granularity uses CalendarDate; otherwise a ZonedDateTime sample. */
  readonly defaultValue = computed<DateValue>(() => {
    if (this.granularity() === 'day') {
      return parseDate('2025-02-03');
    }
    return parseZonedDateTime('2025-02-03T08:45:00[America/Los_Angeles]');
  });
}`;

@Component({
  selector: 'app-date-field-granularity-demo',
  imports: [
    AvDateFieldImports,
    AvLabelComponent,
    AvSelectImports,
    AvTooltipDirective,
    AppIconComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class DateFieldGranularityDemo {
  readonly granularityOptions = [
    { id: 'day', label: 'Day' },
    { id: 'hour', label: 'Hour' },
    { id: 'minute', label: 'Minute' },
    { id: 'second', label: 'Second' },
  ] as const;

  readonly selected = signal<string[]>(['day']);
  readonly granularity = computed(
    () => (this.selected()[0] as AvDateFieldGranularity) || 'day',
  );

  /** Day granularity uses CalendarDate; otherwise a ZonedDateTime sample. */
  readonly defaultValue = computed<DateValue>(() => {
    if (this.granularity() === 'day') {
      return parseDate('2025-02-03');
    }
    return parseZonedDateTime('2025-02-03T08:45:00[America/Los_Angeles]');
  });
}
