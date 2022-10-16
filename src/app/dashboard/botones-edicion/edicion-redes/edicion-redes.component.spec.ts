import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionRedesComponent } from './edicion-redes.component';

describe('EdicionRedesComponent', () => {
  let component: EdicionRedesComponent;
  let fixture: ComponentFixture<EdicionRedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionRedesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicionRedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
