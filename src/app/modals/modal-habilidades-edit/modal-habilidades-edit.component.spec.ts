import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHabilidadesEditComponent } from './modal-habilidades-edit.component';

describe('ModalHabilidadesEditComponent', () => {
  let component: ModalHabilidadesEditComponent;
  let fixture: ComponentFixture<ModalHabilidadesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalHabilidadesEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalHabilidadesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
