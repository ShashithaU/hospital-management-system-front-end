import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecriptionRootComponent } from './precription-root.component';

describe('PrecriptionRootComponent', () => {
  let component: PrecriptionRootComponent;
  let fixture: ComponentFixture<PrecriptionRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrecriptionRootComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrecriptionRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
