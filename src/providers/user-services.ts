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

    /*let formData:FormData = new FormData();
    
    formData.append('first_name',name[0] ); 
    formData.append('last_name',name[1] ); 
    formData.append('email', data.Username); 
    formData.append('custom_fields', JSON.stringify({"Password":data.UserPassword}) ); 
    */
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
}
