import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../servicios/token.service';
import { IsloginService } from '../../servicios/islogin.service';


@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css']
})
export class InfoUserComponent implements OnInit {

  public loggedIn: any;
  public user: any;

  constructor(
    public rt : Router,
    private tokens: TokenService,
    private islogin: IsloginService
    
  ) { }

  ngOnInit() {
    
  }


  cerrarsesion(){
    this.tokens.remove();
    if(!this.tokens.get()){
      alert("La sesión se ha cerrado");
      this.islogin.setData({success:false});
      this.rt.navigateByUrl('/login');
    }else{
      alert("Todavia esta iniciada la sesión");
    }
  }

  

}
