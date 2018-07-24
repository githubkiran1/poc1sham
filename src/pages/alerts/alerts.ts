import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CommonServiceProvider } from '../../providers/services/common/common-service';

@Component({
  selector: 'page-alerts',
  templateUrl: 'alerts.html'
})
export class AlertsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private commonService: CommonServiceProvider) {
    
  }

}
