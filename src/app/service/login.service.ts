import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage'
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authenticationState = new BehaviorSubject(false);

  constructor(private http: HttpClient, private storage: Storage, private plt: Platform) { }


  loginUser(username, password):Observable<any>{
    return this.http.post('http://localhost:3000/login/user',
    { 
      username: username, 
      password: password 
    });
  }

  loggedIn(){
    //ugly code
    let temp;
    this.storage.get('token').then(res => {
      temp = res;
      console.log(temp);
    });

    //console.log(temp)
    if(temp == undefined || temp == null){
      return false
    }
    return true
    }
}
