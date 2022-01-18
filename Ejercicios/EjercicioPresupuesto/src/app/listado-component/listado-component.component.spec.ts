import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoComponentComponent } from './listado-component.component';

describe('ListadoComponentComponent', () => {
  let component: ListadoComponentComponent;
  let fixture: ComponentFixture<ListadoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
