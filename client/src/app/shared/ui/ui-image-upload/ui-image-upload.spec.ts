import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiImageUpload } from './ui-image-upload';

describe('UiImageUpload', () => {
  let component: UiImageUpload;
  let fixture: ComponentFixture<UiImageUpload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiImageUpload]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiImageUpload);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
