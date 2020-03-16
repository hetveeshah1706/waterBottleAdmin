import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class BillDataService {
  url:string="http://localhost:3000/bill/";
  customer_url:string="http://localhost:3000/customersForBill/"
  billdetails_url:string="http://localhost:3000/getBillDetails/"
  pastorder_url:string="http://localhost:3000/pastorder/";
  constructor(public _http:HttpClient) { }
  getBillDetails(){
    return this._http.get(this.billdetails_url)
  }
  getAllData(){
    return this._http.get(this.url)
  }
  getDataByID(order_id)
  {
    return this._http.get(this.url+order_id)
  }
  getCustomerForBill(){
    return this._http.get(this.customer_url)
  }
  addBill(item){
    let body=JSON.stringify(item);
    console.log(body)
    let head1=new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url,body,{headers:head1});
  }
  getorderbycustomerid(id){
    return this._http.get(this.pastorder_url+id);
  }

}
