
import {RouterModule, Routes} from '@angular/router';

//component
import { BancoComponent } from './componentes/banco/banco.component';
import { TipoCuentaComponent } from './componentes/tipo-cuenta/tipo-cuenta.component';
import { CategoriaComponent } from './componentes/categoria/categoria.component';
import { CiudadComponent } from './componentes/ciudad/ciudad.component';
import { ComercioComponent } from './componentes/comercio/comercio.component';
import { DeduccionComponent } from './componentes/deduccion/deduccion.component';
import { DepartamentoComponent } from './componentes/departamento/departamento.component';
import { EstadoRequisitoComponent } from './componentes/estado-requisito/estado-requisito.component';
import { IvaComponent } from './componentes/iva/iva.component';
import { MonedaComponent } from './componentes/moneda/moneda.component';
import { PaisComponent } from './componentes/pais/pais.component';
import { RegimenComponent } from './componentes/regimen/regimen.component';
import { RepresentanteLegalComponent } from './componentes/representante-legal/representante-legal.component';
import { RequisitoComponent } from './componentes/requisito/requisito.component';
import { RolComponent } from './componentes/rol/rol.component';
import { SubcategoriaComponent } from './componentes/subcategoria/subcategoria.component';
import { SucursalComponent } from './componentes/sucursal/sucursal.component';
import { ValidarRequisitosComponent } from './componentes/validar-requisitos/validar-requisitos.component';
import { LoginComponent } from './principales/login/login.component';
import { EditarcategoriaComponent } from './componentes/categoria/editarcategoria/editarcategoria.component';
import { EditarbancoComponent } from './componentes/banco/editarbanco/editarbanco.component';
import { EditarciudadComponent } from './componentes/ciudad/editarciudad/editarciudad.component';
import { EditarcomercioComponent } from './componentes/comercio/editarcomercio/editarcomercio.component';
import { EditardeduccionComponent } from './componentes/deduccion/editardeduccion/editardeduccion.component';
import { EditardepartamentoComponent } from './componentes/departamento/editardepartamento/editardepartamento.component';
import { EditarestadoComponent } from './componentes/estado-requisito/editarestado/editarestado.component';
import { EditarivaComponent } from './componentes/iva/editariva/editariva.component';
import { EditarmonedaComponent } from './componentes/moneda/editarmoneda/editarmoneda.component';
import { EditarpaisComponent } from './componentes/pais/editarpais/editarpais.component';
import { EditarregimenComponent } from './componentes/regimen/editarregimen/editarregimen.component';
import { EditarrequisitoComponent } from './componentes/requisito/editarrequisito/editarrequisito.component';
import { EditarrolComponent } from './componentes/rol/editarrol/editarrol.component';
import { EditarsubcategoriaComponent } from './componentes/subcategoria/editarsubcategoria/editarsubcategoria.component';
import { EditartipocuentaComponent } from './componentes/tipo-cuenta/editartipocuenta/editartipocuenta.component';
import { EditarvalidarrequisitosComponent } from './componentes/validar-requisitos/editarvalidarrequisitos/editarvalidarrequisitos.component';
import { MostrarcomercioComponent } from './componentes/comercio/mostrarcomercio/mostrarcomercio.component';
import { MostrarrepresentantelegalComponent } from './componentes/representante-legal/mostrarrepresentantelegal/mostrarrepresentantelegal.component';
import { EditarrepresentantelegalComponent } from './componentes/representante-legal/editarrepresentantelegal/editarrepresentantelegal.component';


export const app_Routes: Routes = [
    {path : 'banco', component : BancoComponent },
	{path : 'categoria', component : CategoriaComponent },
	{path : 'ciudad', component : CiudadComponent },
	{path : 'comercio', component : ComercioComponent },
	{path : 'deduccion', component : DeduccionComponent },
	{path : 'departamento', component : DepartamentoComponent },
	{path : 'estadorequisito', component : EstadoRequisitoComponent },
	{path : 'iva', component : IvaComponent },
	{path : 'moneda', component : MonedaComponent },
	{path : 'pais', component : PaisComponent },
	{path : 'regimen', component : RegimenComponent },
	{path : 'representantelegal', component : RepresentanteLegalComponent },
	{path : 'requisitos', component : RequisitoComponent },
	{path : 'rol', component : RolComponent },
	{path : 'subcategoria', component : SubcategoriaComponent },
	{path : 'sucursal', component : SucursalComponent },
	{path : 'tipocuenta', component : TipoCuentaComponent },
	{path : 'validarrequisitos', component : ValidarRequisitosComponent},
	{path : 'editarbanco', component : EditarbancoComponent },
	{path : 'editarcategoria', component : EditarcategoriaComponent },
	{path : 'editarciudad', component : EditarciudadComponent },
	{path : 'editarcomercio', component : EditarcomercioComponent },
	{path : 'editardeduccion', component : EditardeduccionComponent },
	{path : 'editardepartamento', component : EditardepartamentoComponent },
	{path : 'editarestadorequisito', component : EditarestadoComponent },
	{path : 'editariva', component : EditarivaComponent },
	{path : 'editarmoneda', component : EditarmonedaComponent },
	{path : 'editarpais', component : EditarpaisComponent },
	{path : 'editarregimen', component : EditarregimenComponent },
	{path : 'editarrequisito', component : EditarrequisitoComponent },
	{path : 'editarrol', component : EditarrolComponent },
	{path : 'editarsubcategoria', component : EditarsubcategoriaComponent },
	{path : 'editartipocuenta', component : EditartipocuentaComponent },
	{path : 'editarvalidarrequisito', component : EditarvalidarrequisitosComponent },
	{path : 'mostrarcomercio', component : MostrarcomercioComponent },
	{path : 'mostrarrepresentantelegal', component : MostrarrepresentantelegalComponent },
	{path : 'editarrepresentantelegal', component : EditarrepresentantelegalComponent },
	{path : 'login', component : LoginComponent },
	{path : '**', component : LoginComponent },
	{path : '', component : LoginComponent },
	
];

export const appRouting = RouterModule.forRoot(app_Routes,{useHash:true});

