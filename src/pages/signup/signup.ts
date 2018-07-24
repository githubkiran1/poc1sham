import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';

import { CommonServiceProvider } from '../../providers/services/common/common-service';

/*
import { UserInformation,Category,PredictionInfo,ProfileMeter } from '../../providers/models/userinformation';
*/

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignUpPage {

  private categories : any;
  private logintypes : any;
  private signupuser = {
      "logintype" : "",
      "deviceid" : "",
      "categoryinterests" : []
  };

  private userdata : any;

  constructor(public navCtrl: NavController, private commonService: CommonServiceProvider) {

      this.readUserInformation();

      this.readAllCategories();  

      this.readLoginTypes();
  }


  register(){
    
    for(let category of this.categories){
      if(category.checked){
        this.signupuser.categoryinterests.push(this.cloneCategory(category));
      }  
    }

    this.userdata.logintype = this.signupuser.logintype;
    this.userdata.deviceid = this.signupuser.deviceid;
    this.userdata.categoryinterests = this.signupuser.categoryinterests;

    console.log(this.userdata);
    
    this.navCtrl.push(HomePage,  {
        logindata : this.userdata
      });
  }

  cancel(){

  }

  readUserInformation(){

    console.log('readUserInformation');
      
      this.commonService.fetchDummyUserInfo().then(resp => {
          this.userdata =  resp;
          console.log(this.userdata);
        }).catch(err => {
          console.log(err);
      });

  }

  readUserBasedonLoginType(logintype){
  
  }

   readAllCategories() {
      this.commonService.fetchAllCategories().then(resp => {
          this.categories = resp;
          //console.log(this.categories);
        }).catch(err => {
          console.log(err);
      });
    }

   readLoginTypes() {
      this.commonService.fetchAllLoginTypes().then(resp => {
          this.logintypes = resp;
          //console.log(this.logintypes);
        }).catch(err => {
          console.log(err);
      });
    }

    cloneCategory(category){
      var tmpCategory = {
        "code" : category.code,
        "name" : category.name,
        "checked" : false
      };

      return tmpCategory;
    }


}
