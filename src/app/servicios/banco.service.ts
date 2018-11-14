import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';


@Injectable({
  providedIn: 'root'
})
export class BancoService {
  
  public url: string; //url para insertar
  public url2: string; //url para hacer consultas y traer datos
  public url3: string; //url para editar registros
  public url4 : string; //url para eliminar registros

  constructor(
    public _http: HttpClient
  ) {
    //se asina a cada url la ruta que viene de el servicio global.ts
      this.url = GLOBAL.url;
      this.url2 = GLOBAL.url2;
      this.url3 = GLOBAL.url3;
      this.url4 = GLOBAL.url4;
   }

  getBanco(){
    return "los datos se han guardado correctamente"; 
  } 
  //metodo para insertar nuevos bancos
  addbanco(banco):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('nombre_banco',banco.nombre);
    return this._http.post(this.url+'insertbanco.php',body,{headers: headers,responseType:'text'});
  }

  //metodo para hacer las actualizaciones de los bancos
  editbanco(banco):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('nombre_banco',banco.nombre)
                                  .set('id_banco',banco.id_banco);
    return this._http.post(this.url3+'editbanco.php',body,{headers: headers,responseType:'text'});
  }

  //metodo para obtener los bancos que existen en la base de datos
  getbancos(): Observable<any>{
    return this._http.get(this.url2+'?opcion=banco');
  }

  //metodo para obtener un banco en especifico
  getbancoid(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_banco',id);
    return this._http.post(this.url2+'?opcion=getbanco',body,{headers: headers,responseType:'text'});
    
  }

  //metodo para eliminar un banco
  eliminarbanco(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idbanco',id);
    return this._http.post(this.url4+'?opcion=eliminarbanco',body,{headers: headers,responseType:'text'});
  }

}

