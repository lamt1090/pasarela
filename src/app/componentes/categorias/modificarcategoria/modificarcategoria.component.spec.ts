import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarcategoriaComponent } from './modificarcategoria.component';

describe('ModificarcategoriaComponent', () => {
  let component: ModificarcategoriaComponent;
  let fixture: ComponentFixture<ModificarcategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarcategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
