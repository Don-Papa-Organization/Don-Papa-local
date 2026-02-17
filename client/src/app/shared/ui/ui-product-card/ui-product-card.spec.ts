import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiProductCard } from './ui-product-card';

describe('UiProductCard', () => {
  let component: UiProductCard;
  let fixture: ComponentFixture<UiProductCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiProductCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiProductCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
