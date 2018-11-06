import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrartipocuentaComponent } from './mostrartipocuenta.component';

describe('MostrartipocuentaComponent', () => {
  let component: MostrartipocuentaComponent;
  let fixture: ComponentFixture<MostrartipocuentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrartipocuentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrartipocuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
