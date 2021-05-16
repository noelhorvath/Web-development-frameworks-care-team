import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareTeamAddComponent } from './care-team-add.component';

describe('CareTeamAddComponent', () => {
  let component: CareTeamAddComponent;
  let fixture: ComponentFixture<CareTeamAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareTeamAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareTeamAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
