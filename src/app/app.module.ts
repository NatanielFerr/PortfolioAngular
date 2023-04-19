
//Importación de modulos
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



//Importación de componentes
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
import { AcercademiDashboardComponent } from './dashboard/acercademi-dashboard/acercademi-dashboard.component';
import { BannerDashboardComponent } from './dashboard/banner-dashboard/banner-dashboard.component';
import { ExperienciaDashboardComponent } from './dashboard/experiencia-dashboard/experiencia-dashboard.component';
import { EducacionDashboardComponent } from './dashboard/educacion-dashboard/educacion-dashboard.component';
import { ProyectosDashboardComponent } from './dashboard/proyectos-dashboard/proyectos-dashboard.component';
import { EdicionRedesComponent } from './dashboard/botones-edicion/edicion-redes/edicion-redes.component';
import { PieDePaginaDashboardComponent } from './dashboard/pie-de-pagina-dashboard/pie-de-pagina-dashboard.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ApartadosDashboardComponent } from './dashboard/apartados-dashboard/apartados-dashboard.component';
import { BotonesNavbarComponent } from './intro/botones-navbar/botones-navbar.component';
import { BotonAcercadeComponent } from './intro/botones-navbar/boton-acercade/boton-acercade.component';
import { BotonProyectosComponent } from './intro/botones-navbar/boton-proyectos/boton-proyectos.component';
import { BotonMasComponent } from './intro/botones-navbar/boton-mas/boton-mas.component';
import { BotonExperienciaComponent } from './intro/botones-navbar/boton-experiencia/boton-experiencia.component';
import { BotonEducacionComponent } from './intro/botones-navbar/boton-educacion/boton-educacion.component';
import { BotonHabilidadesComponent } from './intro/botones-navbar/boton-habilidades/boton-habilidades.component';
import { BotonContactoComponent } from './intro/botones-navbar/boton-contacto/boton-contacto.component';
import { NavbarContactoComponent } from './contacto/navbar-contacto/navbar-contacto.component';
import { ModalRedesAddComponent } from './modals/modal-redes-add/modal-redes-add.component';
import { ModalHabilidadesAddComponent } from './modals/modal-habilidades-add/modal-habilidades-add.component';
import { ModalProyectosAddComponent } from './modals/modal-proyectos-add/modal-proyectos-add.component';
import { InterceptorService } from './servicios/interceptor.service';
import { ModalExperienciaAddComponent } from './modals/modal-experiencia-add/modal-experiencia-add.component';
import { ModalEducacionAddComponent } from './modals/modal-educacion-add/modal-educacion-add.component';

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
    AcercademiDashboardComponent,
    BannerDashboardComponent,
    ExperienciaDashboardComponent,
    EducacionDashboardComponent,
    ProyectosDashboardComponent,
    EdicionRedesComponent,
    PieDePaginaDashboardComponent,
    ContactoComponent,
    ApartadosDashboardComponent,
    BotonesNavbarComponent,
    BotonAcercadeComponent,
    BotonProyectosComponent,
    BotonMasComponent,
    BotonExperienciaComponent,
    BotonEducacionComponent,
    BotonHabilidadesComponent,
    BotonContactoComponent,
    NavbarContactoComponent,
    ModalRedesAddComponent,
    ModalHabilidadesAddComponent,
    ModalProyectosAddComponent,
    ModalExperienciaAddComponent,
    ModalEducacionAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [InterceptorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
