import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarrequisitoComponent } from './mostrarrequisito.component';

describe('MostrarrequisitoComponent', () => {
  let component: MostrarrequisitoComponent;
  let fixture: ComponentFixture<MostrarrequisitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarrequisitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarrequisitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
