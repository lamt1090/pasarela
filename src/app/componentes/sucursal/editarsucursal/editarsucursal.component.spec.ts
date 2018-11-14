import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarsucursalComponent } from './editarsucursal.component';

describe('EditarsucursalComponent', () => {
  let component: EditarsucursalComponent;
  let fixture: ComponentFixture<EditarsucursalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarsucursalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarsucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
