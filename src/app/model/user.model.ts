import { productdata } from "./product.model";
import { OrderModel } from "./ordermodel";

export interface userdata{
    address:string
    phone:string,
    orders:Array<OrderModel>,
    referid:string,
    referbalance:any,
    

    
}