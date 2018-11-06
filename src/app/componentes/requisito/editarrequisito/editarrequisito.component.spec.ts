import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarrequisitoComponent } from './editarrequisito.component';

describe('EditarrequisitoComponent', () => {
  let component: EditarrequisitoComponent;
  let fixture: ComponentFixture<EditarrequisitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarrequisitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarrequisitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
