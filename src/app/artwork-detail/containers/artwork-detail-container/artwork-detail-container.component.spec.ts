import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkDetailContainerComponent } from './artwork-detail-container.component';

describe('ArtworkDetailContainerComponent', () => {
  let component: ArtworkDetailContainerComponent;
  let fixture: ComponentFixture<ArtworkDetailContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtworkDetailContainerComponent]
    });
    fixture = TestBed.createComponent(ArtworkDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
