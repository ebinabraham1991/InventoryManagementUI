import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingsectionComponent } from './billingsection.component';

describe('BillingsectionComponent', () => {
  let component: BillingsectionComponent;
  let fixture: ComponentFixture<BillingsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingsectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
