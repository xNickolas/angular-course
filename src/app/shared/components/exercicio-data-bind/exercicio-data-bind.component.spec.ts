import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioDataBindComponent } from './exercicio-data-bind.component';

describe('ExercicioDataBindComponent', () => {
  let component: ExercicioDataBindComponent;
  let fixture: ComponentFixture<ExercicioDataBindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicioDataBindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioDataBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
