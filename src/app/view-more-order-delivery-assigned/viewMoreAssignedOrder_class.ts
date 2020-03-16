export class orderAssigned_class{
  public constructor(
  public order_delivery_id:number,
  public delivery_date:Date,
  public comment:string,
  public qty:number,
  public order_date:Date,
  public mobile_no:number,
  public pro_price:number
  ){}
}
