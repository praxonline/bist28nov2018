import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { UtilHelper } from '../helpers/util-helper';
import { ApiProvider } from '../providers/api/index';
import { HttpClientModule } from "@angular/common/http";
import { Device } from "@ionic-native/device";
import { AppVersion } from '@ionic-native/app-version';
import { UserProvider } from '../providers/user-services';
import { DbProvider } from '../helpers/db';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,UtilHelper,Device,UserProvider,
    SplashScreen,ApiProvider,AppVersion,DbProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
