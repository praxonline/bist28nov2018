import { Component } from '@angular/core';
import { Platform,App, ViewController,IonicPage, NavController, NavParams,MenuController,LoadingController,AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup;
  public loading:any;
  constructor(public platform: Platform,public viewCtrl: ViewController,
    public appCtrl: App,private alertCtrl: AlertController,public loadingCtrl: LoadingController,public builder: FormBuilder,public menuCtrl: MenuController,public navCtrl: NavController, public navParams: NavParams) {
    this.loginForm = builder.group({
      'Username': ["", Validators.compose([Validators.required])],
      'userPass': ["", Validators.compose([Validators.required])]
    });
    this.loading = this.loadingCtrl.create({
      content: ''
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  onCikNewAccount(){
    this.navCtrl.setRoot("SignUpPage");
  }
  onCikForgetPass(){
    if(this.loginForm.value.Username==""){
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Please enter Email id',
        buttons: ['Ok']
      });
      alert.present();
      return false;
    }
    let alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: 'Please check your mailId',
      buttons: ['Ok']
    });
    alert.present();
  } 
  onCikSaveUser(){
    this.loginForm.reset();
    this.navCtrl.push("HomePage");
  }

 
}

