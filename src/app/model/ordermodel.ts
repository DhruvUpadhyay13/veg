import { productdata } from "./product.model";

export interface OrderModel{
    orderid:String,
    status:String,
    deliveryaddress:String,
    order:Array<productdata>,
    total:string,
    savings:string

}