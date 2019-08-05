import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { LoginService } from '../service/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string;
  password: string;

  constructor(private log: LoginService, private storage: Storage,
    private router: Router) { }

  ngOnInit() {
  }

  loginPage(){
    this.log.loginUser(this.username, this.password)
    .subscribe(res => {
      //console.log(res)
      this.storage.set('token', res.token)
      this.router.navigate(['/calendar'])
    });
  }
}
