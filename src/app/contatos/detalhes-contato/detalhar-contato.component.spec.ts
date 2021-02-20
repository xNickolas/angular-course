import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharContatoComponent } from './detalhar-contato.component';

describe('DetalhesContatoComponent', () => {
  let component: DetalharContatoComponent;
  let fixture: ComponentFixture<DetalharContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalharContatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalharContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
