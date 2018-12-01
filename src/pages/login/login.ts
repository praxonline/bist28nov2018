import { Component } from '@angular/core';
import { Platform,App, ViewController,IonicPage, NavController,ToastController, NavParams,MenuController,LoadingController,AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { UserProvider } from '../../providers/user-services';


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
  constructor(public _service:UserProvider,public platform: Platform,public viewCtrl: ViewController,public toastCtrl: ToastController,
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
  showToast(message, duration) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration
    });
    toast.present();
  }
  onCikNewAccount(){
    this.navCtrl.setRoot("SignUpPage");
  }
 
  onCikSaveUser(){
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();
    this._service.logIn(this.loginForm.value).subscribe(
      res => {
        loader.dismiss().then(() => {

          if(res[0].person_id>0){  
            if(res[0].custom_fields.Password==this.loginForm.value.userPass){
              this.loginForm.reset();
              this.navCtrl.push("HomePage");
            }else{
              this.showToast('', 200);
            }
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

 
}

