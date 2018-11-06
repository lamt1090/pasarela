import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrarciudadService {
  public editciudad: any[];
  constructor() { }

  set(data){
    console.log(data);
    this.editciudad= data;
    console.log("lo recibi y lo guarde:="+this.editciudad);
  }

  get(){
    return this.editciudad;
  }
}
