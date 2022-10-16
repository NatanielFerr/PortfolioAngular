import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './intro/navbar/navbar.component';
import { RedessocialesComponent } from './intro/redessociales/redessociales.component';
import { ModalLoginComponent } from './modals/modal-login/modal-login.component';
import { ModalsComponent } from './modals/modals.component';
import { BannerComponent } from './intro/banner/banner.component';
import { ApartadoAcercademiComponent } from './apartados/apartado-acercademi/apartado-acercademi.component';
import { ApartadoExperienciaComponent } from './apartados/apartado-experiencia/apartado-experiencia.component';
import { ApartadoEducacionComponent } from './apartados/apartado-educacion/apartado-educacion.component';
import { ApartadoHabilidadesComponent } from './apartados/apartado-habilidades/apartado-habilidades.component';
import { ApartadoProyectosComponent } from './apartados/apartado-proyectos/apartado-proyectos.component';
import { ApartadosComponent } from './apartados/apartados.component';
import { PieDePaginaComponent } from './intro/pie-de-pagina/pie-de-pagina.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { IntroComponent } from './intro/intro.component';
import { BotonLoginComponent } from './intro/boton-login/boton-login.component';
import { NavbarDashboardComponent } from './dashboard/navbar-dashboard/navbar-dashboard.component';
import { BotonLogoutComponent } from './dashboard/boton-logout/boton-logout.component';
import { BotonesEdicionComponent } from './dashboard/botones-edicion/botones-edicion.component';
import { ModalLogoutComponent } from './modals/modal-logout/modal-logout.component';
import { ModalRedesEditComponent } from './modals/modal-redes-edit/modal-redes-edit.component';
import { ModalRedesDeleteComponent } from './modals/modal-redes-delete/modal-redes-delete.component';
import { ModalBannerComponent } from './modals/modal-banner/modal-banner.component';
import { ModalPerfilComponent } from './modals/modal-perfil/modal-perfil.component';
import { ModalPerfilNombreComponent } from './modals/modal-perfil-nombre/modal-perfil-nombre.component';
import { ModalAcercaDeEditComponent } from './modals/modal-acerca-de-edit/modal-acerca-de-edit.component';
import { ModalAcercaDeDeleteComponent } from './modals/modal-acerca-de-delete/modal-acerca-de-delete.component';
import { ModalExperienciaEditComponent } from './modals/modal-experiencia-edit/modal-experiencia-edit.component';
import { ModalExperienciaDeleteComponent } from './modals/modal-experiencia-delete/modal-experiencia-delete.component';
import { ModalEducacionEditComponent } from './modals/modal-educacion-edit/modal-educacion-edit.component';
import { ModalEducacionDeleteComponent } from './modals/modal-educacion-delete/modal-educacion-delete.component';
import { ModalHabilidadesEditComponent } from './modals/modal-habilidades-edit/modal-habilidades-edit.component';
import { ModalHabilidadesDeleteComponent } from './modals/modal-habilidades-delete/modal-habilidades-delete.component';
import { ModalProyectosEditComponent } from './modals/modal-proyectos-edit/modal-proyectos-edit.component';
import { ModalProyectosDeleteComponent } from './modals/modal-proyectos-delete/modal-proyectos-delete.component';
import { ModalBotonDeDescargaEditComponent } from './modals/modal-boton-de-descarga-edit/modal-boton-de-descarga-edit.component';
import { AcercademiDashboardComponent } from './dashboard/acercademi-dashboard/acercademi-dashboard.component';
import { BannerDashboardComponent } from './dashboard/banner-dashboard/banner-dashboard.component';
import { ExperienciaDashboardComponent } from './dashboard/experiencia-dashboard/experiencia-dashboard.component';
import { EducacionDashboardComponent } from './dashboard/educacion-dashboard/educacion-dashboard.component';
import { HabilidadesDashboardComponent } from './dashboard/habilidades-dashboard/habilidades-dashboard.component';
import { ProyectosDashboardComponent } from './dashboard/proyectos-dashboard/proyectos-dashboard.component';
import { EdicionRedesComponent } from './dashboard/botones-edicion/edicion-redes/edicion-redes.component';
import { PieDePaginaDashboardComponent } from './dashboard/pie-de-pagina-dashboard/pie-de-pagina-dashboard.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ApartadosDashboardComponent } from './dashboard/apartados-dashboard/apartados-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RedessocialesComponent,
    ModalLoginComponent,
    ModalsComponent,
    BannerComponent,
    ApartadoAcercademiComponent,
    ApartadoExperienciaComponent,
    ApartadoEducacionComponent,
    ApartadoHabilidadesComponent,
    ApartadoProyectosComponent,
    ApartadosComponent,
    PieDePaginaComponent,
    DashboardComponent,
    ErrorComponent,
    IntroComponent,
    BotonLoginComponent,
    NavbarDashboardComponent,
    BotonLogoutComponent,
    BotonesEdicionComponent,
    ModalLogoutComponent,
    ModalRedesEditComponent,
    ModalRedesDeleteComponent,
    ModalBannerComponent,
    ModalPerfilComponent,
    ModalPerfilNombreComponent,
    ModalAcercaDeEditComponent,
    ModalAcercaDeDeleteComponent,
    ModalExperienciaEditComponent,
    ModalExperienciaDeleteComponent,
    ModalEducacionEditComponent,
    ModalEducacionDeleteComponent,
    ModalHabilidadesEditComponent,
    ModalHabilidadesDeleteComponent,
    ModalProyectosEditComponent,
    ModalProyectosDeleteComponent,
    ModalBotonDeDescargaEditComponent,
    AcercademiDashboardComponent,
    BannerDashboardComponent,
    ExperienciaDashboardComponent,
    EducacionDashboardComponent,
    HabilidadesDashboardComponent,
    ProyectosDashboardComponent,
    EdicionRedesComponent,
    PieDePaginaDashboardComponent,
    ContactoComponent,
    ApartadosDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
