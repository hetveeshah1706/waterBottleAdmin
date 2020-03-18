import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { OrderDeliveryServiceService } from '../order-delivery/order-delivery-service.service';
import { EmpDataService } from '../emp/emp-data.service';

@Component({
  selector: 'app-add-order-delivery-assigned',
  templateUrl: './add-order-delivery-assigned.component.html',
  styleUrls: ['./add-order-delivery-assigned.component.css']
})
export class AddOrderDeliveryAssignedComponent implements OnInit {
  displayedColumnsOrder:string[]=['check','order_id','customer_name','pro_name'];
  selectedOrderArr: number[] = [];
  dataSourceOrder= new MatTableDataSource();

  displayedColumnsEmployee: string[] = ['check','emp_name'];
  selectedEmployeeID: number = 0;
  dataSourceEmployee= new MatTableDataSource();
  constructor(public _orderSer:OrderDeliveryServiceService,public _empser:EmpDataService) { }

  ngOnInit() {
    this._orderSer.getAllOrderNotAssigned().subscribe(
      (dataOrder:[]) => {

        this.dataSourceOrder.data = dataOrder;
        console.log(this.dataSourceOrder.data)
      }
    );

    this._empser.getAllemp().subscribe(
      (dataEmployees:[]) => {
          this.dataSourceEmployee.data = dataEmployees;
      }
    );
  }

  onRadioBtnChangeEmployee(item: number) {
    this.selectedEmployeeID = item;
  }

  onCheckboxChangeOrder(item) {
    if(this.selectedOrderArr.find(x => x == item.order_id))
    {
        this.selectedOrderArr.splice(this.selectedOrderArr.indexOf(item.order_id), 1);
    } else
    {
        this.selectedOrderArr.push(item.order_id);
    }
  }

  onSubmit() {
    if (this.dataSourceOrder.data.length > 0) {
      let objOrderAssigned = {
        'selectedEmployeeID': this.selectedEmployeeID,
        'selectedOrderArr' : this.selectedOrderArr
      };
      console.log(objOrderAssigned)
      this._orderSer.addOrderAssigned(objOrderAssigned).subscribe(
      (x: any) => {
         console.log(x);
        if (x.insertId > 0) {
          alert('Successfully Assgined');
        }
      });
    }
  }
}
