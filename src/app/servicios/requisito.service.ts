import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class RequisitoService {

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

  //metodo para insertar un requisito
  addrequisito(requisito):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('name_requisito',requisito.nombre);
    return this._http.post(this.url+'insertrequisito.php',body,{headers: headers,responseType:'text'});
  }

  //metodo para editar un requisito
  editrequisito(requisito):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_requisito',requisito.id_requisito)
                                  .set('name_requisito',requisito.nombre);
    return this._http.post(this.url3+'editrequisito.php',body,{headers: headers,responseType:'text'});
  }

  //metodo para obtener los requisitos de la BD
  getrequisito(): Observable<any>{
    return this._http.get(this.url2+'?opcion=requisito');
  }

  //metodo para obtener un requisito especifico
  getrequisitoid(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idrequisito',id);
    return this._http.post(this.url2+'?opcion=getrequisitoid',body,{headers: headers,responseType:'text'});
  }

  //metodo para eliminar un requisito
  eliminarrequisito(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idrequisito',id);
    return this._http.post(this.url4+'?opcion=eliminarrequisito',body,{headers: headers,responseType:'text'});
  }

  //metodo para saber si un requisito esta siendo utilizado en otra tabla
  existerequisito(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idrequisito',id);
    return this._http.post(this.url5+'?opcion=existerequisito',body,{headers: headers,responseType:'text'});
  }
}
