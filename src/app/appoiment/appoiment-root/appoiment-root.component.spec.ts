import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoimentRootComponent } from './appoiment-root.component';

describe('AppoimentRootComponent', () => {
  let component: AppoimentRootComponent;
  let fixture: ComponentFixture<AppoimentRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppoimentRootComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppoimentRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
