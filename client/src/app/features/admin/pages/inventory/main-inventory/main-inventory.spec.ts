import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainInventory } from './main-inventory';

describe('MainInventory', () => {
  let component: MainInventory;
  let fixture: ComponentFixture<MainInventory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainInventory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainInventory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
