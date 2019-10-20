import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingController } from '@ionic/angular';


declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  mapRef=null;

  constructor(
    private geolocation: Geolocation,
    private loadingCtrl: LoadingController,

     ) {
  
  }
  ngOnInit(){
    
  }
 

  ionViewDidEnter(){
    this.loadMap();
  }

  async loadMap(){
    const loading = await this.loadingCtrl.create();
    loading.present();
    const myLatLng=await this.getLocation();
    const mapEle: HTMLElement = document.getElementById('map');

    // crear mapa
    this.mapRef = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 16
    });
    //cierre creacion de mapa
    google.maps.event
    .addListenerOnce(this.mapRef, 'idle', () => {
    loading.dismiss();
    this.addMarker(myLatLng.lat,myLatLng.lng);
    this.addMarker(25.798536,-108.97458);
   
    });
  }
  private addMarker(lat: number, lng:number){
    
    const marker = new google.maps.Marker({
      position: {lat,lng},
      map: this.mapRef,
      draggable: true,
      animation: google.maps.Animation.DROP,
      //  title: 'Ubicación Actual!'
    });
    marker.addListener('dragend',function(event){
    var marcadorLatitud=this.getPosition().lat();
    var marcadorLongitud=this.getPosition().lng();
      console.log(marcadorLatitud);
      console.log(marcadorLongitud);
    });
  }
  
  
  private async getLocation(){
    const rta= await this.geolocation.getCurrentPosition();
    console.log(rta.coords.latitude);
    console.log(rta.coords.longitude);
    return {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
  }
}
