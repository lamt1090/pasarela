import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarmonedaComponent } from './mostrarmoneda.component';

describe('MostrarmonedaComponent', () => {
  let component: MostrarmonedaComponent;
  let fixture: ComponentFixture<MostrarmonedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarmonedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarmonedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
