import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class DeduccionService {

  public url: string; //url para insertar
  public url2: string; //url para hacer consultas y traer datos
  public url3: string; //url para editar registros
  public url4 : string; //url para eliminar registros

  constructor(
    public _http: HttpClient
  ) { 
    //se asina a cada url la ruta que viene de el servicio global.ts
    this.url= GLOBAL.url;
    this.url2 = GLOBAL.url2;
    this.url3 = GLOBAL.url3;
    this.url4 = GLOBAL.url4;
  }

  //metodo para insertar una deducción
  adddeduccion(deduccion):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('name_deduccion',deduccion.nombre).set('valor_deduccion',deduccion.valor);
    return this._http.post(this.url+'insertdeduccion.php',body,{headers: headers,responseType:'text'});
  }

  //metodo para editar una deducción
  editdeduccion(deduccion):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_deduccion',deduccion.id_deduccion)
                                  .set('name_deduccion',deduccion.nombre)
                                  .set('valor_deduccion',deduccion.valor);
    return this._http.post(this.url3+'editdeduccion.php',body,{headers: headers,responseType:'text'});
  }

  //metodo para obtener las deducciones que hay en la base de datos
  getdeducciones(): Observable<any>{
    return this._http.get(this.url2+'?opcion=getdeduccion');
  }

  //metodo para obtener una deducción especifica
  getdeduccionid(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('iddeduccion',id);
    return this._http.post(this.url2+'?opcion=getiddeduccion',body,{headers: headers,responseType:'text'});
  }

  //metodo para eliminar una deducción
  eliminardeduccion(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('iddeduccion',id);
    return this._http.post(this.url4+'?opcion=eliminardeduccion',body,{headers: headers,responseType:'text'});
  }
}
