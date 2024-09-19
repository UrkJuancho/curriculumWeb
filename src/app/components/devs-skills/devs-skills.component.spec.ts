import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevsSkillsComponent } from './devs-skills.component';

describe('DevsSkillsComponent', () => {
  let component: DevsSkillsComponent;
  let fixture: ComponentFixture<DevsSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevsSkillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevsSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
