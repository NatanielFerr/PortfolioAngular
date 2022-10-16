import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBotonDeDescargaEditComponent } from './modal-boton-de-descarga-edit.component';

describe('ModalBotonDeDescargaEditComponent', () => {
  let component: ModalBotonDeDescargaEditComponent;
  let fixture: ComponentFixture<ModalBotonDeDescargaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBotonDeDescargaEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalBotonDeDescargaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
