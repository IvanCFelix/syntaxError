import { Component, OnInit } from '@angular/core';
import { NavController} from  "@ionic/angular";

@Component({
  selector: 'app-danger',
  templateUrl: './danger.page.html',
  styleUrls: ['./danger.page.scss'],
})
export class DangerPage implements OnInit {

  constructor( private navCtrl: NavController) {
  
   }

  ngOnInit() {
  }

  addDanger(){
    this.navCtrl.navigateForward(['/add-danger']);
  }

}
