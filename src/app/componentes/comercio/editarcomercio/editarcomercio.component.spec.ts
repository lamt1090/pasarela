import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarcomercioComponent } from './editarcomercio.component';

describe('EditarcomercioComponent', () => {
  let component: EditarcomercioComponent;
  let fixture: ComponentFixture<EditarcomercioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarcomercioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarcomercioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
