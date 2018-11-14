import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

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

   //metodo para insertar un departamento
   adddepartamento(departamento):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_pais',departamento.npais).set('name_departamento',departamento.nombre);
    return this._http.post(this.url+'insertdepartamento.php',body,{headers: headers,responseType:'text'});
  }

  //metodo para editar un departamento
  editdepartamento(dpto):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_departamento',dpto.id_departamento)
                                  .set('id_pais',dpto.id_pais)
                                  .set('name_departamento',dpto.nombre);
    return this._http.post(this.url3+'editdepartamento.php',body,{headers: headers,responseType:'text'});
  }

  //metodo para obtener los paises y registrar un comercio
  getpaises(): Observable<any>{
    return this._http.get(this.url2+'?opcion=pais');
  }

  //metodo para obtener los departamento que existen
  getdepartamentos(): Observable<any>{
    return this._http.get(this.url2+'?opcion=getdepartamento');
  }

  //metodo para obtener un departamento especifico
  getdepartamentoid(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('iddpto',id);
    return this._http.post(this.url2+'?opcion=getdepartamentoid',body,{headers: headers,responseType:'text'}); 
  }

  //metodo para eliminar un departamento
  eliminardepartamento(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('iddpto',id);
    return this._http.post(this.url4+'?opcion=eliminardepartamento',body,{headers: headers,responseType:'text'});
  }

  //metodo para saber si el departamento que se va a eliminar tiene ciudades creadas
  existedepartamento(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('iddpto',id);
    return this._http.post(this.url5+'?opcion=existedepartamento',body,{headers: headers,responseType:'text'});
  }


}
