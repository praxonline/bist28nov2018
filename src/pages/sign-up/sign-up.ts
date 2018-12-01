import { Component } from '@angular/core';
import { Platform,App, ViewController,IonicPage,ToastController, NavController, NavParams,MenuController,LoadingController,AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { UserProvider } from '../../providers/user-services';
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
  constructor(public _service:UserProvider,public toastCtrl: ToastController, public platform: Platform,public viewCtrl: ViewController,
    public appCtrl: App,private alertCtrl: AlertController,public loadingCtrl: LoadingController,public builder: FormBuilder,public menuCtrl: MenuController,public navCtrl: NavController, public navParams: NavParams) {
    this.signUpForm = builder.group({
      'UsernameAndSurname': ["", Validators.compose([Validators.required])],
      'Username': ["", Validators.compose([Validators.required,Validators.email])],
      'UserPassword': ['', Validators.compose([Validators.required])],
      'privacyPolicy': [false, Validators.compose([Validators.required])],
      'TermsAndConditions': [false, Validators.compose([Validators.required])],
      'offersToMyEmail': [false, Validators.compose([Validators.required])]
    });
    this.loading = this.loadingCtrl.create({
      content: ''
    });
  }
  onCikSaveUser(){

    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();
    this._service.registerUser(this.signUpForm.value).subscribe(
      res => {
        loader.dismiss().then(() => {
          if(res.person_id>0){
            this.showToast('User registered successfully', 200);
            this.signUpForm.reset();
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

}
