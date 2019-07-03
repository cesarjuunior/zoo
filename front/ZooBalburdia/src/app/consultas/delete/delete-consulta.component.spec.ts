import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConsultaComponent } from './delete-consulta.component';

describe('DeleteAlimentoComponent', () => {
  let component: DeleteConsultaComponent;
  let fixture: ComponentFixture<DeleteConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
