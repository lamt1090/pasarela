import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarrolComponent } from './editarrol.component';

describe('EditarrolComponent', () => {
  let component: EditarrolComponent;
  let fixture: ComponentFixture<EditarrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
