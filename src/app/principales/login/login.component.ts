import { Component, OnInit } from '@angular/core';
import { LoginModule } from '../../modelos/login/login.module';
import { LoginService } from '../../servicios/login.service';
import { NgForm } from '@angular/forms';
import { appRouting, app_Routes } from '../../app.router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService],
})
export class LoginComponent implements OnInit {
  data: any;
  lg1: any;
  public login : LoginModule;

  constructor(
    private _loginservice: LoginService,
  ) { 
    this.login = new LoginModule("","");
  }

  ngOnInit() {
  }


  onsubmit(){
    let vm = this;

    vm._loginservice.getlogin(vm.login)
    .subscribe(
      res => {
        if(res.code != 200){
            
          this.data=JSON.parse(res);

          if(this.data['status']== false){
            alert("Usuario o clave incorrecta");
          }else{
          alert("Datos correctos");
          
          }
        }else{
            vm = res.data;
        }
      },
      err =>{
        console.log(err);
      } 
    )
  }

}
