import { Component } from '@angular/core';
import { Platform,App, ViewController,IonicPage, NavController, NavParams,MenuController,LoadingController,AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  signUpForm: FormGroup;
  public loading:any;
  constructor(public platform: Platform,public viewCtrl: ViewController,
    public appCtrl: App,private alertCtrl: AlertController,public loadingCtrl: LoadingController,public builder: FormBuilder,public menuCtrl: MenuController,public navCtrl: NavController, public navParams: NavParams) {
    this.signUpForm = builder.group({
      'UsernameAndSurname': ["", Validators.compose([Validators.required])],
      'Username': ["", Validators.compose([Validators.required])],
      'UserPassword': ["", Validators.compose([Validators.required])],
      'privacyPolicy': ["", Validators.compose([Validators.required])],
      'TermsAndConditions': ["", Validators.compose([Validators.required])],
      'offersToMyEmail': ["", Validators.compose([Validators.required])]
    });
    this.loading = this.loadingCtrl.create({
      content: ''
    });
  }
  onCikSaveUser(){
    let alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: 'User registered successfully',
      buttons: ['Ok']
    });
    alert.present();
    this.signUpForm.reset();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

}
