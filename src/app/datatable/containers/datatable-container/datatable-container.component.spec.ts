import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableContainerComponent } from './datatable-container.component';

describe('DatatableContainerComponent', () => {
  let component: DatatableContainerComponent;
  let fixture: ComponentFixture<DatatableContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DatatableContainerComponent]
    });
    fixture = TestBed.createComponent(DatatableContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
