import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPerfilNombreComponent } from './modal-perfil-nombre.component';

describe('ModalPerfilNombreComponent', () => {
  let component: ModalPerfilNombreComponent;
  let fixture: ComponentFixture<ModalPerfilNombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPerfilNombreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPerfilNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
