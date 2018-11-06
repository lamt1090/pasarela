import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrarivaService {
  public editiva: any[];
  constructor() { }

  set(data){
    console.log(data);
    this.editiva= data;
    console.log("lo recibi y lo guarde:="+this.editiva);
  }

  get(){
    return this.editiva;
  }
}
