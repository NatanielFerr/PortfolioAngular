import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAcercaDeEditComponent } from './modal-acerca-de-edit.component';

describe('ModalAcercaDeEditComponent', () => {
  let component: ModalAcercaDeEditComponent;
  let fixture: ComponentFixture<ModalAcercaDeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAcercaDeEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAcercaDeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
