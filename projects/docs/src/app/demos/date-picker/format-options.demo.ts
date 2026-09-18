import { Component, computed, signal } from '@angular/core';
import {
  getLocalTimeZone,
  parseDate,
  parseZonedDateTime,
  type DateValue,
} from '@internationalized/date';

import {
  AvDatePickerImports,
  AvLabelComponent,
  AvSelectImports,
  AvSwitchImports,
  type AvDateFieldGranularity,
} from '@avesra/angular';

import { DATE_PICKER_CALENDAR_TEMPLATE } from './calendar-compound';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-4">
  @for (g of [granularity()]; track g + '-' + hourCycle() + '-' + hideTimeZone() + '-' + forceLeadingZeros()) {
    <div
      av-date-picker
      class="w-fit min-w-72"
      name="date"
      [default-value]="defaultValue()"
      [granularity]="g"
      [hour-cycle]="hourCycle()"
      [hide-time-zone]="hideTimeZone()"
      [force-leading-zeros]="forceLeadingZeros()"
      [close-on-select]="g === 'day'"
    >
      <label av-label>Date and time</label>
      <div av-date-input-group full-width>
        <div av-date-input-group-input></div>
        <div av-date-input-group-suffix>
          <button type="button" av-date-picker-trigger>
            <span av-date-picker-trigger-indicator></span>
          </button>
        </div>
      </div>
      <av-date-picker-popover panel-class="flex flex-col gap-3">
        ${DATE_PICKER_CALENDAR_TEMPLATE}
      </av-date-picker-popover>
    </div>
  }

  <div class="flex flex-wrap gap-4">
    <div class="flex flex-col gap-1">
      <div
        av-select
        class="w-[120px]"
        variant="secondary"
        [(selectedKeys)]="granularitySelected"
      >
        <label av-label>Granularity</label>
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

    <div class="flex flex-col gap-1">
      <div
        av-select
        class="w-[120px]"
        variant="secondary"
        [(selectedKeys)]="hourCycleSelected"
      >
        <label av-label>Hour cycle</label>
        <button av-select-trigger type="button">
          <span av-select-value></span>
          <span av-select-indicator></span>
        </button>
        <av-select-popover>
          <div av-list-box>
            @for (option of hourCycleOptions; track option.id) {
              <div av-list-box-item [id]="option.id" [textValue]="option.label">
                {{ option.label }}
                <span av-list-box-item-indicator></span>
              </div>
            }
          </div>
        </av-select-popover>
      </div>
    </div>
  </div>

  <div class="flex min-w-80 flex-col gap-2">
    <div av-switch [(selected)]="hideTimeZone">
      <span av-switch-control>
        <span av-switch-thumb></span>
      </span>
      <span av-switch-content>Hide timezone</span>
    </div>
    <div av-switch [(selected)]="forceLeadingZeros">
      <span av-switch-control>
        <span av-switch-thumb></span>
      </span>
      <span av-switch-content>Force leading zeros</span>
    </div>
  </div>
</div>`;

export const DEMO_NAME = 'date-picker-format-options';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, computed, signal } from '@angular/core';
import {
  getLocalTimeZone,
  parseDate,
  parseZonedDateTime,
  type DateValue,
} from '@internationalized/date';
import {
  AvDatePickerImports,
  AvLabelComponent,
  AvSelectImports,
  AvSwitchImports,
  type AvDateFieldGranularity,
} from '@avesra/angular';

@Component({
  selector: 'app-date-picker-format-options-demo',
  imports: [
    AvDatePickerImports,
    AvLabelComponent,
    AvSelectImports,
    AvSwitchImports,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DatePickerFormatOptionsDemo {
  readonly granularityOptions = [
    { id: 'day', label: 'Day' },
    { id: 'hour', label: 'Hour' },
    { id: 'minute', label: 'Minute' },
    { id: 'second', label: 'Second' },
  ] as const;

  readonly hourCycleOptions = [
    { id: '12', label: '12-hour' },
    { id: '24', label: '24-hour' },
  ] as const;

  readonly granularitySelected = signal<string[]>(['minute']);
  readonly hourCycleSelected = signal<string[]>(['12']);
  readonly hideTimeZone = signal(false);
  readonly forceLeadingZeros = signal(false);

  readonly granularity = computed(
    () => (this.granularitySelected()[0] as AvDateFieldGranularity) || 'minute',
  );

  readonly hourCycle = computed(() => {
    const value = Number(this.hourCycleSelected()[0]);
    return (value === 24 ? 24 : 12) as 12 | 24;
  });

  readonly defaultValue = computed<DateValue>(() => {
    if (this.granularity() === 'day') {
      return parseDate('2026-02-03');
    }
    return parseZonedDateTime(\`2026-02-03T08:45:00[\${getLocalTimeZone()}]\`);
  });
}`;

@Component({
  selector: 'app-date-picker-format-options-demo',
  imports: [
    AvDatePickerImports,
    AvLabelComponent,
    AvSelectImports,
    AvSwitchImports,
  ],
  template: DEMO_TEMPLATE,
})
export class DatePickerFormatOptionsDemo {
  readonly granularityOptions = [
    { id: 'day', label: 'Day' },
    { id: 'hour', label: 'Hour' },
    { id: 'minute', label: 'Minute' },
    { id: 'second', label: 'Second' },
  ] as const;

  readonly hourCycleOptions = [
    { id: '12', label: '12-hour' },
    { id: '24', label: '24-hour' },
  ] as const;

  readonly granularitySelected = signal<string[]>(['minute']);
  readonly hourCycleSelected = signal<string[]>(['12']);
  readonly hideTimeZone = signal(false);
  readonly forceLeadingZeros = signal(false);

  readonly granularity = computed(
    () => (this.granularitySelected()[0] as AvDateFieldGranularity) || 'minute',
  );

  readonly hourCycle = computed(() => {
    const value = Number(this.hourCycleSelected()[0]);
    return (value === 24 ? 24 : 12) as 12 | 24;
  });

  readonly defaultValue = computed<DateValue>(() => {
    if (this.granularity() === 'day') {
      return parseDate('2026-02-03');
    }
    return parseZonedDateTime(`2026-02-03T08:45:00[${getLocalTimeZone()}]`);
  });
}
