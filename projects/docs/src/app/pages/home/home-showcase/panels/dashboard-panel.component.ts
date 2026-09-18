import { Component, computed, signal } from '@angular/core';

import {
  AvAvatarComponent,
  AvAvatarFallbackComponent,
  AvButtonComponent,
  AvButtonGroupComponent,
  AvButtonGroupSeparatorComponent,
  AvCardComponent,
  AvCardContentComponent,
  AvCardDescriptionComponent,
  AvCardHeaderComponent,
  AvCardTitleComponent,
  AvChipComponent,
  AvChipLabelComponent,
  AvDropdownComponent,
  AvDropdownMenuComponent,
  AvDropdownPopoverComponent,
  AvDropdownTriggerDirective,
  AvInputGroupComponent,
  AvInputGroupInputComponent,
  AvInputGroupPrefixComponent,
  AvLabelComponent,
  AvMenuItemComponent,
  AvMenuItemIndicatorComponent,
  AvTableBodyComponent,
  AvTableCellComponent,
  AvTableColumnComponent,
  AvTableComponent,
  AvTableContentComponent,
  AvTableHeaderComponent,
  AvTableRowComponent,
  AvTableScrollContainerComponent,
  AvTabsComponent,
  AvTabsIndicatorComponent,
  AvTabsListContainerComponent,
  AvTabsListComponent,
  AvTabsTabComponent,
  AvTooltipDirective,
} from '@avesra/angular';

import { AppIconComponent } from '../../../../components/app-icon/app-icon.component';

interface DashboardNavItem {
  label: string;
  icon: string;
  active?: boolean;
  badge?: string;
}

interface DashboardMetric {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  trendIcon: string;
  chipColor: 'success' | 'danger';
}

interface DashboardPeriod {
  id: string;
  label: string;
}

interface DashboardEmployee {
  id: string;
  name: string;
  email: string;
  role: string;
  type: string;
  initials: string;
  avatarClass?: string;
}

@Component({
  selector: 'app-home-dashboard-panel',
  imports: [
    AppIconComponent,
    AvAvatarComponent,
    AvAvatarFallbackComponent,
    AvButtonComponent,
    AvButtonGroupComponent,
    AvButtonGroupSeparatorComponent,
    AvCardComponent,
    AvCardContentComponent,
    AvCardDescriptionComponent,
    AvCardHeaderComponent,
    AvCardTitleComponent,
    AvChipComponent,
    AvChipLabelComponent,
    AvDropdownComponent,
    AvDropdownMenuComponent,
    AvDropdownPopoverComponent,
    AvDropdownTriggerDirective,
    AvInputGroupComponent,
    AvInputGroupInputComponent,
    AvInputGroupPrefixComponent,
    AvLabelComponent,
    AvMenuItemComponent,
    AvMenuItemIndicatorComponent,
    AvTableComponent,
    AvTableScrollContainerComponent,
    AvTableContentComponent,
    AvTableHeaderComponent,
    AvTableColumnComponent,
    AvTableBodyComponent,
    AvTableRowComponent,
    AvTableCellComponent,
    AvTabsComponent,
    AvTabsListContainerComponent,
    AvTabsListComponent,
    AvTabsIndicatorComponent,
    AvTabsTabComponent,
    AvTooltipDirective,
  ],
  templateUrl: './dashboard-panel.component.html',
  styleUrl: './dashboard-panel.component.scss',
})
export class HomeDashboardPanelComponent {
  readonly navItems: DashboardNavItem[] = [
    { label: 'Dashboard', icon: 'solar:widget-2-linear', active: true },
    { label: 'Orders', icon: 'solar:cart-large-2-linear' },
    { label: 'Tracker', icon: 'solar:map-point-linear', badge: 'New' },
    { label: 'Analytics', icon: 'solar:chart-square-linear' },
    { label: 'Settings', icon: 'solar:settings-linear' },
  ];

  readonly footerNavItems: DashboardNavItem[] = [
    { label: 'Help & Information', icon: 'solar:info-circle-linear' },
    { label: 'Log out', icon: 'solar:logout-2-linear' },
  ];

  readonly periods: DashboardPeriod[] = [
    { id: 'daily', label: 'Daily' },
    { id: 'weekly', label: 'Weekly' },
    { id: 'monthly', label: 'Monthly' },
    { id: 'yearly', label: 'Yearly' },
  ];

  selectedPeriod = 'Monthly';

  readonly salesRangeOptions: DashboardPeriod[] = [
    { id: 'last-week', label: 'Last week' },
    { id: 'last-2-weeks', label: 'Last 2 weeks' },
    { id: 'last-month', label: 'Last month' },
    { id: 'last-3-months', label: 'Last 3 months' },
  ];

  readonly selectedSalesRange = signal<string[]>(['last-2-weeks']);

  readonly selectedSalesRangeLabel = computed(() => {
    const selectedId = this.selectedSalesRange()[0];
    return (
      this.salesRangeOptions.find((item) => item.id === selectedId)?.label ?? 'Last 2 weeks'
    );
  });

  readonly metrics: DashboardMetric[] = [
    {
      label: 'Revenue',
      value: '$228,441',
      change: '3.3%',
      trend: 'up',
      trendIcon: 'solar:arrow-up-linear',
      chipColor: 'success',
    },
    {
      label: 'Expenses',
      value: '$25,108',
      change: '3.3%',
      trend: 'down',
      trendIcon: 'solar:arrow-down-linear',
      chipColor: 'danger',
    },
    {
      label: 'Sales',
      value: '458',
      change: '3.3%',
      trend: 'up',
      trendIcon: 'solar:arrow-up-linear',
      chipColor: 'success',
    },
    {
      label: 'Profit',
      value: '$203,133',
      change: '4.1%',
      trend: 'up',
      trendIcon: 'solar:arrow-up-linear',
      chipColor: 'success',
    },
  ];

  readonly employees: DashboardEmployee[] = [
    {
      id: '#4586936',
      name: 'Alex Turner',
      email: 'alex.turner@company.com',
      role: 'Product Manager',
      type: 'Employee',
      initials: 'AT',
      avatarClass: 'av-dashboard-demo__avatar-gradient',
    },
    {
      id: '#4823561',
      name: 'Victoria Huang',
      email: 'victoria.hu@company.com',
      role: 'Chief Technology Officer',
      type: 'Employee',
      initials: 'VH',
      avatarClass: 'av-dashboard-demo__avatar-gradient',
    },
    {
      id: '#4268597',
      name: 'Marcus Johnson',
      email: 'marcus.j@company.com',
      role: 'Operations Lead',
      type: 'Employee',
      initials: 'MJ',
    },
    {
      id: '#4156782',
      name: 'Sara Williams',
      email: 'sara.w@company.com',
      role: 'Head of Design',
      type: 'Employee',
      initials: 'SW',
    },
    {
      id: '#3947125',
      name: 'Daniel Brooks',
      email: 'daniel.b@company.com',
      role: 'Finance Manager',
      type: 'Employee',
      initials: 'DB',
    },
  ];

  onPeriodAction(periodId: string): void {
    const period = this.periods.find((item) => item.id === periodId);
    if (period) {
      this.selectedPeriod = period.label;
    }
  }
}
