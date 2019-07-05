import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAlimentoComponent } from './edit-alimento.component';

describe('EditAlimentoComponent', () => {
  let component: EditAlimentoComponent;
  let fixture: ComponentFixture<EditAlimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAlimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAlimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
