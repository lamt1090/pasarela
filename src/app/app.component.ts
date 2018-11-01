import { Component } from '@angular/core';
import { LoginService } from './servicios/login.service';
import { ValidoModule } from './modelos/valido/valido.module';
import { IsloginService } from './servicios/islogin.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'portafolio';
  data: ValidoModule;
  public loggedIn: boolean;
  
  constructor(
    private login: LoginService,
    private islogin: IsloginService
  ){
    this.islogin.dataChange.subscribe((data)=>{this.loggedIn=data})
  }

  ngOnInit() {
    this.islogin.dataChange.subscribe((data)=>{this.loggedIn=data})
  }

  
}
