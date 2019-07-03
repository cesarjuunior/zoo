import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConsultaComponent } from './list-consulta.component';

describe('ListAlimentoComponent', () => {
  let component: ListConsultaComponent;
  let fixture: ComponentFixture<ListConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
