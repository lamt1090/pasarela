import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrardeduccionComponent } from './mostrardeduccion.component';

describe('MostrardeduccionComponent', () => {
  let component: MostrardeduccionComponent;
  let fixture: ComponentFixture<MostrardeduccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrardeduccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrardeduccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
