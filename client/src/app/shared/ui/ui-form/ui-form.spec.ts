import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiForm } from './ui-form';

describe('UiForm', () => {
  let component: UiForm;
  let fixture: ComponentFixture<UiForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
