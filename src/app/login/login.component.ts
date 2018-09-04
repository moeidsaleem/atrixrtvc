import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService, private api:ApiService,private router:Router) { }


  email:string ='';
  password:string = '';
err:string ='';

  

  ngOnInit() {
  }

  login(){
    console.log(this.email)
    console.log(this.password)
    this.auth.login(this.email, this.password).then(response=>{
      //on success 
      this.api.getCustomer(response.user.uid).subscribe(data=>{
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
