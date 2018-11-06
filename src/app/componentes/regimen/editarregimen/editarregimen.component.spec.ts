import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarregimenComponent } from './editarregimen.component';

describe('EditarregimenComponent', () => {
  let component: EditarregimenComponent;
  let fixture: ComponentFixture<EditarregimenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarregimenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarregimenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
