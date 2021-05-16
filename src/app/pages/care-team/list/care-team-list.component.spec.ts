import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareTeamListComponent } from './care-team-list.component';

describe('CareTeamListComponent', () => {
  let component: CareTeamListComponent;
  let fixture: ComponentFixture<CareTeamListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareTeamListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareTeamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
