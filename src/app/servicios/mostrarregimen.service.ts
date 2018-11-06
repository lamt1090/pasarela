import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrarregimenService {
  public editregimen: any[];
  constructor() { }

  set(data){
    console.log(data);
    this.editregimen= data;
    console.log("lo recibi y lo guarde:="+this.editregimen);
  }

  get(){
    return this.editregimen;
  }
}
