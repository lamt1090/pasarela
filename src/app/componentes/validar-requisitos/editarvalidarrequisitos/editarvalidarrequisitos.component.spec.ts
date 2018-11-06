import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarvalidarrequisitosComponent } from './editarvalidarrequisitos.component';

describe('EditarvalidarrequisitosComponent', () => {
  let component: EditarvalidarrequisitosComponent;
  let fixture: ComponentFixture<EditarvalidarrequisitosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarvalidarrequisitosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarvalidarrequisitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
