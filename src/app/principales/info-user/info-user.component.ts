import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../servicios/login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css']
})
export class InfoUserComponent implements OnInit {

  public loggedIn: boolean;

  constructor(
    public rt : Router,
    private login: LoginService
  ) { }

  ngOnInit() {
  }


  cerrarsesion(){
    this.loggedIn=this.login.logout();
    if(this.loggedIn==false){
      alert("La sesión se ha cerrado");
      this.rt.navigateByUrl('login');
    }else{
      alert("Todavia esta iniciada la sesión");
    }
  }

}
