import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrarrequisitoService {
  public editreq: any[]; //variable para guardar una consulta de la base de datos
  constructor() { }

  //metodo para guardar los datos
  set(data){
    this.editreq= data;
  }

  //metodo para obtener los datos
  get(){
    return this.editreq;
  }
}
