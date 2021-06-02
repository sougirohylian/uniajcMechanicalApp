import { BrowserModule } from '@angular/platform-browser';
import "@angular/localize/init";
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { ArticuloService } from './articulos/articulo.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormComponent } from './articulos/form.component';
import "@angular/compiler";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { EstadoComponent } from './estado/estado.component';
import { FiltroComponent } from './filtro/filtro.component';
import { CodificacionComponent } from './codificacion/codificacion.component';
import { GramaticayformaComponent } from './gramaticayforma/gramaticayforma.component';
import { LoginComponent } from './usuarios/login.component'
import { AuthGuard } from './usuarios/guards/auth.guard'
import { PreAuthGuard } from './usuarios/guards/preauth.guard'
import { RoleGuard } from './usuarios/guards/role.guard'
import { TokenInterceptor } from './usuarios/interceptors/token.interceptor'
import { AuthInterceptor } from './usuarios/interceptors/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EvaluadorAsignacionComponent } from './evaluador/evaluador-asignacion.component'
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { RevcontenidoComponent } from './evaluador/revcontenido.component';
import { RoleSelectorComponent } from './usuarios/roleSelector.component';
import { RegistroComponent } from './usuarios/registro.component';
import { ValidarCorreoComponent } from './validar-correo/validar-correo.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { RecuperarContrasenaComponent } from './usuarios/recuperar-contrasena.component';
import { CambiarContrasenaComponent } from './usuarios/cambiar-contrasena.component';



const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'articulos', component: ArticulosComponent, canActivate:[AuthGuard]},
  {path: 'articulos/form', component: FormComponent, canActivate:[AuthGuard, RoleGuard], data:{role: 'ROLE_AUTOR'}},
  {path: 'articulos/form/:id', component: FormComponent, canActivate:[AuthGuard, RoleGuard], data:{role: 'ROLE_AUTOR'}},
  {path: 'codificacion/:id', component: CodificacionComponent, canActivate:[AuthGuard, RoleGuard], data:{role: 'ROLE_COORDINADOR'}},
  {path: 'gramaticayforma/:id', component: GramaticayformaComponent, canActivate:[AuthGuard, RoleGuard], data:{role: 'ROLE_COORDINADOR'}},
  {path: 'login', component: LoginComponent},
  {path: 'evaluadorAsignacion/:id', component: EvaluadorAsignacionComponent, canActivate:[AuthGuard, RoleGuard], data:{role: 'ROLE_COORDINADOR'}},
  {path: 'evaluadorRevision/:id', component: RevcontenidoComponent, canActivate:[AuthGuard, RoleGuard], data:{role: 'ROLE_EVALUADOR'}},
  {path: 'roleSelector', component: RoleSelectorComponent, canActivate:[PreAuthGuard]},
  {path: 'registro/:id', component: RegistroComponent},
  {path: 'validarCorreo/:id', component: ValidarCorreoComponent},
  {path: 'solicitudes', component: SolicitudesComponent, canActivate:[AuthGuard, RoleGuard], data:{role: 'ROLE_COORDINADOR'}},
  {path: 'cambiarContraseña', component: RecuperarContrasenaComponent},
  {path: 'cambiarContrasena/:id', component: CambiarContrasenaComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ArticulosComponent,
    FormComponent,
    EstadoComponent,
    FiltroComponent,
    CodificacionComponent,
    GramaticayformaComponent,
    LoginComponent,
    EvaluadorAsignacionComponent,
    RevcontenidoComponent,
    RoleSelectorComponent,
    RegistroComponent,
    ValidarCorreoComponent,
    SolicitudesComponent,
    RecuperarContrasenaComponent,
    CambiarContrasenaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatSlideToggleModule,
  ],
  providers: [ArticuloService,
              { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
            { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},],
  bootstrap: [AppComponent]
})
export class AppModule { }
