import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarsubcategoriaComponent } from './mostrarsubcategoria.component';

describe('MostrarsubcategoriaComponent', () => {
  let component: MostrarsubcategoriaComponent;
  let fixture: ComponentFixture<MostrarsubcategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarsubcategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarsubcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
