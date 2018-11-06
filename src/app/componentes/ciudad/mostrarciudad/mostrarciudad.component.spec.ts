import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarciudadComponent } from './mostrarciudad.component';

describe('MostrarciudadComponent', () => {
  let component: MostrarciudadComponent;
  let fixture: ComponentFixture<MostrarciudadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarciudadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarciudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
