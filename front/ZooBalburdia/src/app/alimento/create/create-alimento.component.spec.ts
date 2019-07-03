import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAlimentoComponent } from './create-alimento.component';

describe('CreateAlimentoComponent', () => {
  let component: CreateAlimentoComponent;
  let fixture: ComponentFixture<CreateAlimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAlimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAlimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
