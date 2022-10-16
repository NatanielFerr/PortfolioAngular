import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProyectosEditComponent } from './modal-proyectos-edit.component';

describe('ModalProyectosEditComponent', () => {
  let component: ModalProyectosEditComponent;
  let fixture: ComponentFixture<ModalProyectosEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalProyectosEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalProyectosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
