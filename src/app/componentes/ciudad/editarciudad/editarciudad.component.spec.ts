import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarciudadComponent } from './editarciudad.component';

describe('EditarciudadComponent', () => {
  let component: EditarciudadComponent;
  let fixture: ComponentFixture<EditarciudadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarciudadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarciudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
