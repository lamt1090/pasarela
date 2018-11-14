import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

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

  //metodo para insertar un país
  addpais(pais):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('nombre_pais',pais.nombre);
    return this._http.post(this.url+'insertpais.php',body,{headers: headers,responseType:'text'});
  }

  //metodo para editar un país
  editpais(pais):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_pais',pais.id_pais)
                                  .set('nombre_pais',pais.nombre);
    return this._http.post(this.url3+'editpais.php',body,{headers: headers,responseType:'text'});
  }

  //metodo para obtener los paises de la BD
  getpaises(): Observable<any>{
    return this._http.get(this.url2+'?opcion=pais');
  }

  //metodo para obtener un país en especifico
  getpaisid(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idpais',id);
    return this._http.post(this.url2+'?opcion=getpaisid',body,{headers: headers,responseType:'text'});
  }

  //metodo para eliminar un país 
  eliminarpais(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idpais',id);
    return this._http.post(this.url4+'?opcion=eliminarpais',body,{headers: headers,responseType:'text'});
  }

  //metodo para saber si el país que se va a eliminar tiene departamentos asignados
  existepais(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idpais',id);
    return this._http.post(this.url5+'?opcion=existepais',body,{headers: headers,responseType:'text'});
  }

}
