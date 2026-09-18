import { AvTabsInkBar } from './tabs.ink-bar';

describe('AvTabsInkBar', () => {
  let inkBar: AvTabsInkBar;
  let listEl: HTMLElement;
  let tabA: HTMLElement;
  let tabB: HTMLElement;

  beforeEach(() => {
    inkBar = new AvTabsInkBar();
    listEl = document.createElement('div');
    tabA = document.createElement('button');
    tabB = document.createElement('button');
    listEl.append(tabA, tabB);
    document.body.append(listEl);

    listEl.getBoundingClientRect = () =>
      ({
        left: 0,
        top: 0,
        width: 200,
        height: 40,
        right: 200,
        bottom: 40,
        x: 0,
        y: 0,
        toJSON: () => ({}),
      }) as DOMRect;

    tabA.getBoundingClientRect = () =>
      ({
        left: 0,
        top: 0,
        width: 80,
        height: 32,
        right: 80,
        bottom: 32,
        x: 0,
        y: 0,
        toJSON: () => ({}),
      }) as DOMRect;

    tabB.getBoundingClientRect = () =>
      ({
        left: 80,
        top: 0,
        width: 80,
        height: 32,
        right: 160,
        bottom: 32,
        x: 80,
        y: 0,
        toJSON: () => ({}),
      }) as DOMRect;
  });

  afterEach(() => {
    listEl.remove();
  });

  it('should position indicator over the selected tab', () => {
    expect(inkBar.alignToElement(listEl, tabA, 'default', 'horizontal')).toEqual({
      translate: '0px 0px',
      width: '80px',
      height: '32px',
    });
  });

  it('should animate indicator geometry when selection changes', () => {
    inkBar.alignToElement(listEl, tabA, 'default', 'horizontal');

    expect(inkBar.alignToElement(listEl, tabB, 'default', 'horizontal')).toEqual({
      translate: '80px 0px',
      width: '80px',
      height: '32px',
    });
  });

  it('should use underline geometry for secondary horizontal tabs', () => {
    expect(inkBar.alignToElement(listEl, tabB, 'secondary', 'horizontal')).toEqual({
      translate: '80px 0px',
      width: '80px',
      height: null,
    });
  });
});
