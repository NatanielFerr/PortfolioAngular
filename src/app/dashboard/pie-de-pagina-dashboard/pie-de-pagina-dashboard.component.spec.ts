import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieDePaginaDashboardComponent } from './pie-de-pagina-dashboard.component';

describe('PieDePaginaDashboardComponent', () => {
  let component: PieDePaginaDashboardComponent;
  let fixture: ComponentFixture<PieDePaginaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieDePaginaDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieDePaginaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
