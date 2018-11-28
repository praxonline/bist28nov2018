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

    let formData:FormData = new FormData();
    formData.append('doctorName', data.doctorName); 
    formData.append('address', data.address); 
    formData.append('contactNo', data.contactNo); 
    formData.append('clinicName', data.clinicName); 
    formData.append('clinicAddress', data.clinicAddress); 
    formData.append('clinicContactNo', data.clinicContactNo); 
    formData.append('passTxt', data.passTxt); 
    formData.append('MRCode', data.MRCode);
    formData.append('timeSet', JSON.stringify(data.timeSet)); 

    let seq = this.api.post(urls.register, formData,{} , options).share();
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
  registerPatient(data){
    let options = new RequestOptions();

    let formData:FormData = new FormData();
    formData.append('userName', data.userName); 
    formData.append('address', data.address); 
    formData.append('contactNo', data.contactNo); 
    formData.append('passTxt', data.passTxt); 

    let seq = this.api.post(urls.registerPatient, formData,{} , options).share();
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
  getUserProfile(data){
    let options = new RequestOptions();

    let formData:FormData = new FormData();
    formData.append('DocId', data.DocId); 
    let seq = this.api.post(urls.getUserProfile, formData, options).share();
    return seq;
  }
  savePushData(data){
    let options = new RequestOptions();

    let formData:FormData = new FormData();
    formData.append('userId', data.userId); 
    formData.append('DeviceOS', data.DeviceOS); 
    formData.append('deviceUDID', data.deviceUDID); 
    formData.append('token', data.token); 
    let seq = this.api.post(urls.savePushData, formData, options).share();
    return seq;
  }
  forgotPassword(data) {
    let options = new RequestOptions();
    let params = data;
    console.log(params);
    let seq = this.api.post(urls.forgot_password, params, options).share();
    return seq;
  }
  editDocprofile(data){

    let options = new RequestOptions();
    let formData:FormData = new FormData();
    formData.append('doctorName', data.doctorName); 
    formData.append('address', data.address); 
    formData.append('contactNo', data.contactNo); 
    formData.append('clinicName', data.clinicName); 
    formData.append('clinicAddress', data.clinicAddress); 
    formData.append('clinicContactNo', data.clinicContactNo); 
    formData.append('passTxt', data.passTxt); 
    formData.append('docId', data.docId); 
    formData.append('timeSet', JSON.stringify(data.timeSet)); 
    let seq = this.api.post(urls.editDocprofile, formData,{} , options).share();
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
  logoutUser(data) {
    let options = new RequestOptions();
    let params = data;
    console.log(params);
    let seq = this.api.post(urls.logout, {}, params, options).share();
    return seq;
  }

  loginUser(data) {
    let options = new RequestOptions();

    let formData:FormData = new FormData();
    formData.append('email_address', data.email_address); 
    formData.append('password', data.password); 
    let seq = this.api.post(urls.auth, formData, {}, options).share();
    seq.subscribe(
      res => {
        console.log(res);
        if (res) {
          this.storage.set("fLogin", true);
          this.storage.set("userData", JSON.stringify(res));
        }
      },
      err => {
        console.error("Login Error", JSON.stringify(err));
      }
    );

    return seq;
  }
  add(data) {
    let options = new RequestOptions();
    let formData:FormData = new FormData();
    formData.append('UserNameTxt', data.UserNameTxt); 
    formData.append('emailTxt', data.emailTxt); 
    formData.append('phoneNo', data.phoneNo); 
    formData.append('passTxt', data.passTxt); 
    formData.append('builderId', data.builderId);
    
     
    let seq = this.api.post(urls.addUser, formData, {}, options).share();
    seq.subscribe(
      res => {
        console.log(res);
        if (res) {
          this.storage.set("fLogin", true);
          this.storage.set("userData", JSON.stringify(res));
        }
      },
      err => {
        console.error("Login Error", JSON.stringify(err));
      }
    );

    return seq;
  }
  getUserBYBuilder(data) {
    let options = new RequestOptions();
    let formData:FormData = new FormData();
    formData.append('buil_Id', data.buil_Id); 
    let seq = this.api.post(urls.userByBuilderId, formData, {}, options).share();
    seq.subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.error("Login Error", JSON.stringify(err));
      }
    );

    return seq;
  }
  view(){
    let options = new RequestOptions();
    let seq = this.api.post(urls.user, null, {}, options).share();
    seq.subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.error("Login Error", JSON.stringify(err));
      }
    );

    return seq;
  }
  getReceptionByDoc(data){
    let options = new RequestOptions();
    let formData:FormData = new FormData();
    formData.append('DocId', data.DocId); 
    let seq = this.api.post(urls.receptionByDocId, formData, {}, options).share();
    seq.subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.error("Login Error", JSON.stringify(err));
      }
    );

    return seq;
  }
  addReception(data,DocId,ReceptionId){
    let options = new RequestOptions();
    let formData:FormData = new FormData();
    formData.append('DocId', DocId); 
    formData.append('ReceptionName', data.ReceptionName); 
    formData.append('ReceptionContactNo', data.ReceptionContactNo); 
    if(data.currentTime){
      formData.append('currentTime', data.currentTime); 
    }
    formData.append('passTxt', data.passTxt);
    formData.append('ReceptionId', ReceptionId);   
    
    var seq ;
    if(ReceptionId!="0"){
        seq = this.api.post(urls.editReception, formData, {}, options).share();
    }else{
       seq = this.api.post(urls.Addreception, formData, {}, options).share();
    }
    seq.subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.error("Login Error", JSON.stringify(err));
      }
    );

    return seq;
  }
  updatePass(resData){
    let options = new RequestOptions();
    let formData:FormData = new FormData();
    formData.append('DocId', resData.DocId); 
    formData.append('oldPassword', resData.oldPassword); 
    formData.append('newPassword',resData.newPassword); 

    let seq = this.api.post(urls.updatePass, formData, {}, options).share();
    seq.subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.error("Login Error", JSON.stringify(err));
      }
    );

    return seq;
  }
  deleteReception(resData){
    let options = new RequestOptions();
    let formData:FormData = new FormData();
    formData.append('userId', resData.userId); 

    let seq = this.api.post(urls.updatePass, formData, {}, options).share();
    seq.subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.error("Login Error", JSON.stringify(err));
      }
    );

    return seq;
  }
}
