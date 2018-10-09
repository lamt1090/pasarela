import { Component, OnInit } from '@angular/core';
import { BancoModule } from '../../modelos/banco/banco.module';
import { BancoService } from '../../servicios/banco.service';


@Component({
  selector: 'app-banco',
  templateUrl: './banco.component.html',
  styleUrls: ['./banco.component.css'],
  providers: [BancoService]
})
export class BancoComponent implements OnInit {
  
  public banco : BancoModule;

  constructor(
    private _bancoservice: BancoService
  ) { 
    this.banco= new BancoModule("");

  }

  ngOnInit() {
    //alert(this._bancoservice.getBanco());// -- msm de prueba
    /*this._bancoservice.getBanco().subscribe(
      result =>{
        this.bancos = result.data;

      },
      error =>{
        console.log(<any>error);
      }
    )*/
  }

  onsubmit(){
    console.log(this.banco);
    this._bancoservice.addbanco(this.banco).subscribe(
      result =>{
        if(result.code == 200){
          alert(this._bancoservice.getBanco());
        }else{
          console.log(result);
        }
      },
      error =>{
        console.log(<any>error);
      }
    );
  }

}
