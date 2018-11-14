import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

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

  //metodo para insertar una ciudad
  addciudad(ciudad):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_departamento',ciudad.dep).set('name_ciudad',ciudad.nombre);
    return this._http.post(this.url+'insertciudad.php',body,{headers: headers,responseType:'text'});
  }

  //metodo para editar una ciudad
  editciudad(ciudad):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_ciudad',ciudad.id_ciudad)
                                .set('id_departamento',ciudad.id_departamento)
                                .set('name_ciudad',ciudad.nombre);
    return this._http.post(this.url3+'editciudad.php',body,{headers: headers,responseType:'text'});
  }

  //metodo para obtener los departamentos y poder insertar una ciudad
  getdepartamentos(): Observable<any>{
    return this._http.get(this.url2+'?opcion=departamento');
  }

  //metodo para obtener las ciudades que hay en la base de datos
  getciudades(): Observable<any>{
    return this._http.get(this.url2+'?opcion=getciudad');
  }

  //metodo para obtener una ciudad en especifico
  getciudadid(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idciudad',id);
    return this._http.post(this.url2+'?opcion=getciudadid',body,{headers: headers,responseType:'text'});
  }

  //metodo para eliminar una ciudad
  eliminarciudad(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idciudad',id);
    return this._http.post(this.url4+'?opcion=eliminarciudad',body,{headers: headers,responseType:'text'});
  }

  //metodo para ver si existe una sucursal que este en la ciudad a eliminar
  existeciudad(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idciudad',id);
    return this._http.post(this.url5+'?opcion=existeciudad',body,{headers: headers,responseType:'text'});
  }
}
