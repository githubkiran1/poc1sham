import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AlertsPage } from '../alerts/alerts';
import { PredictionsListPage } from '../prediction/list/predictionlist';
import { CreatePredictionPage } from '../prediction/create/createPrediction';
import { ProfilePage } from '../profile/profile';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PredictionsListPage;
  tab3Root = CreatePredictionPage;
  tab4Root = ProfilePage;
  tab5Root = AlertsPage;
  
  constructor() {

  }
}
