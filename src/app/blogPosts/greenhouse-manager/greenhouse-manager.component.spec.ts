import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenhouseManagerComponent } from './greenhouse-manager.component';

describe('GreenhouseManagerComponent', () => {
  let component: GreenhouseManagerComponent;
  let fixture: ComponentFixture<GreenhouseManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreenhouseManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GreenhouseManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
