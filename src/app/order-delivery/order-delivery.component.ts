import { Component, OnInit,ViewChild} from '@angular/core';
import { MatTableDataSource, MatDialog} from "@angular/material";
import { order_delivery_class  } from "./order_d_class";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { OrderDeliveryServiceService } from './order-delivery-service.service';
import { Router } from '@angular/router';
import { ViewMoreOrderDeliveryAssignedComponent } from '../view-more-order-delivery-assigned/view-more-order-delivery-assigned.component';

@Component({
  selector: 'app-order-delivery',
  templateUrl: './order-delivery.component.html',
  styleUrls: ['./order-delivery.component.css']
})
export class OrderDeliveryComponent implements OnInit {
  displayedColumns: string[] = ['order_id','emp_name','delivery_date','comment','pro_name','action'];
  dataSource =new MatTableDataSource();
  order_del_arr:order_delivery_class[];
  order_delivery_id:number;
  orderDeliveryAssigned:[]=[];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(public _ser:OrderDeliveryServiceService,public _route:Router,public _dialog:MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    // this._ser.getAllOrder().subscribe(
    //   (data:order_delivery_class[])=>
    //   {
    //     this.order_del_arr=data;
    //     this.dataSource.data=this.order_del_arr;
    //   }
    // );
    this._ser.getAllOrderAssigned().subscribe(
      (data:[])=>{
        console.log(data)
        this.orderDeliveryAssigned=data
        this.dataSource.data=this.orderDeliveryAssigned
      }
    );
  }
  onDelete(item:order_delivery_class)
  {
    if(confirm('are you sure you want to delete?')){
    this._ser.deleteOrderdel(item.order_delivery_id).subscribe(
      (data:order_delivery_class[])=>{
       this.order_del_arr.splice(this.order_del_arr.indexOf(item),1);
       this.dataSource.data=this.order_del_arr;
      }
    );
    }
  }
  onViewMore(row)
  {
    this._dialog.open(ViewMoreOrderDeliveryAssignedComponent,{data:row});
  }
  onUpdate(element)
  {

  }
  onAdd()
  {
    this._route.navigate(['/nav/addOrderDeliveryAssigned'])
  }
    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();

    }
    applyFilter1(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
}

