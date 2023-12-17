import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationInfoComponent } from './population-info.component';

describe('PopulationInfoComponent', () => {
  let component: PopulationInfoComponent;
  let fixture: ComponentFixture<PopulationInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopulationInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopulationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
