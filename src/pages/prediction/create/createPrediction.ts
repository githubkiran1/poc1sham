import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { HomePage } from '../../home/home';
import { CommonServiceProvider } from '../../../providers/services/common/common-service';


@Component({
  selector: 'page-createprediction',
  templateUrl: 'createPrediction.html'
})

export class CreatePredictionPage {

  private predictionFrm : FormGroup;

  private userdata : any; 

  private categories : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder : FormBuilder, private commonService: CommonServiceProvider) {

    this.predictionFrm = this.formBuilder.group({
      title : ['', Validators.required],
      type : ['', Validators.required],
      category : ['']
    });

    var tmpdata = navParams.get("logindata");
    if(tmpdata != null) {
      this.userdata = tmpdata;
    }

    console.log("CreatePredictionPage.constructor");
    console.log(this.userdata);

    this.readAllCategories(); 

  }

  readAllCategories() {
      this.commonService.fetchAllCategories().then(resp => {
          this.categories = resp;
        }).catch(err => {
          console.log(err);
      });
    }

    goToHome(){
      this.navCtrl.push(HomePage,  {
        logindata : this.userdata
      });
    }

  draft(){
    this.navCtrl.push(HomePage,  {
        logindata : this.userdata
      });
  }

  publish(){
    this.userdata.predictioninfo.total = parseInt(this.userdata.predictioninfo.total) + 1;
    this.navCtrl.push(HomePage,  {
        logindata : this.userdata
      });
  }

  cancel(){
    this.navCtrl.push(HomePage,  {
        logindata : this.userdata
      });
  }

  

}
