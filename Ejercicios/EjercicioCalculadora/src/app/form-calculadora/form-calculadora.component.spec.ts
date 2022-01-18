import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCalculadoraComponent } from './form-calculadora.component';

describe('FormCalculadoraComponent', () => {
  let component: FormCalculadoraComponent;
  let fixture: ComponentFixture<FormCalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCalculadoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
