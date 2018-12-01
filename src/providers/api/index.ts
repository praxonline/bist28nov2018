import { Injectable } from "@angular/core";
import { Device } from "@ionic-native/device";
import { Events,Config } from "ionic-angular";
import "rxjs/add/operator/map";
import {  urls } from "../../helpers/config";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { RequestOptions } from "..";
import { AppVersion } from '@ionic-native/app-version';


@Injectable()
export class ApiProvider {
  url: string = "http://bistrocare.com/pg/index.php/api/v1/";
  Version:String;
  constructor(
    public http: HttpClient,
    public device: Device,public config: Config,
    public events: Events,
    private appVersion: AppVersion,
  ) {
    this.appVersion.getVersionNumber().then(version => {
      this.Version = version;
    });

  }


  post(
    endpoint: string,
    body: any,
    params?: any,
    options?: RequestOptions
  ): Observable<any> {
    if (!options) {
      options = new RequestOptions();
    }
    if (params) {

     // params["x-api-key"] = "8k4w4840cg0wg4ogow8cwcwksc4kgcwcc88swscg";
      //params["udid"] = this.device.uuid;
      //params["dev_model"] = this.device.model;
      //params["dev_os"] = this.device.platform;
     // params["device_type"] = this.device.platform;
      options.params = params;
      options.headers = { 'Content-Type': 'application/x-www-form-urlencoded',"x-api-key":"8k4w4840cg0wg4ogow8cwcwksc4kgcwcc88swscg" };
    }
    let seq = this.http.post(this.url  + endpoint, body, options).share();
    seq.timeout(10000);
    seq.subscribe(
      res => {
        console.log(res);
      },
      err => {
        this.checkForUserToken(610);
      }
    );
    seq.catch((err:Response) => {
      let details = err.json();
      return Observable.throw(details);
    })
    return seq;
  }
  get(
    endpoint: string,
    params?: any,
    options?: RequestOptions
  ): Observable<any> {
    if (!options) {
      options = new RequestOptions();
    }
    if (params) {

     // params["x-api-key"] = "8k4w4840cg0wg4ogow8cwcwksc4kgcwcc88swscg";
  
      options.params = params;
      options.headers = { 'Content-Type': 'application/x-www-form-urlencoded',"x-api-key":"8k4w4840cg0wg4ogow8cwcwksc4kgcwcc88swscg" };
    }

    let seq = this.http.get(this.url  + endpoint,options).share();
    seq.timeout(10000);
    seq.subscribe(
      res => {
        console.log(res);
      },
      err => {
        this.checkForUserToken(610);
      }
    );
    seq.catch((err:Response) => {
      let details = err.json();
      return Observable.throw(details);
    })
    return seq;
  }
  put(endpoint: string, body: any, options?: RequestOptions): Observable<any> {
    return this.http.put(this.url + "/" + endpoint, body, options);
  }

  delete(endpoint: string, options?: RequestOptions): Observable<any> {
    return this.http.delete(this.url + "/" + endpoint, options);
  }

  patch(
    endpoint: string,
    body: any,
    options?: RequestOptions
  ): Observable<any> {
    return this.http.put(this.url + "/" + endpoint, body, options);
  }

  private checkForUserToken(rcode) {
    let inValidCode = [610, 611, 613, 614];
    if (inValidCode.indexOf(rcode) > -1) {
      this.events.publish("user:goToLogin");
    }
  }
}
