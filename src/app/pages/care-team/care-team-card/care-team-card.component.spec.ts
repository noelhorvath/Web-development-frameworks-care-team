import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareTeamCardComponent } from './care-team-card.component';

describe('CareTeamCardComponent', () => {
  let component: CareTeamCardComponent;
  let fixture: ComponentFixture<CareTeamCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareTeamCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareTeamCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
