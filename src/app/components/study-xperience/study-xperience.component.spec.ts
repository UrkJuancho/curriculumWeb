import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyXperienceComponent } from './study-xperience.component';

describe('StudyXperienceComponent', () => {
  let component: StudyXperienceComponent;
  let fixture: ComponentFixture<StudyXperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudyXperienceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudyXperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
