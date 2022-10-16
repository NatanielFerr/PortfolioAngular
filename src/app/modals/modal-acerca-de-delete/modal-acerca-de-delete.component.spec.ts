import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAcercaDeDeleteComponent } from './modal-acerca-de-delete.component';

describe('ModalAcercaDeDeleteComponent', () => {
  let component: ModalAcercaDeDeleteComponent;
  let fixture: ComponentFixture<ModalAcercaDeDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAcercaDeDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAcercaDeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
