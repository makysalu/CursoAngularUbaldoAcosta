import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoGastoComponent } from './listado-gasto.component';

describe('ListadoGastoComponent', () => {
  let component: ListadoGastoComponent;
  let fixture: ComponentFixture<ListadoGastoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoGastoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
