import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkXperienceComponent } from './work-xperience.component';

describe('WorkXperienceComponent', () => {
  let component: WorkXperienceComponent;
  let fixture: ComponentFixture<WorkXperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkXperienceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkXperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
