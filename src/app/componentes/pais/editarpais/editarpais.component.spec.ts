import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarpaisComponent } from './editarpais.component';

describe('EditarpaisComponent', () => {
  let component: EditarpaisComponent;
  let fixture: ComponentFixture<EditarpaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarpaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarpaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
