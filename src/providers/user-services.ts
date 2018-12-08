import { Injectable } from "@angular/core";
import { Config,Platform } from "ionic-angular";

import { Storage } from "@ionic/storage";
import "rxjs/Rx";
import { ApiProvider } from "./api";
import { constants, urls } from "../helpers/config";
import { RequestOptions } from "./index";

@Injectable()
export class UserProvider {
  constructor(
    public plt: Platform,
    public api: ApiProvider,
    public storage: Storage,
    public config: Config
  ) {}

  registerUser(data) {
    let options = new RequestOptions();
   var name = data.UsernameAndSurname.split(" ");
   var Data ={
      "Name": data.UsernameAndSurname,
      "first_name":name[0] ,
      "last_name":name[0] ,
      "email":data.Username ,
      "custom_fields":{"Password":data.UserPassword}
    };
    let seq = this.api.post("Customers", Data,{} , options).share();
    seq.subscribe(
      res => {
        if (res.token) {
          let token = res.token;

          this.storage.set("token", JSON.stringify(token));
          this.config.set("token", token.token);
        }
      },
      err => {
        console.error("Register Error", JSON.stringify(err));
      }
    );
    return seq;
  }
  logIn(data) {
    let options = new RequestOptions();

    let seq = this.api.get("Customers?search_field=email&search="+data.Username,{} , options).share();
    seq.subscribe(
      res => {
        
      },
      err => {
        console.error("Register Error", JSON.stringify(err));
      }
    );
    return seq;
  }
  getMenu(){
    let options = new RequestOptions();

    let seq = this.api.get("categories?limit=100",{} , options).share();
    seq.subscribe(
      res => {
        
      },
      err => {
        console.error("Register Error", JSON.stringify(err));
      }
    );
    return seq;
  }
  getSubMenu(Id){
    let options = new RequestOptions();
 
    let seq = this.api.get("categories?categoriesId="+Id,{} , options).share();

    seq.subscribe(
      res => {
        
      },
      err => {
        console.error("Register Error", JSON.stringify(err));
      }
    );
    return seq;
  }
  getItemKit(Id){
    let options = new RequestOptions();

    let seq = this.api.get("items?category_id="+Id,{} , options).share();
    seq.subscribe(
      res => {
        
      },
      err => {
        console.error("Register Error", JSON.stringify(err));
      }
    );
    return seq;
  }
  sales(data,ItemsData,amount,OrderTime,OrderDate) {
    let options = new RequestOptions();
   var cur_Date = new Date();
   var Item=[];

   for(var i=0;i<ItemsData.length;i++){
    Item.push({
      "quantity": ItemsData[i].Qentity,
      "unit_price": ItemsData[i].unit_price,
      "discount": 0,
      "description": "",
      "serialnumber": "",
      "size": "",
      "item_id": ItemsData[i].id,
      "variation_id": 0,
      "cost_price": ItemsData[i].cost_price,
      "tier_id": 0
    });
   }
   var SalesData = {
      "mode": "sale",
      "customer_id": data.customer_id,
      "show_comment_on_receipt": true,
      "selected_tier_id": 2,
      "sold_by_employee_id": 1,
      "points_used": 1,
      "points_gained": 2,
      "discount_reason": "",
      "has_delivery": false,
      "cart_items": Item,
      "location_id": 1,
      "employee_id": 1,
      "register_id": 1,
      "excluded_taxes": [ ],
      "delivery":{},
      "comment": "",
      "paid_store_account_ids": [
        1
      ],
      "change_cart_date": cur_Date.toDateString(),
      "suspended": 1,
      "custom_fields": {
        "Pre-order Date": OrderDate,
        "Pre-order Time": OrderTime
      },
      "payments": [
        {
          "payment_type": "Gift Card",
          "payment_amount": amount,
          "payment_date": cur_Date.toDateString()
        }
      ]
   };

    let seq = this.api.post("sales", SalesData,{} , options).share();
    seq.subscribe(
      res => {
        if (res.token) {
          let token = res.token;

          this.storage.set("token", JSON.stringify(token));
          this.config.set("token", token.token);
        }
      },
      err => {
        console.error("Register Error", JSON.stringify(err));
      }
    );
    return seq;
  }
  giftcards(){
    let options = new RequestOptions();
    let seq = this.api.get("giftcards",{} , options).share();
    seq.subscribe(
      res => {
        
      },
      err => {
        console.error("Register Error", JSON.stringify(err));
      }
    );
    return seq;
  }
}
