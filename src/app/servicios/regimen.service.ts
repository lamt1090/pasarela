import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class RegimenService {

  public url: string; //url para insertar
  public url2: string; //url para hacer consultas y traer datos
  public url3: string; //url para editar registros
  public url4 : string; //url para eliminar registros
  public url5: string; //url para saber si se puede eliminar un registro, es decir si no es foranea en otra tabla

  constructor(
    public _http: HttpClient
  ) { 
    //se asina a cada url la ruta que viene de el servicio global.ts
    this.url = GLOBAL.url;
    this.url2 = GLOBAL.url2;
    this.url3 = GLOBAL.url3;
    this.url4 = GLOBAL.url4;
    this.url5 = GLOBAL.url5;
  }

  //metodo para insertar un regimen
  addregimen(regimen):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('name_regimen',regimen.nombre);
    return this._http.post(this.url+'insertregimen.php',body,{headers: headers,responseType:'text'});
  }

  //metodo para editar un regimen
  editregimen(regimen):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_regimen',regimen.id_regimen)
                                  .set('name_regimen',regimen.nombre);
    return this._http.post(this.url3+'editregimen.php',body,{headers: headers,responseType:'text'});
  }

  //metodo para obtener los regimen de la BD
  getregimen(): Observable<any>{
    return this._http.get(this.url2+'?opcion=regimen');
  }

  //metodo para obtener los datos de un regimen especifico 
  getregimenid(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idregimen',id);
    return this._http.post(this.url2+'?opcion=getregimenid',body,{headers: headers,responseType:'text'});
  }

  //metodo para eliminar un regimen
  eliminarregimen(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idregimen',id);
    return this._http.post(this.url4+'?opcion=eliminarregimen',body,{headers: headers,responseType:'text'});
  }

  //metodo para saber si un regimen esta en otra tabla
  existeregimen(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idregimen',id);
    return this._http.post(this.url5+'?opcion=existeregimen',body,{headers: headers,responseType:'text'});
  }

}
