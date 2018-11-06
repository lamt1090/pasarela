import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarestadoComponent } from './editarestado.component';

describe('EditarestadoComponent', () => {
  let component: EditarestadoComponent;
  let fixture: ComponentFixture<EditarestadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarestadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarestadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
