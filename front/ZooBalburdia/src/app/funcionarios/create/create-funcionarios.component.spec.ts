import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFuncionariosComponent } from './create-funcionarios.component';

describe('CreateAlimentoComponent', () => {
  let component: CreateFuncionariosComponent;
  let fixture: ComponentFixture<CreateFuncionariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFuncionariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
