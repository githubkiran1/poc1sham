import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { HttpModule} from '@angular/http';

import { ToldYaApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import { HomePage } from '../pages/home/home';
import { AlertsPage } from '../pages/alerts/alerts';
import { ProfilePage } from '../pages/profile/profile';
import { CreatePredictionPage } from '../pages/prediction/create/createPrediction';
import { PredictionsListPage } from '../pages/prediction/list/predictionlist';
import { SignUpPage } from '../pages/signup/signup';
import { LoginPromptPage } from '../pages/loginprompt/loginprompt';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CommonServiceProvider } from '../providers/services/common/common-service';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    ToldYaApp,
    TabsPage,
    HomePage,
    LoginPage,
    SignUpPage,
    ProfilePage,
    LoginPromptPage,
    CreatePredictionPage,
    AlertsPage,
    PredictionsListPage 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(ToldYaApp),
    ChartsModule,
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ToldYaApp,
    TabsPage,
    HomePage,
    LoginPage,
    SignUpPage,
    ProfilePage,
    LoginPromptPage,
    CreatePredictionPage,
    AlertsPage,
    PredictionsListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CommonServiceProvider
  ]
})
export class AppModule {}
