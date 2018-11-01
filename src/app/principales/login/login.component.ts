import { Component, OnInit } from '@angular/core';
import { LoginModule } from '../../modelos/login/login.module';
import { LoginService } from '../../servicios/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TokenService } from '../../servicios/token.service';
import { IsloginService } from '../../servicios/islogin.service';
import { ValidoModule } from '../../modelos/valido/valido.module';


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
  public tokenuser: any;
  public login : LoginModule;
  
  constructor(    
    public rt : Router,
    public rtac: ActivatedRoute,
    private tokens: TokenService,
    private _loginservice: LoginService,
    private islogin: IsloginService
  ) { 
    this.login = new LoginModule("","");
    if(!tokens.get()){
      this.loggedIn=false;
      console.log("estoy en login component ="+this.loggedIn);
    }else{
      alert("ya has iniciado sessión");
    }
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
            this.loading= true
            if(this.loading== true){
              this.tokens.set(this.data['token']);
              this.tokens.setuser(this.data['usnmlogin']);
              alert("Datos correctos");

              this.islogin.setData({success:true});
             
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
