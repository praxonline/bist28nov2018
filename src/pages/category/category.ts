import { Component } from '@angular/core';
import { Platform,App, ViewController,IonicPage, NavController,ToastController, NavParams,MenuController,LoadingController,AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { UserProvider } from '../../providers/user-services';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  loginForm: FormGroup;
  public loading:any;
  public categoriesList = [];
  public categoriesName = "";
  constructor(public _service:UserProvider,public platform: Platform,public viewCtrl: ViewController,public toastCtrl: ToastController,
    public appCtrl: App,private alertCtrl: AlertController,public loadingCtrl: LoadingController,public builder: FormBuilder,public menuCtrl: MenuController,public navCtrl: NavController, public navParams: NavParams) {
    this.categoriesList = this.navParams.get("MenuData");
    this.categoriesName = this.navParams.get("name");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }
  onClickNotes(obj){
    this.appCtrl.getRootNav().push("ItemsPage");
  }
}
