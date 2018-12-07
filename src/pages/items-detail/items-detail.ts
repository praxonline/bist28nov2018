import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DbProvider } from '../../helpers/db';
import { DatePicker } from '@ionic-native/date-picker';
/**
 * Generated class for the ItemsDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-items-detail',
  templateUrl: 'items-detail.html',
})
export class ItemsDetailPage {
  public cardItems:any;
  public cardInfo :any;
  public selectCard:any;
  public remainingVal:any;
  public amount=0;
  constructor(private datePicker: DatePicker,public dbProvider:DbProvider,public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemsDetailPage');
    this.cardItems  =  this.dbProvider.getCart();
    this.cardInfo = this.dbProvider.getCardInfo();
    if(this.cardInfo.length ==1){
      this.selectCard =this.cardInfo[0];
    }
    for(var i=0;i<this.cardItems.length;i++){
      this.amount = this.amount + (this.cardItems[i].unit_price * this.cardItems[i].Qentity)
    }
    console.log( this.cardItems );
    console.log( this.dbProvider.getUserInfo());
  }

}
