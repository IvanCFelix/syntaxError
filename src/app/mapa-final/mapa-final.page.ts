import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingController } from '@ionic/angular';

declare var google;

@Component({
  selector: 'app-mapa-final',
  templateUrl: './mapa-final.page.html',
  styleUrls: ['./mapa-final.page.scss'],
})
export class MapaFinalPage implements OnInit {

  mapRef=null;

  constructor(
    private geolocation: Geolocation,
    private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadMap();
  }
  async loadMap(){
    var latitudes = [25.794690992960923, 25.799289914334956,25.807808751726576,25.812859455569324];
    var longitudes= [-108.97374262691841,-108.98184490336325,-108.97633848203071,-108.96034466612576];
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
    //this.addMarker(myLatLng.lat,myLatLng.lng);
    for(let x=0;x<latitudes.length;x++){
      console.log("Punto "+x+":");
      console.log(latitudes[x]);
      console.log(longitudes[x]); 
      this.addMarker(latitudes[x],longitudes[x]);
    }
   
    });
  }
  private addMarker(lat: number, lng:number){
    var iconBase = 'assets/iconosMarcadores/';
    const marker = new google.maps.Marker({
      position: {lat,lng},
      map: this.mapRef,
      draggable: false,
      icon: iconBase + 'alien.png',
      animation: google.maps.Animation.DROP,

      //  title: 'Ubicación Actual!'
    });
    marker.addListener('dragend',function(event){
    var marcadorLatitud=this.getPosition().lat();
    var marcadorLongitud=this.getPosition().lng();
      //console.log(marcadorLatitud);
      //console.log(marcadorLongitud);
    });
  }

  
  
  private async getLocation(){
    const rta= await this.geolocation.getCurrentPosition();
   // console.log(rta.coords.latitude);
   //console.log(rta.coords.longitude);
    return {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
  }
}
