import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarcomercioComponent } from './mostrarcomercio.component';

describe('MostrarcomercioComponent', () => {
  let component: MostrarcomercioComponent;
  let fixture: ComponentFixture<MostrarcomercioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarcomercioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarcomercioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
