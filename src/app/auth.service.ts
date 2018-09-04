import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth:AngularFireAuth) { }



/* CUSTOMERS */
  login(email, password){
    return this.afAuth.auth.signInWithEmailAndPassword(email,password);
  }
  signup(email, password){
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }
  forgotPassword(email){
    
  }


}
