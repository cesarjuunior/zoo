import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAlimentoComponent } from './delete-alimento.component';

describe('DeleteAlimentoComponent', () => {
  let component: DeleteAlimentoComponent;
  let fixture: ComponentFixture<DeleteAlimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAlimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAlimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
