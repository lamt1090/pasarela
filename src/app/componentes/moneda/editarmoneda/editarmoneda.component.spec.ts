import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarmonedaComponent } from './editarmoneda.component';

describe('EditarmonedaComponent', () => {
  let component: EditarmonedaComponent;
  let fixture: ComponentFixture<EditarmonedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarmonedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarmonedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
