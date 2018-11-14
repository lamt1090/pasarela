import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class RolService {

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

  //metodo para insertar un rol
  addrol(rol):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('name_rol',rol.nombre);
    return this._http.post(this.url+'insertrol.php',body,{headers: headers,responseType:'text'});
  }

  //metodo para editarun rol
  editrol(rol):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_rol',rol.id_rol)
                                  .set('name_rol',rol.nombre);
    return this._http.post(this.url3+'editrol.php',body,{headers: headers,responseType:'text'});
  }

  //metodo para obtner los roles de la BD
  getrol(): Observable<any>{
    return this._http.get(this.url2+'?opcion=rol');
  }

  //metodo para obtener un rol en especifico
  getrolid(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idrol',id);
    return this._http.post(this.url2+'?opcion=getrolid',body,{headers: headers,responseType:'text'});
  }

  //metodo para eliminar un rol
  eliminarrol(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idrol',id);
    return this._http.post(this.url4+'?opcion=eliminarrol',body,{headers: headers,responseType:'text'});
  }

  //metodo para saber si el rol a eliminar esta siendo utilizado
  existerol(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idrol',id);
    return this._http.post(this.url5+'?opcion=existerol',body,{headers: headers,responseType:'text'});
  }
}
