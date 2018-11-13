import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarrepresentantelegalComponent } from './mostrarrepresentantelegal.component';

describe('MostrarrepresentantelegalComponent', () => {
  let component: MostrarrepresentantelegalComponent;
  let fixture: ComponentFixture<MostrarrepresentantelegalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarrepresentantelegalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarrepresentantelegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
