import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  {path: 'intro', component: IntroComponent},
  {path: '', redirectTo: '/intro', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
