import { Injectable } from "@angular/core";
import { Config } from "ionic-angular";
import "rxjs";

@Injectable()
export class GeneralProvider {
  State_City:any = [];
  state_list:any= [];
  selectPatient:any;
  constructor(
    public config: Config
  ) {}
  setPatient(pati){
    this.selectPatient = pati;
  }
  getPatient(){
     return this.selectPatient
  }
  setState_City(State){
    this.State_City = State;
  }
  getState_City(){
     return this.State_City
  }
  setstate_list(State){
    this.state_list = State;
  }
  getstate_list(){
     return this.state_list
  }
}
