import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionIssueComponent } from './prescription-issue.component';

describe('PrescriptionIssueComponent', () => {
  let component: PrescriptionIssueComponent;
  let fixture: ComponentFixture<PrescriptionIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrescriptionIssueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrescriptionIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
