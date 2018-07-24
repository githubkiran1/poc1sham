import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SignUpPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { LoginPromptPage } from '../loginprompt/loginprompt';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }


  signup(){
  	this.navCtrl.push(SignUpPage);
  }

login(){
  	this.navCtrl.push(LoginPromptPage);
  }
  
}
