import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRedesEditComponent } from './modal-redes-edit.component';

describe('ModalRedesEditComponent', () => {
  let component: ModalRedesEditComponent;
  let fixture: ComponentFixture<ModalRedesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRedesEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRedesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
