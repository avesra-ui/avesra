import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  AvCardComponent,
  AvCardContentComponent,
  AvCardDescriptionComponent,
  AvCardFooterComponent,
  AvCardHeaderComponent,
  AvCardTitleComponent,
} from './index';
import type { AvCardVariant } from './card.utils';

@Component({
  template: `
    <div av-card [variant]="variant" class="w-[400px]">
      <div av-card-header>
        <h3 av-card-title>{{ title }}</h3>
        <p av-card-description>{{ description }}</p>
      </div>
      <div av-card-content>
        <p>{{ content }}</p>
      </div>
      <div av-card-footer>
        <button type="button">Action</button>
      </div>
    </div>
  `,
  imports: [
    AvCardComponent,
    AvCardHeaderComponent,
    AvCardTitleComponent,
    AvCardDescriptionComponent,
    AvCardContentComponent,
    AvCardFooterComponent,
  ],
})
class CardHostComponent {
  variant: AvCardVariant = 'default';
  title = 'Card Title';
  description = 'Card description text';
  content = 'Main content area';
}

describe('AvCardComponent', () => {
  let fixture: ComponentFixture<CardHostComponent>;
  let host: CardHostComponent;
  let card: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
    card = fixture.nativeElement.querySelector('[data-slot="card"]')!;
  });

  it('should create with default modifier classes', () => {
    expect(card.classList.contains('av-card')).toBeTrue();
    expect(card.classList.contains('av-card--default')).toBeTrue();
  });

  it('should apply updated variant classes', () => {
    host.variant = 'tertiary';
    fixture.detectChanges();

    expect(card.classList.contains('av-card--tertiary')).toBeTrue();
  });

  it('should render compound card slots', () => {
    const header = card.querySelector('[data-slot="card-header"]');
    const title = card.querySelector('[data-slot="card-title"]');
    const description = card.querySelector('[data-slot="card-description"]');
    const content = card.querySelector('[data-slot="card-content"]');
    const footer = card.querySelector('[data-slot="card-footer"]');

    expect(header?.classList.contains('av-card__header')).toBeTrue();
    expect(title?.classList.contains('av-card__title')).toBeTrue();
    expect(title?.textContent?.trim()).toBe('Card Title');
    expect(description?.classList.contains('av-card__description')).toBeTrue();
    expect(description?.textContent?.trim()).toBe('Card description text');
    expect(content?.classList.contains('av-card__content')).toBeTrue();
    expect(footer?.classList.contains('av-card__footer')).toBeTrue();
  });
});
