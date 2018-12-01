import { Component } from '@angular/core';
import { Platform,App, ViewController,IonicPage, NavController,ToastController, NavParams,MenuController,LoadingController,AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { UserProvider } from '../../providers/user-services';
/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  loginForm: FormGroup;
  public loading:any;
  public categoriesList = [];
  constructor(public _service:UserProvider,public platform: Platform,public viewCtrl: ViewController,public toastCtrl: ToastController,
    public appCtrl: App,private alertCtrl: AlertController,public loadingCtrl: LoadingController,public builder: FormBuilder,public menuCtrl: MenuController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
    this.loadMenuList();
  }
  loadMenuList(){
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();
    this._service.getMenu().subscribe(
      res => {
        loader.dismiss().then(() => {
          var i=0;
          console.log(res.length);

          while(res.length>i){ 
            var pushArr=[];
            if(res[i]){
              console.log("---------");
            console.log(res[i]);
               pushArr.push({
                "id": res[i].id,
                "parent_id": res[i].parent_id,
                "name": res[i].name,
                "color": res[i].color,
                "image_id": res[i].image_id,
                "hide_from_grid": res[i].hide_from_grid
              });
            }
            i++;
            if(res[i]){
              console.log("++++++");
            console.log(res[i]);
               pushArr.push({
                "id": res[i].id,
                "parent_id": res[i].parent_id,
                "name": res[i].name,
                "color": res[i].color,
                "image_id": res[i].image_id,
                "hide_from_grid": res[i].hide_from_grid
              });
            }
            i++;
            this.categoriesList.push(pushArr);
          }
          console.log(this.categoriesList);
        });
      },
      err => {
        loader.dismiss().then(() => {
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
  onClickNotes(obj){
    console.log(obj);
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();
    this._service.getItemKit(obj.id).subscribe(
      res => {
        var menuList = [];
        loader.dismiss().then(() => {
          var i=0;
          if(res.length>0){
            while(res.length>i){ 
              var pushArr=[];
              if(res[i]){
                 pushArr.push({
                  "id": res[i].id,
                  "parent_id": res[i].parent_id,
                  "name": res[i].name,
                  "color": res[i].color,
                  "image_id": res[i].image_id,
                  "hide_from_grid": res[i].hide_from_grid
                });
              }
              i++;
              if(res[i]){
                 pushArr.push({
                  "id": res[i].id,
                  "parent_id": res[i].parent_id,
                  "name": res[i].name,
                  "color": res[i].color,
                  "image_id": res[i].image_id,
                  "hide_from_grid": res[i].hide_from_grid
                });
              }
              i++;
              menuList.push(pushArr);
            }
            this.appCtrl.getRootNav().push("CategoryPage",{MenuData:menuList,"name":obj.name});
          }
        });
      },
      err => {
        loader.dismiss().then(() => {
          this.showToast('', 200);
        });
      }
    );
    
  }
}
