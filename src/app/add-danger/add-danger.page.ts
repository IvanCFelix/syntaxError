import { Component, OnInit } from '@angular/core';
import { ToastController,NavController } from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-add-danger',
  templateUrl: './add-danger.page.html',
  styleUrls: ['./add-danger.page.scss'],
})
export class AddDangerPage implements OnInit {

  danger_descripcion: String;
  danger_titulo: String;
  dangerOwner:String;

  constructor(  private navCtrl: NavController, private toastCtrl: ToastController  ) {

    this.dangerOwner = firebase.auth().currentUser.uid;

   }

  ngOnInit() {
  }

  gotoMap(){
    this.navCtrl.navigateForward(['/home']);

  }
  gotoBack(){
    this.navCtrl.navigateForward(['/danger']);

  }

  
    
  

}
