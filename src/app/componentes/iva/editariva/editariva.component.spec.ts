import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarivaComponent } from './editariva.component';

describe('EditarivaComponent', () => {
  let component: EditarivaComponent;
  let fixture: ComponentFixture<EditarivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
