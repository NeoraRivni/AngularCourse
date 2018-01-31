import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderNotProvidComponent } from './order-not-provid.component';

describe('OrderNotProvidComponent', () => {
  let component: OrderNotProvidComponent;
  let fixture: ComponentFixture<OrderNotProvidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderNotProvidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderNotProvidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
