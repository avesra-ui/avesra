import { AvDisclosureGroupComponent } from './disclosure-group.component';
import { AvDisclosureImports } from '../disclosure/disclosure.imports';

export const AvDisclosureGroupImports = [
  AvDisclosureGroupComponent,
  ...AvDisclosureImports,
] as const;
