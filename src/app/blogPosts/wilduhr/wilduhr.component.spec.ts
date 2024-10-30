import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildUhrComponent } from './wilduhr.component';

describe('WildUhrComponent', () => {
  let component: WildUhrComponent;
  let fixture: ComponentFixture<WildUhrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WildUhrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WildUhrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
