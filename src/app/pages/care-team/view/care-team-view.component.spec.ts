import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareTeamViewComponent } from './care-team-view.component';

describe('CareTeamViewComponent', () => {
  let component: CareTeamViewComponent;
  let fixture: ComponentFixture<CareTeamViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareTeamViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareTeamViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
