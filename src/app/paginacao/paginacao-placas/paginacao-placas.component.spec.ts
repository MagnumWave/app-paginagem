import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginacaoPlacasComponent } from './paginacao-placas.component';

describe('PaginacaoPlacasComponent', () => {
  let component: PaginacaoPlacasComponent;
  let fixture: ComponentFixture<PaginacaoPlacasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginacaoPlacasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginacaoPlacasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
