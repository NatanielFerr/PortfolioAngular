import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEducacionDeleteComponent } from './modal-educacion-delete.component';

describe('ModalEducacionDeleteComponent', () => {
  let component: ModalEducacionDeleteComponent;
  let fixture: ComponentFixture<ModalEducacionDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEducacionDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEducacionDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
