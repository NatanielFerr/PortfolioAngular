import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRedesDeleteComponent } from './modal-redes-delete.component';

describe('ModalRedesDeleteComponent', () => {
  let component: ModalRedesDeleteComponent;
  let fixture: ComponentFixture<ModalRedesDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRedesDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRedesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
