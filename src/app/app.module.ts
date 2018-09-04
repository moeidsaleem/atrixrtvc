//core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { environment } from '../environments/environment';



//component 
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';

//firebase
import { AngularFireModule} from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule} from 'angularfire2/firestore'
import { LoginComponent } from './login/login.component';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    HomeComponent,
    SettingComponent,NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,AngularFirestoreModule,
    RouterModule.forRoot([
      {path:'', redirectTo:'login',pathMatch:'full'},
      {path:'login', component:LoginComponent},
      {path:'signup', component:SignupComponent},
      {path:'**', component:NotfoundComponent},
      {path:'dashboard', component:DashboardComponent, children:[
        {path:'home', component:HomeComponent},
        {path:'setting', component:SettingComponent}
      ]}
    ])
  ],
  providers: [ApiService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
