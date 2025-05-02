import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAppoimentComponent } from './dashboard-appoiment.component';

describe('DashboardAppoimentComponent', () => {
  let component: DashboardAppoimentComponent;
  let fixture: ComponentFixture<DashboardAppoimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardAppoimentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAppoimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
