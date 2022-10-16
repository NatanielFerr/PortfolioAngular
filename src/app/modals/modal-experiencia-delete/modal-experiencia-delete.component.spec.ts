import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExperienciaDeleteComponent } from './modal-experiencia-delete.component';

describe('ModalExperienciaDeleteComponent', () => {
  let component: ModalExperienciaDeleteComponent;
  let fixture: ComponentFixture<ModalExperienciaDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalExperienciaDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalExperienciaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
