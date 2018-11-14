import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarsucursalComponent } from './mostrarsucursal.component';

describe('MostrarsucursalComponent', () => {
  let component: MostrarsucursalComponent;
  let fixture: ComponentFixture<MostrarsucursalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarsucursalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarsucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
