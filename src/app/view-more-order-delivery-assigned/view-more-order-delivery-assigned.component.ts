import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { orderAssigned_class } from './viewMoreAssignedOrder_class';

@Component({
  selector: 'app-view-more-order-delivery-assigned',
  templateUrl: './view-more-order-delivery-assigned.component.html',
  styleUrls: ['./view-more-order-delivery-assigned.component.css']
})
export class ViewMoreOrderDeliveryAssignedComponent implements OnInit {
  order_delivery_id:number;
  delivery_date:Date;
  comment:string;
  qty:number;
  order_date:Date;
  mobile_no:number;
  pro_price:number

  constructor(public dialogref: MatDialogRef<ViewMoreOrderDeliveryAssignedComponent>, @Inject(MAT_DIALOG_DATA) public data: orderAssigned_class) { }

  ngOnInit() {
    console.log(this.data)
    this.order_delivery_id=this.data.order_delivery_id;
    this.delivery_date=this.data.delivery_date;
    this.comment=this.data.comment;
    this.qty=this.data.qty;
    this.order_date=this.data.order_date;
    this.mobile_no=this.data.mobile_no;
    this.pro_price=this.data.pro_price;
  }
  onCloseClick()
  {
    this.dialogref.close();
  }
}
