
import {RouterModule, Routes} from '@angular/router';

//component
import { BancoComponent } from './componentes/banco/banco.component';
import { TipoCuentaComponent } from './componentes/tipo-cuenta/tipo-cuenta.component';
import { CuentaBancariaComponent } from './componentes/cuenta-bancaria/cuenta-bancaria.component';
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
import { SucursalComponent } from './componentes/sucursal/sucursal.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { ValidarRequisitosComponent } from './componentes/validar-requisitos/validar-requisitos.component';
import { LoginComponent } from './principales/login/login.component';
import { EditarbancoComponent } from './componentes/bancos/editarbanco/editarbanco.component';
import { MostrarbancoComponent } from './componentes/bancos/mostrarbanco/mostrarbanco.component';
import { EditarcategoriaComponent } from './componentes/categorias/editarcategoria/editarcategoria.component';


export const app_Routes: Routes = [
    {path : 'banco', component : BancoComponent },
    {path : 'cuentabancaria', component : CuentaBancariaComponent },
    {path : 'caja', component : CajaComponent },
	{path : 'categoria', component : CategoriaComponent },
	{path : 'ciudad', component : CiudadComponent },
	{path : 'comercio', component : ComercioComponent },
	{path : 'cuentabancaria', component : CuentaBancariaComponent },
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
	{path : 'usuario', component : UsuarioComponent },
	{path : 'retiro', component : RetiroComponent },
	{path : 'orden', component : OrdenComponent },
	{path : 'validarrequisitos', component : ValidarRequisitosComponent},
	{path : 'editarbanco', component : EditarbancoComponent },
	{path : 'editarcategoria', component : EditarcategoriaComponent },
	{path : 'login', component : LoginComponent },
	{path : '**', component : LoginComponent },
	{path : '', component : LoginComponent },
	
];

export const appRouting = RouterModule.forRoot(app_Routes,{useHash:true});

