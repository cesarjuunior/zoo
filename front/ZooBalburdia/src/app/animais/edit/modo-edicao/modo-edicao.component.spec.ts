import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModoEdicaoComponent } from './modo-edicao.component';

describe('ModoEdicaoComponent', () => {
  let component: ModoEdicaoComponent;
  let fixture: ComponentFixture<ModoEdicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModoEdicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModoEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
