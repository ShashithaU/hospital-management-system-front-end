import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAppoimentComponent } from './details-appoiment.component';

describe('DetailsAppoimentComponent', () => {
  let component: DetailsAppoimentComponent;
  let fixture: ComponentFixture<DetailsAppoimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsAppoimentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsAppoimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
