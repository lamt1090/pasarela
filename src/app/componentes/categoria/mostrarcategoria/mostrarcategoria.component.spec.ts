import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarcategoriaComponent } from './mostrarcategoria.component';

describe('MostrarcategoriaComponent', () => {
  let component: MostrarcategoriaComponent;
  let fixture: ComponentFixture<MostrarcategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarcategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
