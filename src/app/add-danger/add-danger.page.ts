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

  addDanger(){
    firebase.firestore().collection("dangers").add({
      danger_titulo: this.danger_titulo,
      danger_descripcion: this.danger_descripcion,
      dangerOwner: this.dangerOwner,
      created: firebase.firestore.FieldValue.serverTimestamp()
    }).then((docRef)=>{
      this.toastCtrl.create({
        message: "Riesgo agregado",
        duration: 2000,
      }).then((toast)=>{
        toast.present();
        this.navCtrl.back();
      })
    }).catch((err)=>{
      this.toastCtrl.create({
        message: err.message,
        duration: 2000,
      }).then((toast)=>{
        toast.present();
      })
  }
     )}
  

}
