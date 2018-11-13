import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarrepresentantelegalComponent } from './editarrepresentantelegal.component';

describe('EditarrepresentantelegalComponent', () => {
  let component: EditarrepresentantelegalComponent;
  let fixture: ComponentFixture<EditarrepresentantelegalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarrepresentantelegalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarrepresentantelegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
