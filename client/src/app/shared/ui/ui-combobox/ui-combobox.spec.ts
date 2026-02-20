import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCombobox } from './ui-combobox';

describe('UiCombobox', () => {
  let component: UiCombobox;
  let fixture: ComponentFixture<UiCombobox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiCombobox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiCombobox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
