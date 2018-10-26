import { Component, OnInit } from '@angular/core';
import { LoginModule } from '../../modelos/login/login.module';
import { LoginService } from '../../servicios/login.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService],
})
export class LoginComponent implements OnInit {
  data: any;
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
            alert("Usuario o clave incorrecta");
          }else{
          alert("Datos correctos");
          this.rt.navigateByUrl('comercio');
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
