import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CancelService{
  constructor(private http:HttpClient){
      
  }

cancelorder(orderid,cancel){
    return this.http.post<string>('https://jagdamba-app.herokuapp.com/cancelorder',{},{params:{ 
      orderid:orderid,cancelorder:cancel}})
}

    deliverorder(orderid , cancel){
    
        return   this.http.post<string>('https://jagdamba-app.herokuapp.com/cancelorder',{},{params:{orderid:orderid,cancelorder:cancel}})
          
               
         
           
       }
       


}