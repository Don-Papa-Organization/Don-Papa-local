import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiOnlyIconButton } from './ui-only-icon-button';

describe('UiOnlyIconButton', () => {
  let component: UiOnlyIconButton;
  let fixture: ComponentFixture<UiOnlyIconButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiOnlyIconButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiOnlyIconButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
