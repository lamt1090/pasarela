import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class ValidarRequisitosService {

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

  //metodo para ingresar la validación 
   addvalidarrequisito(validarrequisito):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('selrequisito',validarrequisito.nrequisito)
                                .set('selcomercio',validarrequisito.ncomercio)
                                .set('selestado',validarrequisito.vestado)
                                .set('archivo',validarrequisito.archivo);
    return this._http.post(this.url+'insertvalidarrequisito.php',body,{headers: headers,responseType:'text'});
  }

  //metodo para editar una validación
  editvalidarrequisito(validar):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_val_estado',validar.id_val_req)
                                  .set('selrequisito',validar.nrequisito)
                                  .set('selcomercio',validar.ncomercio)
                                  .set('selestado',validar.vestado)
                                  .set('archivo',validar.archivo);
    return this._http.post(this.url3+'editvalidarrequisito.php',body,{headers: headers,responseType:'text'});
  }

  //metodo para obtener los requisitos
  getrequisitos(): Observable<any>{
    return this._http.get(this.url2+'?opcion=requisito');
  }

  //metodo para obtener los comercios
  getcomercios(): Observable<any>{
    return this._http.get(this.url2+'?opcion=comercio');
  }

  //metodo para obtener los estados de los requisitos
  getestadorequisitos(): Observable<any>{
    return this._http.get(this.url2+'?opcion=estadorequisito');
  }

  //metodo para obtener la ultima validación realizada
  getvalidarrequisitos(): Observable<any>{
    return this._http.get(this.url2+'?opcion=getvalidarrequisitos');
  }

  //metodo para obtenet un registro especificico
  getvalidarrequisitosid(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idvalreq',id);
    return this._http.post(this.url2+'?opcion=getvalidarrequisitosid',body,{headers: headers,responseType:'text'});
  }
}
