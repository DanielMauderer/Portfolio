import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameServerManagerComponent } from './game-server-manager.component';

describe('GameServerManagerComponent', () => {
  let component: GameServerManagerComponent;
  let fixture: ComponentFixture<GameServerManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameServerManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameServerManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
