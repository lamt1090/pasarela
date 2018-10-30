import { Component } from '@angular/core';
import { LoginService } from './servicios/login.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService]
})
export class AppComponent {
  
  title = 'portafolio';
  //private sesion = new BehaviorSubject<boolean>(this.login.isLoggedOut());
  public loggedIn: boolean;

  //authStatus = this.sesion.asObservable();
  
  constructor(
    private login: LoginService
  ){}

  ngOnInit() {
    console.log(this.login.authStatus.subscribe(value =>this.loggedIn = value));  
    console.log(this.loggedIn);
  }

  
}
