import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarregimenComponent } from './mostrarregimen.component';

describe('MostrarregimenComponent', () => {
  let component: MostrarregimenComponent;
  let fixture: ComponentFixture<MostrarregimenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarregimenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarregimenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
