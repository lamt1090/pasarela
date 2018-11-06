import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditartipocuentaComponent } from './editartipocuenta.component';

describe('EditartipocuentaComponent', () => {
  let component: EditartipocuentaComponent;
  let fixture: ComponentFixture<EditartipocuentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditartipocuentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditartipocuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
