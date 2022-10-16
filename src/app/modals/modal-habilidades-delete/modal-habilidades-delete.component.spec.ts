import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHabilidadesDeleteComponent } from './modal-habilidades-delete.component';

describe('ModalHabilidadesDeleteComponent', () => {
  let component: ModalHabilidadesDeleteComponent;
  let fixture: ComponentFixture<ModalHabilidadesDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalHabilidadesDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalHabilidadesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
