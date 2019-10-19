import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import * as firebase from 'firebase';

firebase.initializeApp(
  {
  apiKey: "AIzaSyAENOloBa-lYNO2z_2ofoAzkcQwb7skP3E",
  authDomain: "dangerus-63b9a.firebaseapp.com",
  databaseURL: "https://dangerus-63b9a.firebaseio.com",
  projectId: "dangerus-63b9a",
  storageBucket: "dangerus-63b9a.appspot.com",
  messagingSenderId: "106737359335",
  appId: "1:106737359335:web:3bb1f488927665eef20542",
  measurementId: "G-784NDE6PPM"
}
);



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
