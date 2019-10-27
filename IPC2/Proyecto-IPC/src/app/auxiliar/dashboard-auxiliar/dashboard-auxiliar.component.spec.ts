import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAuxiliarComponent } from './dashboard-auxiliar.component';

describe('DashboardAuxiliarComponent', () => {
  let component: DashboardAuxiliarComponent;
  let fixture: ComponentFixture<DashboardAuxiliarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAuxiliarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAuxiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
