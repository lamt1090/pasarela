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
            console.log(this._loginservice.isLoggedOut());
            alert("Usuario o clave incorrecta");
          }else{
            this.loading= true
            if(this.loading== true){
              localStorage.setItem("algo",JSON.stringify(this.data));
              alert("Datos correctos");
              this.cooki= JSON.parse(localStorage.getItem("algo"));
              this.rt.navigateByUrl('comercio');
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
