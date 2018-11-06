import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarestadoComponent } from './mostrarestado.component';

describe('MostrarestadoComponent', () => {
  let component: MostrarestadoComponent;
  let fixture: ComponentFixture<MostrarestadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarestadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarestadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
