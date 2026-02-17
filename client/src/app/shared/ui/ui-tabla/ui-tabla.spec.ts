import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTabla } from './ui-tabla';

describe('UiTabla', () => {
  let component: UiTabla;
  let fixture: ComponentFixture<UiTabla>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiTabla]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiTabla);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
