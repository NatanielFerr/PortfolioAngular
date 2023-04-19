import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercademiDashboardComponent } from './acercademi-dashboard.component';

describe('AcercademiDashboardComponent', () => {
  let component: AcercademiDashboardComponent;
  let fixture: ComponentFixture<AcercademiDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercademiDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercademiDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
