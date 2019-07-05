import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFuncionariosComponent } from './delete-funcionarios.component';

describe('DeleteAlimentoComponent', () => {
  let component: DeleteFuncionariosComponent;
  let fixture: ComponentFixture<DeleteFuncionariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteFuncionariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
