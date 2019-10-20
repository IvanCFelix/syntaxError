import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingController, ActionSheetController,NavController, NavParams} from '@ionic/angular';


declare var google;

@Component({
  selector: 'app-mapa-final',
  templateUrl: './mapa-final.page.html',
  styleUrls: ['./mapa-final.page.scss'],
})
export class MapaFinalPage implements OnInit {

  mapRef = null;
  marcadorLatitud=0;
  marcadorLongitud=0;
  html: string;

  
  constructor(
   // this.marcadorLatitud=NavParams.get('marcadorLatitud');
    public actionSheetController: ActionSheetController,
    private geolocation: Geolocation,
    private navCtrl:NavController,
    private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadMap();
  }
  abrirPeligros(){
    this.navCtrl.navigateForward(['/add-danger']);
  }
  async presentActionSheet() {
      

    const actionSheet = await this.actionSheetController.create({
      header: 'Simbología:',
      buttons: [{
        text: 'Accidente Avion',
        role: 'destructive',
        icon: 'alien',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }


  async loadMap(){
    var latitudes = [25.798350537789013,25.794690992960923, 25.799289914334956,25.807808751726576,25.802368822489786,25.801797000222695,25.792461956347104,25.792616953949935];
    var longitudes= [-108.9746314995918,-108.97374262691841,-108.98184490336325,-108.97633848203071,-108.96235771048481,-108.98585815128712,-108.97947234727866,-108.98678623863628];
    var iconos= ['fire.png','planecrash.png', 'caraccident.png', 'treedown.png', 'robbery.png', 'bomb.png', 'shooting.png', 'avalanche1.png'];
    var titulos= ['Incendio en el ITLM','Accidente aereo','Accidente de transporte','Arbol Caido','Asalto','Bomba','Disparos','Avalancha'];
    const loading = await this.loadingCtrl.create();
    loading.present();
    const myLatLng=await this.getLocation();
    const mapEle: HTMLElement = document.getElementById('mapfinal');

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
      this.addMarker(latitudes[x],longitudes[x],iconos[x],titulos[x]);
    }
   
    });
  }
  private addMarker(lat: number, lng: number, icono: string, titulo: string){
    var iconBase = 'assets/iconosMarcadores/';
    const marker = new google.maps.Marker({
      position: {lat,lng},
      map: this.mapRef,
      title: titulo,
      draggable: false,
      icon: iconBase + icono,
      animation: google.maps.Animation.DROP,

      //  title: 'Ubicación Actual!'
    });
    if(titulo==='Incendio en el ITLM'){
        this.html='<h6>'+titulo+'</h6><p>Se está incendiando la biblioteca</p>';
    }
    else{
      this.html='<h6>'+titulo;
    }

    marker.addListener('dragend',function(event){
    var marcadorLatitud=this.getPosition().lat();
    var marcadorLongitud=this.getPosition().lng();
      //console.log(marcadorLatitud);
      //console.log(marcadorLongitud);
    });
    
    var informacion= new google.maps.InfoWindow({
      
      content: this.html
    
    });
    marker.addListener('click',function() {
      console.log('si entra aqui');
      informacion.open(this.mapaRef, marker );
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
