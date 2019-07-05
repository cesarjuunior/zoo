import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAlimentoComponent } from './list-alimento.component';

describe('ListAlimentoComponent', () => {
  let component: ListAlimentoComponent;
  let fixture: ComponentFixture<ListAlimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAlimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAlimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
