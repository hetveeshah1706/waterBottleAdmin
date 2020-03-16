import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrderDeliveryServiceService {
  public url:string=environment.url+"orderdelivery/";
  public orderurl:string=environment.url+"order/";
  public empurl:string=environment.url+"emp/";
  public orderAssignedUrl:string="http://localhost:3000/orderAssigned/"
  public orderNotAssignedUrl:string="http://localhost:3000/orderNotAssigned/"

  constructor(public _http:HttpClient) { }
  getAllOrder()
   {
     return this._http.get(this.url);
   }
   deleteOrderdel(order_delivery_id:number){
    return this._http.delete(this.url+order_delivery_id);
   }
   getAllOrderAssigned(){
     return this._http.get(this.orderAssignedUrl);
   }
   getAllOrderNotAssigned(){
    return this._http.get(this.orderNotAssignedUrl);
  }
  addOrderAssigned(item)
  {
    console.log(item)
    //const body = JSON.stringify(item);
    //const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.post(this.orderNotAssignedUrl, item);
  }

}
