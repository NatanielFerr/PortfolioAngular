import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProyectosDeleteComponent } from './modal-proyectos-delete.component';

describe('ModalProyectosDeleteComponent', () => {
  let component: ModalProyectosDeleteComponent;
  let fixture: ComponentFixture<ModalProyectosDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalProyectosDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalProyectosDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
