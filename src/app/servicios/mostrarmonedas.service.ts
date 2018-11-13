import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrarmonedasService {
  public editcoin: any[];
  constructor() { }

  set(data){
    this.editcoin= data;
  }

  get(){
    return this.editcoin;
  }
}
