import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcursoAdminComponent } from './formcurso-admin.component';

describe('FormcursoAdminComponent', () => {
  let component: FormcursoAdminComponent;
  let fixture: ComponentFixture<FormcursoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormcursoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcursoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
