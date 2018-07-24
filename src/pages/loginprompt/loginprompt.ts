import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SignUpPage } from '../signup/signup';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-loginprompt',
  templateUrl: 'loginprompt.html'
})
export class LoginPromptPage {

  constructor(public navCtrl: NavController) {

  }


  cancel(){
  	this.navCtrl.push(SignUpPage);
  }

  proceed(){
    this.navCtrl.push(HomePage);

  }

}
