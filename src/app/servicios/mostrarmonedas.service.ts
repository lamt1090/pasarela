import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrarmonedasService {
  public editcoin: any[];
  constructor() { }

  set(data){
    console.log(data);
    this.editcoin= data;
    console.log("lo recibi y lo guarde:="+this.editcoin);
  }

  get(){
    return this.editcoin;
  }
}
