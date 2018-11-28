import { Component } from '@angular/core';
import { Platform,Config,Events,AlertController,LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UserProvider } from '../providers/user-services';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = "LoginPage";
  
  constructor(public loadingCtrl: LoadingController,private _service:UserProvider,
              public alertCtrl:AlertController, public events: Events,
              private config: Config,private storage: Storage,platform: Platform, statusBar: StatusBar, 
              splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
 
    });
    platform.registerBackButtonAction(() => {
      const alert = this.alertCtrl.create({
          title: 'App termination',
          message: 'Do you want to close the app?',
          buttons: [{
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                  console.log('Application exit prevented!');
              }
          },{
              text: 'Close App',
              handler: () => {
                  platform.exitApp(); // Close this application
              }
          }]
      });
      alert.present();
  });
  }
}

