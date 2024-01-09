import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSidebarAreaComponent } from './game-sidebar-area.component';

describe('GameSidebarAreaComponent', () => {
  let component: GameSidebarAreaComponent;
  let fixture: ComponentFixture<GameSidebarAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameSidebarAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameSidebarAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
