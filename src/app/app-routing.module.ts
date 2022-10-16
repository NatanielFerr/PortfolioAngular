import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { IntroComponent } from './intro/intro.component';
import { ApartadoAcercademiComponent } from './apartados/apartado-acercademi/apartado-acercademi.component';
import { AcercademiDashboardComponent } from './dashboard/acercademi-dashboard/acercademi-dashboard.component';

const routes: Routes = [
  {path: 'intro', component: IntroComponent},
  {path: 'dashboard', component: DashboardComponent,
  children: [{path: 'acercademidashboard', component:AcercademiDashboardComponent}]},
  {path: 'contacto', component: ContactoComponent},
  {path: 'apartadoAcercademi', component: ApartadoAcercademiComponent},
  {path: '', redirectTo: '/intro', pathMatch: 'full'},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
