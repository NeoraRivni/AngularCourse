import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInOrderComponent } from './item-in-order.component';

describe('ItemInOrderComponent', () => {
  let component: ItemInOrderComponent;
  let fixture: ComponentFixture<ItemInOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemInOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemInOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
