import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class EstadoRequisitoService {

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

  //metodo para insertar un estado de requisito
  addestado(estadorequisito):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('nombre_estado',estadorequisito.nombre);
    return this._http.post(this.url+'insertestadorequisito.php',body,{headers: headers,responseType:'text'});
  }

  //metodo para editar un estdao de unrequisito
  editestadorequisito(estado):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_estado',estado.id_estado)
                                  .set('nombre_estado',estado.nombre);
    return this._http.post(this.url3+'editestadorequisito.php',body,{headers: headers,responseType:'text'});
  }

  //metodo para obtener todos lo estado de la BD
  getestado(): Observable<any>{
    return this._http.get(this.url2+'?opcion=estadorequisito');
  }

  //metodo para obtener un estado en especifico
  getestadoid(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idestadoreq',id);
    return this._http.post(this.url2+'?opcion=getestadorequisitoid',body,{headers: headers,responseType:'text'});
  }

  //metodo para eliminar un estado de requisito
  eliminarestado(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idestadoreq',id);
    return this._http.post(this.url4+'?opcion=eliminarestado',body,{headers: headers,responseType:'text'});
  }

  //metodo para saber si un estado ya fue utilizado
  existeestado(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idestadoreq',id);
    return this._http.post(this.url5+'?opcion=existeestado',body,{headers: headers,responseType:'text'});
  }

}
