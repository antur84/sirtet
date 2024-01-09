import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LShapeComponent } from './l-shape.component';

describe('LShapeComponent', () => {
  let component: LShapeComponent;
  let fixture: ComponentFixture<LShapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LShapeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LShapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
