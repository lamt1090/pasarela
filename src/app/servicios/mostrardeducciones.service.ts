import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrardeduccionesService {
  public editdeduccion: any[];//variable para guardar una consulta de la base de datos
  constructor() { }

  //metodo para guardar los datos
  set(data){
    this.editdeduccion= data;
  }

  //metodo para obtener los datos
  get(){
    return this.editdeduccion;
  }
}
