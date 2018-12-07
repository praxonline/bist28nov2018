import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemsDetailPage } from './items-detail';
import { DatePicker } from '@ionic-native/date-picker';
@NgModule({
  declarations: [
    ItemsDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemsDetailPage),
  ],
  providers:[
    DatePicker
  ]
})
export class ItemsDetailPageModule {}
