import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
inpUser = '';
inpPass = '';
  constructor(public loadingController: LoadingController, private AuthService:AuthService ) { }

  ngOnInit() {
  }

  async logIn() {
    const loading = await this.loadingController.create({
      message: 'Por favor Espere',
      // duration: 1000,
      });
    await loading.present();
    // ----------------------
    const respuesta = await this.AuthService.checkLogin()
        .subscribe( (resp)=>{ return resp; } );
    console.log('Respuesta: ',respuesta);
    loading.dismiss();
    // ----------------------

/*
    fetch( environment.api + 'check/user',
    {
      method: 'post',
      body: JSON.stringify({ u: this.inpUser, p: this.inpPass })
    }
    ).then(async (r: any) => {
      const r2 = r.clone();
      const rJson = await r.json().then(resp=>{
        console.info(resp);
        loading.dismiss();
      }).catch( e => {
        return { error: e, status: r2.status, dt: r2.text() };
      });
    }).catch(console.error);
*/
    this.inpUser = '';
    this.inpPass = '';
  }

}
