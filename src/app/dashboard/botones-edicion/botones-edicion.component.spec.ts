import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesEdicionComponent } from './botones-edicion.component';

describe('BotonesEdicionComponent', () => {
  let component: BotonesEdicionComponent;
  let fixture: ComponentFixture<BotonesEdicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonesEdicionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonesEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
