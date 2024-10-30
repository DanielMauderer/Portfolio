import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FermentationPiComponent } from './fermentation-pi.component';

describe('FermentationPiComponent', () => {
  let component: FermentationPiComponent;
  let fixture: ComponentFixture<FermentationPiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FermentationPiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FermentationPiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
