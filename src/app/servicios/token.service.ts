import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  public user: any;
  constructor() { }

  set(token){
    localStorage.setItem("algo",JSON.stringify(token))
  }

  setuser(token){
    this.user=token;
  }

  get(){
    return localStorage.getItem('algo');
  }

  remove(){
    localStorage.removeItem('algo');
  }

  isvalid(){
    const token = this.get();
    if(token){
      return true;
    }else{
      return false;
    }
  }

  loggedIn(){
    return this.isvalid();
  }


}

