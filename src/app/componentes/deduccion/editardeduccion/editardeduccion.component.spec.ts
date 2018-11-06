import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditardeduccionComponent } from './editardeduccion.component';

describe('EditardeduccionComponent', () => {
  let component: EditardeduccionComponent;
  let fixture: ComponentFixture<EditardeduccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditardeduccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditardeduccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
