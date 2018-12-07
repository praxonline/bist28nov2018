import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DbProvider } from '../../helpers/db';

/**
 * Generated class for the ItemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-items',
  templateUrl: 'items.html',
})
export class ItemsPage {
  public ItemsDetail :any;
  public categoriesName = "";
  public OrderQuantity= 1;
  constructor(public dbProvider:DbProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.ItemsDetail = this.navParams.get("MenuData");
    this.categoriesName = this.navParams.get("name");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemsPage');
  }
  addCard(){
    this.ItemsDetail.Qentity = this.OrderQuantity;
      this.dbProvider.setCartlist(this.ItemsDetail);
  }
}
