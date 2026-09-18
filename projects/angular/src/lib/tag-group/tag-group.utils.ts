export interface AvTagGroupClassOptions {}

const AV_TAG_GROUP_BASE = 'av-tag-group';
const AV_TAG_GROUP_LIST_BASE = 'av-tag-group__list';

export function avTagGroupClasses(_options: AvTagGroupClassOptions = {}): string {
  return AV_TAG_GROUP_BASE;
}

export function avTagGroupListClasses(): string {
  return AV_TAG_GROUP_LIST_BASE;
}
