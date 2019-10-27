import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { resolve } from 'url';
import { post } from 'selenium-webdriver/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
inpUser = '';
inpPass = '';

  constructor(public loadingController: LoadingController) { }

  ngOnInit() {
  }

  async logIn() {
    const loading = await this.loadingController.create({
      message: 'Por favor Espere',
      // duration: 1000,
      });
    await loading.present();

    fetch('https://randomuser.me/api/?results=1',
    {
      method: 'post',
      body: JSON.stringify({ u: this.inpUser, p: this.inpPass })
    }
    ).then(async (r: any) => {
      const r2 = r.clone();
      const rJson = await r.json().catch( e => {
        return { error: e, status: r2.status, dt: r2.text() };
      });
      console.log( rJson );
      loading.dismiss();
    }).catch(console.log);

    this.inpUser = '';
    this.inpPass = '';
  }

}
