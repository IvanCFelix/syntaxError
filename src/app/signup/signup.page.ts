import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ToastController, NavController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  email: string;
  password: string;

  constructor(private toastCtrl: ToastController, private navCtrl: NavController) {

  }

  ngOnInit() {
  }

  entrar() {
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
      (userData) => {
        console.log(userData);
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
  gotoLogin(){
    this.navCtrl.navigateForward(['/login']);
  }

}


