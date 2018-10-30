import { Component, OnInit } from '@angular/core';
import { LoginModule } from '../../modelos/login/login.module';
import { LoginService } from '../../servicios/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService],
})
export class LoginComponent implements OnInit {
  data: any;
  formlogin : NgForm;
  submitted = false;
  cooki: any;
  loading = false;
  loggedIn: boolean;
  public login : LoginModule;
  
  constructor(    
    public rt : Router,
    public rtac: ActivatedRoute,
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
            
            alert("Usuario o clave incorrectos");
          }else{
            console.log("entre positivo al else");
            this.loading= true
            if(this.loading== true){
              localStorage.setItem("algo",JSON.stringify(this.data));
              alert("Datos correctos");
              //this._loginservice.isLoggedIn()
              this._loginservice.changeAuthStatus(true);
              //console.log(this._loginservice.s)
              console.log("antes del url");
              this.rt.navigateByUrl('/comercio');
            }
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
