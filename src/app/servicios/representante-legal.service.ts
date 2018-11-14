import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class RepresentanteLegalService {

  public url2: string; //url para hacer consultas y traer datos
  public url3: string; //url para editar registros
  public url4 : string; //url para eliminar registros
  public url5: string; //url para saber si se puede eliminar un registro, es decir si no es foranea en otra tabla

  constructor(
    public _http: HttpClient
  ) { 
    //se asina a cada url la ruta que viene de el servicio global.ts
    this.url2 = GLOBAL.url2;
    this.url3 = GLOBAL.url3;
    this.url4 = GLOBAL.url4;
    this.url5 = GLOBAL.url5;
  }

  //metodo para editar un representante legal
  editrepresentantelegal(replegal):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('creplegal',replegal.cedula)
                                  .set('nrl',replegal.nombre)
                                  .set('ereplegal',replegal.email)
                                  .set('cereplegal',replegal.celular)
                                  .set('telreplegal',replegal.telefono);
    return this._http.post(this.url3+'editrepresentantelegal.php',body,{headers: headers,responseType:'text'});
  }

  //metodo para obtener todos los representantes de la BD
  getrepresentante(): Observable<any>{
    return this._http.get(this.url2+'?opcion=getrepresentante');
  }

  //metodo para obtener un representante en especifico
  getrepresentanteid(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idreplegal',id);
    return this._http.post(this.url2+'?opcion=getrepresentanteid',body,{headers: headers,responseType:'text'});
  }

  //metodo para eliminar un representante de la base de datos
  eliminarrepresentante(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idreplegal',id);
    return this._http.post(this.url4+'?opcion=eliminarrepresentante',body,{headers: headers,responseType:'text'});
  }

  //metodo para saber si el representante a eliminar tiene un comercio a cargo
  existerepresentante(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idreplegal',id);
    return this._http.post(this.url5+'?opcion=existerepresentante',body,{headers: headers,responseType:'text'});
  }
}
