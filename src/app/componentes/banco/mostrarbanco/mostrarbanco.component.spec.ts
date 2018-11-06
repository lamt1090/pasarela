import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarbancoComponent } from './mostrarbanco.component';

describe('MostrarbancoComponent', () => {
  let component: MostrarbancoComponent;
  let fixture: ComponentFixture<MostrarbancoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarbancoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarbancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
