import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class IvaService {

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

   //metodo para insertar el iva
   addiva(iva):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('valor',iva.valor);
    return this._http.post(this.url+'insertiva.php',body,{headers: headers,responseType:'text'});
  }

  //metodo para editar los registro del iva
  editiva(iva):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_iva',iva.id_iva)
                                  .set('valor',iva.valor);
    return this._http.post(this.url3+'editiva.php',body,{headers: headers,responseType:'text'});
  }

  //metodo para obtener el iva de la BD
  getiva(): Observable<any>{
    return this._http.get(this.url2+'?opcion=iva');
  }

  //metodo para obtener un iva en especifico
  getivaid(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idiva',id);
    return this._http.post(this.url2+'?opcion=getivaid',body,{headers: headers,responseType:'text'});
  }

  //metodo para eliminar un registro de la BD
  eliminariva(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idiva',id);
    return this._http.post(this.url4+'?opcion=eliminariva',body,{headers: headers,responseType:'text'});
  }

  //metodo para saber si el iva es foraneo en otra tablas
  existeiva(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idiva',id);
    return this._http.post(this.url5+'?opcion=existeiva',body,{headers: headers,responseType:'text'});
  }

}
