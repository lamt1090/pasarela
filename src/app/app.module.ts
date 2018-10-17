import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgSelectModule } from '@ng-select/ng-select';

/*rutas*/
import {app_Routes} from './app.router';

//component
import { HeaderComponent } from './principales/header/header.component';
import { InfoUserComponent } from './principales/info-user/info-user.component';
import { MenuComponent } from './principales/menu/menu.component';
import { DesplegarComponent } from './principales/desplegar/desplegar.component';
import { FooterComponent } from './principales/footer/footer.component';
import { BancoComponent } from './componentes/banco/banco.component';
import { TipoCuentaComponent } from './componentes/tipo-cuenta/tipo-cuenta.component';
import { CuentaBancariaComponent } from './componentes/cuenta-bancaria/cuenta-bancaria.component';
import { ContenidoComponent } from './principales/contenido/contenido.component';
import { CajaComponent } from './componentes/caja/caja.component';
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




//servicios
import { BancoService } from './servicios/banco.service';



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
    CuentaBancariaComponent,
    ContenidoComponent,
    CajaComponent,
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
