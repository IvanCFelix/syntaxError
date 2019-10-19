import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;
  constructor(private toastCtrl: ToastController, private navCtrl: NavController) {
    firebase.auth().onAuthStateChanged((user)=> {
      if(user){
        this.navCtrl.navigateForward(['/danger']);
      }
      else{
        //No user logged in
      }
    })
  }
  ngOnInit() {
  }
  
  login() {
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
      (userObject) => {
        console.log(userObject);
        this.navCtrl.navigateForward(['/danger']);
        //Navegar  en la pagina del usuario
      }).catch((err) => {
        this.toastCtrl.create({
          message: err.message,
          duration: 1000000000
        }).then((toast) => {
          toast.present();
        })
      })

  }

   gotoSignup(){
     this.navCtrl.navigateForward(['/signup']);
   }
}
