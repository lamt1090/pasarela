import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarpaisComponent } from './mostrarpais.component';

describe('MostrarpaisComponent', () => {
  let component: MostrarpaisComponent;
  let fixture: ComponentFixture<MostrarpaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarpaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarpaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
