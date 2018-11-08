import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, FormGroup } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgSelectModule } from '@ng-select/ng-select';

/*rutas*/
import { app_Routes } from './app.router';

//component
import { HeaderComponent } from './principales/header/header.component';
import { InfoUserComponent } from './principales/info-user/info-user.component';
import { MenuComponent } from './principales/menu/menu.component';
import { DesplegarComponent } from './principales/desplegar/desplegar.component';
import { FooterComponent } from './principales/footer/footer.component';
import { BancoComponent } from './componentes/banco/banco.component';
import { TipoCuentaComponent } from './componentes/tipo-cuenta/tipo-cuenta.component';
import { ContenidoComponent } from './principales/contenido/contenido.component';
import { CategoriaComponent } from './componentes/categoria/categoria.component';
import { CiudadComponent } from './componentes/ciudad/ciudad.component';
import { ComercioComponent } from './componentes/comercio/comercio.component';
import { DeduccionComponent } from './componentes/deduccion/deduccion.component';
import { DepartamentoComponent } from './componentes/departamento/departamento.component';
import { EstadoRequisitoComponent } from './componentes/estado-requisito/estado-requisito.component';
import { IvaComponent } from './componentes/iva/iva.component';
import { MonedaComponent } from './componentes/moneda/moneda.component';
import { OrdenComponent } from './componentes/orden/orden.component';
import { PaisComponent } from './componentes/pais/pais.component';
import { RegimenComponent } from './componentes/regimen/regimen.component';
import { RepresentanteLegalComponent } from './componentes/representante-legal/representante-legal.component';
import { RequisitoComponent } from './componentes/requisito/requisito.component';
import { RetiroComponent } from './componentes/retiro/retiro.component';
import { RolComponent } from './componentes/rol/rol.component';
import { SubcategoriaComponent } from './componentes/subcategoria/subcategoria.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { SucursalComponent } from './componentes/sucursal/sucursal.component';
import { ValidarRequisitosComponent } from './componentes/validar-requisitos/validar-requisitos.component';
import { LoginComponent } from './principales/login/login.component';
import { EditarciudadComponent } from './componentes/ciudad/editarciudad/editarciudad.component';
import { MostrarciudadComponent } from './componentes/ciudad/mostrarciudad/mostrarciudad.component';
import { MostrarcomercioComponent } from './componentes/comercio/mostrarcomercio/mostrarcomercio.component';
import { EditarcomercioComponent } from './componentes/comercio/editarcomercio/editarcomercio.component';
import { EditardeduccionComponent } from './componentes/deduccion/editardeduccion/editardeduccion.component';
import { MostrardeduccionComponent } from './componentes/deduccion/mostrardeduccion/mostrardeduccion.component';
import { MostrardepartamentoComponent } from './componentes/departamento/mostrardepartamento/mostrardepartamento.component';
import { EditardepartamentoComponent } from './componentes/departamento/editardepartamento/editardepartamento.component';
import { EditarestadoComponent } from './componentes/estado-requisito/editarestado/editarestado.component';
import { MostrarestadoComponent } from './componentes/estado-requisito/mostrarestado/mostrarestado.component';
import { MostrarivaComponent } from './componentes/iva/mostrariva/mostrariva.component';
import { EditarivaComponent } from './componentes/iva/editariva/editariva.component';
import { EditarmonedaComponent } from './componentes/moneda/editarmoneda/editarmoneda.component';
import { MostrarmonedaComponent } from './componentes/moneda/mostrarmoneda/mostrarmoneda.component';
import { MostrarpaisComponent } from './componentes/pais/mostrarpais/mostrarpais.component';
import { EditarpaisComponent } from './componentes/pais/editarpais/editarpais.component';
import { EditarregimenComponent } from './componentes/regimen/editarregimen/editarregimen.component';
import { MostrarregimenComponent } from './componentes/regimen/mostrarregimen/mostrarregimen.component';
import { MostrarrequisitoComponent } from './componentes/requisito/mostrarrequisito/mostrarrequisito.component';
import { EditarrequisitoComponent } from './componentes/requisito/editarrequisito/editarrequisito.component';
import { EditarrolComponent } from './componentes/rol/editarrol/editarrol.component';
import { MostrarrolComponent } from './componentes/rol/mostrarrol/mostrarrol.component';
import { MostrarsubcategoriaComponent } from './componentes/subcategoria/mostrarsubcategoria/mostrarsubcategoria.component';
import { EditarsubcategoriaComponent } from './componentes/subcategoria/editarsubcategoria/editarsubcategoria.component';
import { EditartipocuentaComponent } from './componentes/tipo-cuenta/editartipocuenta/editartipocuenta.component';
import { MostrartipocuentaComponent } from './componentes/tipo-cuenta/mostrartipocuenta/mostrartipocuenta.component';
import { MostrarvalidarrequisitosComponent } from './componentes/validar-requisitos/mostrarvalidarrequisitos/mostrarvalidarrequisitos.component';
import { EditarvalidarrequisitosComponent } from './componentes/validar-requisitos/editarvalidarrequisitos/editarvalidarrequisitos.component';
import { MostrarcategoriaComponent } from './componentes/categoria/mostrarcategoria/mostrarcategoria.component';
import { MostrarbancoComponent } from './componentes/banco/mostrarbanco/mostrarbanco.component';
import { EditarbancoComponent } from './componentes/banco/editarbanco/editarbanco.component';
import { EditarcategoriaComponent } from './componentes/categoria/editarcategoria/editarcategoria.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoUserComponent,
    MenuComponent,
    DesplegarComponent,
    FooterComponent,
    BancoComponent,
    TipoCuentaComponent,
    ContenidoComponent,
    CategoriaComponent,
    CiudadComponent,
    ComercioComponent,
    DeduccionComponent,
    DepartamentoComponent,
    EstadoRequisitoComponent,
    IvaComponent,
    MonedaComponent,
    OrdenComponent,
    PaisComponent,
    RegimenComponent,
    RepresentanteLegalComponent,
    RequisitoComponent,
    RetiroComponent,
    RolComponent,
    SubcategoriaComponent,
    UsuarioComponent,
    SucursalComponent,
    ValidarRequisitosComponent,
    LoginComponent,
    EditarciudadComponent,
    MostrarciudadComponent,
    MostrarcomercioComponent,
    EditarcomercioComponent,
    EditardeduccionComponent,
    MostrardeduccionComponent,
    MostrardepartamentoComponent,
    EditardepartamentoComponent,
    EditarestadoComponent,
    MostrarestadoComponent,
    MostrarivaComponent,
    EditarivaComponent,
    EditarmonedaComponent,
    MostrarmonedaComponent,
    MostrarpaisComponent,
    EditarpaisComponent,
    EditarregimenComponent,
    MostrarregimenComponent,
    MostrarrequisitoComponent,
    EditarrequisitoComponent,
    EditarrolComponent,
    MostrarrolComponent,
    MostrarsubcategoriaComponent,
    EditarsubcategoriaComponent,
    EditartipocuentaComponent,
    MostrartipocuentaComponent,
    MostrarvalidarrequisitosComponent,
    EditarvalidarrequisitosComponent,
    MostrarcategoriaComponent,
    MostrarbancoComponent,
    EditarbancoComponent,
    EditarcategoriaComponent,    
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(app_Routes),
    FormsModule,
    HttpClientModule,
    NgSelectModule,

  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
