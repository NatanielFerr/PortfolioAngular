import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { IntroComponent } from './intro/intro.component';
import { BotonAcercadeComponent } from './intro/botones-navbar/boton-acercade/boton-acercade.component';
import { ApartadoAcercademiComponent } from './apartados/apartado-acercademi/apartado-acercademi.component';



const routes: Routes = [
  {path: 'intro', component: IntroComponent,
children :[
  {path: 'acercade', component: ApartadoAcercademiComponent}
]},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'acercademi', component: BotonAcercadeComponent},
  {path: '', redirectTo: '/intro', pathMatch: 'full'},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
