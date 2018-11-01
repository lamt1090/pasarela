import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrarbancoService {
  public editbn: any[];
  constructor() { }

  set(data){
    console.log(data);
    this.editbn= data;
    console.log("lo recibi y lo guarde:="+this.editbn);
  }

  get(){
    return this.editbn;
  }
}
