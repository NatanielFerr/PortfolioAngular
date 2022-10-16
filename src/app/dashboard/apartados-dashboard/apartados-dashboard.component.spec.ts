import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartadosDashboardComponent } from './apartados-dashboard.component';

describe('ApartadosDashboardComponent', () => {
  let component: ApartadosDashboardComponent;
  let fixture: ComponentFixture<ApartadosDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApartadosDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApartadosDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
