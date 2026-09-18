export interface AvDisclosureGroupNavigationOptions {
  expandedKeys: Set<string>;
  itemIds: string[];
  onExpandedChange: (keys: Set<string>) => void;
  allowsMultipleExpanded?: boolean;
}

export interface AvDisclosureGroupNavigationResult {
  currentIndex: number;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
  onPrevious: () => void;
  onNext: () => void;
}

export function avDisclosureGroupNavigation({
  allowsMultipleExpanded = false,
  expandedKeys,
  itemIds,
  onExpandedChange,
}: AvDisclosureGroupNavigationOptions): AvDisclosureGroupNavigationResult {
  const expandedItems = itemIds.filter((id) => expandedKeys.has(id));
  const currentItem = expandedItems.length > 0 ? expandedItems[0] : itemIds[0];
  const currentIndex = currentItem ? itemIds.indexOf(currentItem) : -1;

  const onPrevious = (): void => {
    if (currentIndex <= 0) {
      return;
    }

    const prevItem = itemIds[currentIndex - 1];
    if (!prevItem) {
      return;
    }

    if (allowsMultipleExpanded) {
      const newKeys = new Set(expandedKeys);
      newKeys.add(prevItem);
      onExpandedChange(newKeys);
    } else {
      onExpandedChange(new Set([prevItem]));
    }
  };

  const onNext = (): void => {
    if (currentIndex >= itemIds.length - 1) {
      return;
    }

    const nextItem = itemIds[currentIndex + 1];
    if (!nextItem) {
      return;
    }

    if (allowsMultipleExpanded) {
      const newKeys = new Set(expandedKeys);
      newKeys.add(nextItem);
      onExpandedChange(newKeys);
    } else {
      onExpandedChange(new Set([nextItem]));
    }
  };

  return {
    currentIndex,
    isPrevDisabled: currentIndex <= 0,
    isNextDisabled: currentIndex >= itemIds.length - 1,
    onPrevious,
    onNext,
  };
}
