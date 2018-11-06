import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarivaComponent } from './mostrariva.component';

describe('MostrarivaComponent', () => {
  let component: MostrarivaComponent;
  let fixture: ComponentFixture<MostrarivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
