import { Injectable } from "@angular/core";
import { Config,Platform } from "ionic-angular";

import { Storage } from "@ionic/storage";
import "rxjs/Rx";
import { ApiProvider } from "./api";
import { constants, urls } from "../helpers/config";
import { RequestOptions } from "./index";

@Injectable()
export class PatientProvider {
  constructor(
    public plt: Platform,
    public api: ApiProvider,
    public storage: Storage,
    public config: Config
  ) {}
  getHold(data){
    let options = new RequestOptions();
   
    let formData:FormData = new FormData();
    formData.append('DocId', data.DocId); 
    formData.append('status', data.status);
    let seq = this.api.post(urls.setHold, formData,{} , options).share();

    seq.subscribe(
      res => {
        if (res.token) {
         
        }
      },
      err => {
        console.error("Register Error", JSON.stringify(err));
      }
    );
    return seq;
  }
  getAllMrByDoc(data){
    let options = new RequestOptions();
    let formData:FormData = new FormData();
    formData.append('DocId', data.DocId); 
    let seq = this.api.post(urls.getAllDocMR, formData, options).share();
    return seq;
  }
  getTodayMrByDoc(data){
    var months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    let options = new RequestOptions();
    let formData:FormData = new FormData();
    var appomentDate = new Date();
    var date = appomentDate.getDate();
    var date1= "";
    if(date<10){
      date1="0"+date;
    }else{
      date1 = date+"";
    }
    formData.append('DocId', data.DocId);
    formData.append('TimeSlot', data.TimeSlot); 
    formData.append('appomentDate',date1+"-"+months[appomentDate.getMonth()]+"-"+ appomentDate.getFullYear());
    let seq = this.api.post(urls.getTodayDocMR, formData, options).share();
    return seq;
  }
  deleteMr(data){
    let options = new RequestOptions();
    let formData:FormData = new FormData();
    formData.append('mrId', data.mrId);
    let seq = this.api.post(urls.deleteMR, formData, options).share();
    return seq;
  }
  gettimeLog(data) {
    let options = new RequestOptions();
   
    let formData:FormData = new FormData();
    formData.append('DocId', data.DocId); 
  
    let seq = this.api.post(urls.getTimeByDocId, formData,{} , options).share();

    seq.subscribe(
      res => {
        if (res.token) {
         
        }
      },
      err => {
        console.error("Register Error", JSON.stringify(err));
      }
    );
    return seq;
  }
  getPatientByDoc(data) {
    let options = new RequestOptions();
    let formData:FormData = new FormData();
    formData.append('DocId', data.DocId); 
    let seq = this.api.post(urls.getPatientByDocId, formData, options).share();
    return seq;
  }
  getAppomentList(data){
    let options = new RequestOptions();
    let formData:FormData = new FormData();
    formData.append('DocId', data.DocId); 
    formData.append('patientId', data.patientId); 
    let seq = this.api.post(urls.getAppomentList, formData, options).share();
    return seq;
  }
  getCurrentPatient(data) {
    let options = new RequestOptions();
    let formData:FormData = new FormData();
    formData.append('DocId', data.DocId); 
    formData.append('currentTime', data.currentTime); 
    let seq = this.api.post(urls.getPatientByDoc, formData, options).share();
    return seq;
  }
  UpdatePatientData(patentId,dataInfo,DocId){
   
    let options = new RequestOptions();
    let formData:FormData = new FormData();
    formData.append('DocId', DocId); 
    formData.append('contactNo', dataInfo.contactNo); 
    formData.append('patientName', dataInfo.patientName); 
    formData.append('patientAddress', dataInfo.patientAddress); 
    formData.append('patientId', patentId);
    formData.append('contactGender', dataInfo.contactGender); 
    formData.append('contactAge', dataInfo.contactAge);  
    let seq = this.api.post(urls.UpdatePatientInfo, formData, options).share();
    return seq;
  }
  getPatientData(patentId,dataInfo,DocId){
    var months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    console.log(dataInfo.appomentDate);
    var date:any;
    var today_Date = new Date();
    var isToday = 0;
    if(typeof dataInfo.appomentDate.getMonth === 'function'){
       date = dataInfo.appomentDate.getDate();
    }else{
      dataInfo.appomentDate = new Date(dataInfo.appomentDate);
      date = dataInfo.appomentDate.getDate();
    }
    var msPerDay = 24 * 60 * 60 * 1000;
    var daysLeft = (today_Date.getTime() - dataInfo.appomentDate.getTime())/msPerDay;
    console.log(daysLeft);
    if(daysLeft<1){
      isToday = 1;
    }
    if(date<10){
      date = "0"+date;
    }
    let options = new RequestOptions();
    let formData:FormData = new FormData();
    formData.append('DocId', DocId); 
    formData.append('TimeSlot', dataInfo.TimeLineId); 
    formData.append('PatientNo', dataInfo.PatientNo); 
    formData.append('contactNo', dataInfo.contactNo); 
    formData.append('contactGender', dataInfo.contactGender); 
    formData.append('contactAge', dataInfo.contactAge); 
    formData.append('patientName', dataInfo.patientName); 
    formData.append('patientAddress', dataInfo.patientAddress); 
    formData.append('patientId', patentId);
    formData.append('isToday', isToday+"");
    formData.append('appomentDate',date+"-"+months[dataInfo.appomentDate.getMonth()]+"-"+ dataInfo.appomentDate.getFullYear());
    
    let seq = this.api.post(urls.addPatientInfo, formData, options).share();
    return seq;
  }
  saveMRInfo(patentId,dataInfo,DocId){
    var months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    console.log(dataInfo.appomentDate);
    var date = dataInfo.appomentDate.getDate();
    if(date<10){
      date = "0"+date;
    }
    let options = new RequestOptions();
    let formData:FormData = new FormData();
    formData.append('DocId', DocId); 
    formData.append('TimeSlot', dataInfo.TimeLineId); 
    formData.append('PatientNo', dataInfo.PatientNo); 
    formData.append('contactNo', dataInfo.contactNo); 
    formData.append('contactGender', dataInfo.contactGender); 
    formData.append('contactAge', dataInfo.contactAge); 
    formData.append('patientName', dataInfo.patientName); 
    formData.append('patientAddress', dataInfo.patientAddress); 
    formData.append('patientId', patentId);
    formData.append('appomentDate',date+"-"+months[dataInfo.appomentDate.getMonth()]+"-"+ dataInfo.appomentDate.getFullYear());
    
    let seq = this.api.post(urls.addMrInfo, formData, options).share();
    return seq;
  }
  getPatientByPhone(PhoneNo){
    let options = new RequestOptions();
    let formData:FormData = new FormData();
    formData.append('contactNo', PhoneNo);     
    let seq = this.api.post(urls.checkPhone, formData, options).share();
    return seq;
  }
  getTodayPandingPatient(data){
    let options = new RequestOptions();
    let formData:FormData = new FormData();
  
    formData.append('DocId', data.DocId); 
    formData.append('TimeSlot', data.timeLineId);
    formData.append('TodayDate', data.currentDate);  
    let seq = this.api.post(urls.getTodayAllPatient, formData, options).share();
    return seq;
  }
  getIsPandingPatient(data){
    let options = new RequestOptions();
    let formData:FormData = new FormData();
    var D=new Date();
    var M = D.getMonth()+1;
    var DA = D.getDate();
    var MA="";
    var DAT="";
    if(M<10){
      MA="0"+M;
    }else{
      MA=M+"";
    }
    if(DA<10){
      DAT="0"+DA
    }else{
      DAT=DA+"";
    }
    formData.append('DocId', data.DocId); 
    formData.append('TimeSlot', data.timeLineId);
    formData.append('TodayDate', DAT+"-"+MA+"-"+D.getFullYear());  
    if(data.currentNo){
      formData.append('currentNo', data.currentNo);
    } 
    let seq = this.api.post(urls.getPandingPatient, formData, options).share();
    return seq;
  }
  getDonePatient(data){
    let options = new RequestOptions();
    let formData:FormData = new FormData();
    formData.append('DocId', data.DocId); 
    formData.append('appointmentId', data.appointmentId); 
    if(data.nextContactNo){
      formData.append('nextContactNo', data.nextContactNo);
    }
         
    
    let seq = this.api.post(urls.getDonePatient, formData, options).share();
    return seq;
  }
  deletePatient(data){
    let options = new RequestOptions();
    let formData:FormData = new FormData();
    formData.append('appointmentId', data.appointmentId); 

    let seq = this.api.post(urls.deletePatient, formData, options).share();
    return seq;
  }
  markFavorite(data){
    let options = new RequestOptions();
    let formData:FormData = new FormData();
    formData.append('DocId', data.DocId); 
    formData.append('patientId', data.patientId);  
    if(data.favoriteId){
      formData.append('favoriteId', data.favoriteId);   
    } 
    let seq = this.api.post(urls.markFavorite, formData, options).share();
    return seq;
  }
  fileUpload(data){
   
  }
}
