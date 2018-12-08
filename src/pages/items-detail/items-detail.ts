import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController,App } from 'ionic-angular';
import { DbProvider } from '../../helpers/db';
import { UserProvider } from '../../providers/user-services';
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
  public cardInfo :any = [];
  public selectCard:any;
  public remainingVal:any;
  public amount=0;
  public isPreOrder:boolean = true;
  public OrderTime:string ;
  public OrderDate:string ;
  constructor(public appCtrl: App,public toastCtrl: ToastController,public loadingCtrl: LoadingController,public userProvider:UserProvider, public dbProvider:DbProvider,public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemsDetailPage');
    this.cardItems  =  this.dbProvider.getCart();
    this.cardInfo = this.dbProvider.getCardInfo();
    console.log(this.cardInfo );
    if(this.cardInfo.length ==1){
      this.selectCard =this.cardInfo[0];
    }
    for(var i=0;i<this.cardItems.length;i++){
      this.amount = this.amount + (this.cardItems[i].unit_price * this.cardItems[i].Qentity)
    }
    if(this.selectCard){
      this.remainingVal = this.selectCard.value - this.amount ; 
    }
  }
  onSelectChange(res){
    for(var i=0;i<this.cardInfo.length;i++){
      if(this.cardInfo.id ==res){ 
        this.selectCard =res;
        this.remainingVal = this.selectCard.value - this.amount ; 
      }
    }
  }
  addCard(){
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();
    this.userProvider.sales(this.selectCard,this.cardItems,this.amount,this.OrderTime,this.OrderDate).subscribe(
      res => {
        loader.dismiss().then(() => {
          if(res.sale_id>0){  
            this.showToast("Sales Successfully",200);
            this.appCtrl.getRootNav().pop();
          }else{
            this.showToast('', 200);
          }
        });
      },
      err => {
        loader.dismiss().then(() => {
          console.log(err);
          this.showToast('', 200);
        });
      }
    );
  }
  showToast(message, duration) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration
    });
    toast.present();
  }
}
