import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { CommonServiceProvider } from '../../providers/services/common/common-service';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  private profiledata : any;
  private categories : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private commonService: CommonServiceProvider) {
    
    var tmpdata = navParams.get("logindata");
    if(tmpdata != null) {
      this.profiledata = tmpdata;
    }
    else{
      this.readUserInformation();
    }


    this.readAllCategories();

  }

  readUserInformation(){
      // read dummy user information.
      // if user already logged in to application, invoke navigate to profile.
      
      this.commonService.fetchDummyUserInfo().then(resp => {
          this.profiledata =  resp;
          console.log(this.profiledata);
        }).catch(err => {
          console.log(err);
      });

  }  

  goToHome(){
      this.navCtrl.push(HomePage,  {
        logindata : this.profiledata
      });
  }

  update(){
    this.commonService.checkAndUpdateSelCategories(this.profiledata, this.categories, true);
    this.navCtrl.push(HomePage,  {
      logindata : this.profiledata
    });
  }

  cancel(){
    this.navCtrl.push(HomePage,  {
      logindata : this.profiledata
    });  
  }  

   readAllCategories() {
      this.commonService.fetchAllCategories().then(resp => {
          this.categories = resp;

          this.commonService.checkAndUpdateSelCategories(this.profiledata, this.categories, false);

        }).catch(err => {
          console.log(err);
      });
    }

    /*
    {
      "profileid" : 0,
      "fname" : "",
      "lname" : "",
      "predictioninfo" : {
        "total" : 0,
        "success" : 0,
        "failure" : 0,
      },
      "profilemeter" : {
        "followers" : 0,
        "likes" : 0
      }
    }
    */  

}
