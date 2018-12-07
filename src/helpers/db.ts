import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DbProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DbProvider {
    cart : Array<any>;
    UserInfo : any;
    UserCard : any = [];
  constructor() {
        this.cart = new Array();
  }
  public setUserInfo(user){
    this.UserInfo = user;
  }
  public getUserInfo(){
    return  this.UserInfo ;
  }
  public setCardInfo(user){
    this.UserCard.push(user);
  }
  public getCardInfo(){
    return  this.UserCard ;
  }
     public setCartlist(list)
    {
       this.cart.push(list); 
    }
    public addToCart(item)
    {
   
    }

    public getCart()
    {
      return this.cart
    }
     public removeAllCartItems()
    {
        this.cart=[];
    }
}
