import { Component } from '@angular/core';
import { Platform,App, ViewController,IonicPage, NavController,ToastController, NavParams,MenuController,LoadingController,AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { UserProvider } from '../../providers/user-services';
import { DbProvider } from '../../helpers/db';

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
  public catItems = [];
  public catItemsCal = [];
  constructor(public dbProvider:DbProvider,public _service:UserProvider,public platform: Platform,public viewCtrl: ViewController,public toastCtrl: ToastController,
    public appCtrl: App,private alertCtrl: AlertController,public loadingCtrl: LoadingController,public builder: FormBuilder,public menuCtrl: MenuController,public navCtrl: NavController, public navParams: NavParams) {
    this.categoriesList = this.navParams.get("MenuData");
    this.categoriesName = this.navParams.get("name");
  }
  openShoppingList(){
    this.appCtrl.getRootNav().push("ItemsPage",{MenuData:this.catItems});     
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }
  onClickNotes(obj){
    this.catItems = [];
    if(obj.isMenu==1){
      let loader = this.loadingCtrl.create({
        content: "Please wait..."
      });
      loader.present();
      this._service.getSubMenu(obj.id).subscribe(
        res => {
          loader.dismiss().then(() => {
            var i=0;
            if(res.length>0){
              while(res.length>i){ 
                if(res[i]){
                  this.catItemsCal.push({
                    "id": res[i].id,
                    "parent_id": res[i].parent_id,
                    "name": res[i].name,
                    "color": res[i].color,
                    "image_id": res[i].image_id,
                    "hide_from_grid": res[i].hide_from_grid,
                    "isMenu":1
                  });
                }
                i++;
                if(this.catItemsCal.length==3){
                  this.catItems.push(this.catItemsCal);
                  this.catItemsCal = [];
                }
                
              }
            }
            this.loadItems(obj);
          });
        },
        err => {
          loader.dismiss().then(() => {
            this.showToast('', 200);
          });
        }
      );
    }else{
      this.appCtrl.getRootNav().push("ItemsPage",{MenuData:obj,"name":obj.name});
    }
  }
  showToast(message, duration) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration
    });
    toast.present();
  }
  loadItems(obj){

    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();
    this._service.getItemKit(obj.id).subscribe(
      res => {
        loader.dismiss().then(() => {
          var i=0;
          if(res.length>0){
            while(res.length>i){ 
              if(res[i]){
                this.catItemsCal.push({
                  "id": res[i].item_id,
                  "parent_id": res[i].parent_id,
                  "name": res[i].name,
                  "isMenu":0,
                  "item_number": res[i].item_number,
                  "product_id": res[i].product_id,
                  "size":res[i].size,
                  "expire_days": res[i].expire_days,
                  "ecommerce_product_id": res[i].ecommerce_product_id,
                  "category": res[i].category,
                  "category_id": res[i].category_id,
                  "manufacturer": res[i].manufacturer,
                  "manufacturer_id": res[i].manufacturer_id,
                  "cost_price": res[i].cost_price,
                  "unit_price": res[i].unit_price,
                  "max_discount_percent": res[i].max_discount_percent,
                  "max_edit_price": res[i].max_edit_price,
                  "min_edit_price": res[i].min_edit_price,
                  "promo_price": res[i].promo_price,
                  "start_date": res[i].start_date,
                  "end_date": res[i].end_date,
                  "reorder_level": res[i].reorder_level,
                  "replenish_level": res[i].replenish_level,
                  "description": res[i].description,
                  "long_description": res[i].long_description,
                  "disable_loyalty": res[i].disable_loyalty,
                  "is_service": res[i].is_service,
                  "allow_alt_description": res[i].allow_alt_description,
                  "is_serialized": res[i].is_serialized,
                  "is_ebt_item": res[i].is_ebt_item,
                  "is_ecommerce": res[i].is_ecommerce,
                  "tax_included": res[i].tax_included,
                  "change_cost_price": res[i].change_cost_price,
                  "override_default_tax": res[i].override_default_tax,
                  "tax_class_id": res[i].tax_class_id,
                  "tags": res[i].tags,
                  "additional_item_numbers": res[i].additional_item_numbers,
                  "serial_numbers": res[i].serial_numbers,
                  "commission_percent": res[i].commission_percent,
                  "commission_fixed": res[i].commission_fixed,
                  "commission_percent_type": res[i].commission_percent_type,
                  "allow_price_override_regardless_of_permissions": res[i].allow_price_override_regardless_of_permissions,
                  "only_integer": res[i].only_integer,
                  "is_barcoded": res[i].is_barcoded,
                  "main_image_id": res[i].main_image_id,
                  "is_series_package": res[i].is_series_package,
                  "series_quantity": res[i].series_quantity,
                  "series_days_to_use_within": res[i].series_days_to_use_within,
                  "custom_fields": res[i].custom_fields,
                  "images": res[i].images,
                  "images_url": res[i].images.length>0?res[i].images[0].image_url:"",
                  "variations": res[i].variations,
                  "tier_pricing": res[i].tier_pricing,
                  "locations": res[i].locations,
                  "Qentity":0
                });
              }
              i++;
              if(this.catItemsCal.length==3){
                this.catItems.push(this.catItemsCal);
                this.catItemsCal = [];
              }
            }
          }
          this.appCtrl.getRootNav().push("CategoryPage",{MenuData:this.catItems,"name":obj.name});
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
