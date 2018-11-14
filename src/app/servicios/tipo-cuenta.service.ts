import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class TipoCuentaService {

  public url: string; //url para insertar
  public url2: string; //url para hacer consultas y traer datos
  public url3: string; //url para editar registros
  public url4 : string; //url para eliminar registros

  constructor(
    public _http: HttpClient
  ) { 
    //se asina a cada url la ruta que viene de el servicio global.ts
    this.url = GLOBAL.url;
    this.url2 = GLOBAL.url2;
    this.url3 = GLOBAL.url3;
    this.url4 = GLOBAL.url4;
   }

  //metodo para insertar un tipo de cuenta
   addtipocuenta(tipocuenta):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('name_cuenta',tipocuenta.nombre);
    return this._http.post(this.url+'inserttipocuenta.php',body,{headers: headers,responseType:'text'});
  }

  //metodo para editar un tipo de cuenta
  edittpcuenta(cuenta):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('name_cuenta',cuenta.nombre)
                                  .set('id_tpcuenta',cuenta.id_tipo_cuenta);
    return this._http.post(this.url3+'edittipocuenta.php',body,{headers: headers,responseType:'text'});
  }

  //metodo para obtener los tipos de cuentas de la BD
  gettpcuenta(): Observable<any>{
    return this._http.get(this.url2+'?opcion=tipocuenta');
  }

  //metodo para traer los datos de un atipo de cuenta especifico
  gettpcuentaid(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idtpcuenta',id);
    return this._http.post(this.url2+'?opcion=gettipocuentaid',body,{headers: headers,responseType:'text'});
  }

  //metodo para saber si el tipo de cuenta ya esta asignado
  eliminartpcuenta(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idtpcuenta',id);
    return this._http.post(this.url4+'?opcion=eliminartpcuenta',body,{headers: headers,responseType:'text'});
    
  }
}
