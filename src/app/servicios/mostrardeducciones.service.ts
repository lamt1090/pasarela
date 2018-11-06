import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrardeduccionesService {
  public editdeduccion: any[];
  constructor() { }

  set(data){
    console.log(data);
    this.editdeduccion= data;
    console.log("lo recibi y lo guarde:="+this.editdeduccion);
  }

  get(){
    return this.editdeduccion;
  }
}
