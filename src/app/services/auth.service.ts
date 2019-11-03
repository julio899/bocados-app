import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LoginData } from '../interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor( private http: HttpClient, private route: Router ) { }
  async checkLogin(CuentaLogin: LoginData ) {
    /*
    const checkUserPostRoutes: any = this.route;
    checkUserPostRoutes.post(environment.api + 'check/user', ( req: Request, resp: Response) => {
      console.log(req, CuentaLogin);
      return resp.text();
    });
    */
   const headers = new Headers();
   headers.append('Accept', 'application/json');
   headers.append('Content-Type', 'application/json' );

   const postData: LoginData = {
    usuario: 'customer004@email.com',
    clave: '0000252525'
   };
   return this.http.post(environment.api + 'check/user',  postData );
  }

}
