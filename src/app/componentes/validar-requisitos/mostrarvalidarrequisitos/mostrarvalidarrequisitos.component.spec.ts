import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarvalidarrequisitosComponent } from './mostrarvalidarrequisitos.component';

describe('MostrarvalidarrequisitosComponent', () => {
  let component: MostrarvalidarrequisitosComponent;
  let fixture: ComponentFixture<MostrarvalidarrequisitosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarvalidarrequisitosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarvalidarrequisitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
