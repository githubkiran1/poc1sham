import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';
import { CreatePredictionPage } from '../prediction/create/createPrediction';
import { PredictionsListPage } from '../prediction/list/predictionlist';
import { CommonServiceProvider } from '../../providers/services/common/common-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private userdata : any;

  private pagecontent : any;

  public quickheadercontent : string = "TOP5INURINTERESTS";	

  constructor(public navCtrl: NavController, public navParams: NavParams, private commonService: CommonServiceProvider) {
  	var tmpdata = navParams.get("logindata");
    if(tmpdata != null) {
      this.userdata = tmpdata;
      this.loadPageContents(this.userdata);
    }
    else{
      this.readUserInformation();
    }
    
  }

  readUserInformation(){
      // read dummy user information.
      // if user already logged in to application, invoke navigate to profile.
      
      this.commonService.fetchDummyUserInfo().then(resp => {
          this.userdata =  resp;
          this.loadPageContents(this.userdata);
          console.log(this.userdata);
        }).catch(err => {
          console.log(err);
      });

  }  

  loadPageContents(userdataobj : any){
      // read from homepagecontents.json
      
      this.commonService.loadHomePageContents(userdataobj).then(resp => {
          this.pagecontent =  resp;
          console.log(this.pagecontent);
        }).catch(err => {
          console.log(err);
      });

  }  

  goToProfile(){
  	this.navCtrl.push(ProfilePage, {
  		"logindata" : this.userdata
  	});
  }

  goToDetailedPage(cardObj){
    if(cardObj.cardtype != undefined){
      if(cardObj.cardtype == 'post'){
        // Go to Post Details Page

        this.navCtrl.push(PredictionsListPage, {
          "logindata" : this.userdata
        });
      }
      else {
        // Go to Other's Profile page

      }
    }
  }

  createPrediction(){
    this.navCtrl.push(CreatePredictionPage, {
      "logindata" : this.userdata
    });
  }

  
}
