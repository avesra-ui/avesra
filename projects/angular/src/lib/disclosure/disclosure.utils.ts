export function avDisclosureClasses(): string {
  return 'av-disclosure';
}

export function avDisclosureHeadingClasses(): string {
  return 'av-disclosure__heading';
}

export function avDisclosureTriggerClasses(): string {
  return 'av-disclosure__trigger';
}

export function avDisclosureContentClasses(): string {
  return 'av-disclosure__content';
}

export function avDisclosureBodyClasses(): string {
  return 'av-disclosure__body';
}

export function avDisclosureIndicatorClasses(): string {
  return 'av-disclosure__indicator';
}

export function measureDisclosurePanelHeight(element: HTMLElement): number {
  if (typeof document === 'undefined') {
    return 0;
  }

  if (element.scrollHeight > 0) {
    return element.scrollHeight;
  }

  let childrenHeight = 0;
  const children = element.children;
  if (children && typeof children[Symbol.iterator] === 'function') {
    for (const child of children) {
      if (child instanceof HTMLElement) {
        childrenHeight += child.offsetHeight;
      }
    }
  }
  if (childrenHeight > 0) {
    return childrenHeight;
  }

  const previous = element.style.getPropertyValue('--av-disclosure-panel-height');
  element.style.setProperty('--av-disclosure-panel-height', 'auto');
  const measured = element.scrollHeight;
  element.style.setProperty('--av-disclosure-panel-height', previous || '0px');
  void element.offsetHeight;
  return measured;
}

export function syncDisclosurePanelHeight(
  element: HTMLElement,
  expanded: boolean,
  animate = true,
): void {
  if (typeof document === 'undefined') {
    return;
  }

  if (expanded) {
    if (!animate) {
      element.style.setProperty(
        '--av-disclosure-panel-height',
        `${measureDisclosurePanelHeight(element)}px`,
      );
      return;
    }

    element.style.setProperty('--av-disclosure-panel-height', '0px');
    void element.offsetHeight;

    const targetHeight = measureDisclosurePanelHeight(element);

    requestAnimationFrame(() => {
      element.style.setProperty('--av-disclosure-panel-height', `${targetHeight}px`);
    });
    return;
  }

  if (animate) {
    const currentHeight = element.scrollHeight;
    if (currentHeight > 0) {
      element.style.setProperty('--av-disclosure-panel-height', `${currentHeight}px`);
      void element.offsetHeight;
    }
    element.style.setProperty('--av-disclosure-panel-height', '0px');
    return;
  }

  element.style.setProperty('--av-disclosure-panel-height', '0px');
}
