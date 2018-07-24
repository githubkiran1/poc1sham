import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CommonServiceProvider } from '../../../providers/services/common/common-service';


@Component({
  selector: 'page-predictionlist',
  templateUrl: 'predictionlist.html'
})

export class PredictionsListPage {

  public mylistinfo : any;

  public userdata : any;

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
          console.log(this.userdata);
          this.loadPageContents(this.userdata);
        }).catch(err => {
          console.log(err);
      });

  }  

  loadPageContents(userdataobj : any){
      // read from mylistinfo.json
      console.log("Start :: loadPageContents");
      this.commonService.loadMyPredictionList(userdataobj).then(resp => {
          this.mylistinfo =  resp;
          
          console.log(this.mylistinfo);
        }).catch(err => {
          console.log(err);
      });

  }

  /*
  * Pie chart related data samples
  */
  public pieChartLabels:string[] = ['Hits', 'On-going', 'Missess'];
  public pieChartData:number[] = [30, 20, 70];
  public pieChartType:string = 'pie';
  public pieChartOptions : any = { responsive: true };
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
