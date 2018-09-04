import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private api:ApiService, private auth:AuthService, private router:Router) { }
email;
password;
err;
  ngOnInit() {
  }

  login(){
    console.log(this.email)
    console.log(this.password)
    this.auth.signup(this.email, this.password).then(response=>{
      //on success 
      this.api.createCustomer(response.user.uid, {email:this.email, password:this.password}).
      then(data=>{
        if(data){

          localStorage.setItem('uid', response.user.uid);
          //route it to dashboard
          this.router.navigate(['dashboard'])
        }
        this.err='ERROR: No user data found...';

      })
    },err=>{
      console.log(err);
      this.err =err;
    })
  }
}
