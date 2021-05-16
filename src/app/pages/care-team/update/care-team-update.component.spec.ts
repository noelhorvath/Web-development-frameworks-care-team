import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareTeamUpdateComponent } from './care-team-update.component';

describe('CareTeamUpdateComponent', () => {
  let component: CareTeamUpdateComponent;
  let fixture: ComponentFixture<CareTeamUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareTeamUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareTeamUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
