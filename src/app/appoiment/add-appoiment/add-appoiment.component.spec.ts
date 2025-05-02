import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppoimentComponent } from './add-appoiment.component';

describe('AddAppoimentComponent', () => {
  let component: AddAppoimentComponent;
  let fixture: ComponentFixture<AddAppoimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAppoimentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAppoimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
