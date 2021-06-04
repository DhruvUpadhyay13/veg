import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { userdata } from "../model/user.model";
import { productdata } from "../model/product.model";
import { Subject, ReplaySubject } from "rxjs";
import { stringify } from "querystring";
import { orderid } from "../model/orderid.model";
// import { interceptingHandler } from "@angular/common/";
import { catdata } from "../model/catdata.model";
import { imagedata } from "../model/imagedatamodel";
import { images } from "../model/appimage.model";
import { vegetableseller } from "../model/vegtablesseller.model";


@Injectable()
export class ApiService{
products=new Subject<productdata[]>();
homepage=new Subject<boolean>();
skeleton=new Subject<boolean>();   
draftbooking={};
producterror=new Subject<boolean>()
dataloaded=new Subject<boolean>()
pageready=new Subject<boolean>()
productname=new ReplaySubject<string[]>()
dataloaded1=new  ReplaySubject<boolean>()
    constructor(private http:HttpClient){

    }

    // check(){
    //     return  this.http.get <string>('http://localhost:8000/https://jagdamba10.herokuapp.com/check1').subscribe(data=>{
    //         console.log(data)
    //     })
    // }
//     check (){

      
//           this.http.post('http://localhost:8000/save',{phone:"9643591536",address:"A-40"}).subscribe(data=>{
//               console.log(data)
//           })    
      
// }

icheck(){
    const InterceptorSkipHeader = new HttpHeaders({
        'X-Skip-Interceptor': ''
      });

 this.http.get('https://i.ibb.co/cgPxvPh/mango-frooti-bottle-500x500.jpg',{headers:InterceptorSkipHeader}).subscribe(data=>{
     console.log(data)
 })
}

getlogo(){
   return this.http.get('http://localhost:8000/getlogo')
}

// databaseimages(data){
//    console.log("database")
//  this.http.post<productdata[]>('http://localhost:8000/databaseimages',{productdata:data}).subscribe(data=>{
//     //  console.log("kdno")
//     // var ar= new Uint8Array( data[0].data.data)
//     // var strchar=String.fromCharCode.apply(null,ar)
//     //  var str=btoa( strchar)
//     //  console.log(str)
//  })


// }


productimage(name){
    console.log("dokdoo")
   return this.http.post('http://localhost:8000/databaseimages',{name:name})
 

}

catdata(){
   return this.http.get<catdata[]>('http://localhost:8000/category')
}

session(phone,notlogin){
    
 return   this.http.post<userdata[]>('http://localhost:8000/session',{phone:phone},{params:{notlogin:notlogin}})
   
        
     
    
}
addtocart(cartproducts){
    return this.http.post<userdata[]>('http://localhost:8000/cart',{cartproducts:cartproducts})
}

changeproductname(productname:string[]){
    console.log("change product running")
console.log(productname)
    this.productname.next(productname)
}
uploadimage(file,phone,address){


const InterceptorSkipHeader = new HttpHeaders({
  'X-Skip-Interceptor': ''
});
console.log("file")
console.log(file)
return this.http.post<imagedata>("https://api.imgbb.com/1/upload?key=51e76336e4de9c8090d60cf6ec1ef666",file,{headers:InterceptorSkipHeader,params:{phone:phone,address:address}})
}

sendimage(url,address,slotvalue,formdata,number ){
    console.log("form")
    console.log(formdata)
    return this.http.post<String>('http://localhost:8000/sendimage',formdata,{ params:{url:url,address:address,slotvalue:slotvalue,number:number}})
       


}
orderid(update,newid){
    return this.http.get <orderid>('http://localhost:8000/orderid',{params:{update:update,newid:newid}})
}
getimages(){
    return this.http.get <images[]>('http://localhost:8000/getimages')
}

logindata(num){
    return  this.http.get <userdata>('http://localhost:8000/logindata',{params:{phone:num}})   
}

orderdetails(){
    console.log("order")
    return this.http.get <string>('http://localhost:8000/protectedpage')
}

getdata (number){

      
        return  this.http.get <userdata>('http://localhost:8000/data',{params:{phone:number}})    
      
}
getorders (num){

      
    return  this.http.get <userdata[]>('http://localhost:8000/getorder',{params:{phone:num}})    
  
}

order (orderdetails,address,login,phone,orderid,cancelorder,deliveryaddress,slotvalue,total,seller,referid,referbalance,userbalance,savings){

      console.log(address)
    return  this.http.post <string>('http://localhost:8000/order',{orderdetails,address,referid,referbalance,userbalance,phone:phone,savings:savings},{params:{login:login,phone:phone,
    orderid:orderid,cancelorder:cancelorder,deliveryaddress:deliveryaddress,slotvalue:slotvalue,total:total,seller:seller,referid:referid,}})    
  
}

getvegetables(){
     return this.http.get <vegetableseller[]>('http://localhost:8000/vegetables')

}

getproducts(search:string,vegetables){
    console.log("produt runnning")
      this.http.get<productdata[]>('http://localhost:8000/getproduct',{params:{search:search,vegetables:vegetables}}).subscribe(data=>{
      console.log("dsl,dd"+data)   
      data=data.filter((el,index)=>{
              return el!=null
          })
          this.skeleton.next(false)
        
      this.products.next(data);
      this.producterror.next(false);
          console.log("data")
         
      },(err)=>{
          if(err){
              this.producterror.next(true)
          }
      })
}
getalldata(search:string,vegetables){
    console.log("produt runnning")
  return this.http.get<productdata[]>('http://localhost:8000/getproduct',{params:{search:search,vegetables:vegetables}})

     
}
sendotp(phone){
    console.log("otp sending")
    const InterceptorSkipHeader = new HttpHeaders({
        'X-Skip-Interceptor': ''
      });
return  this.http.get<{Status:string,Details:string}>(`https://2factor.in/API/V1/0820314b-b379-11ea-9fa5-0200cd936042/SMS/${phone}/AUTOGEN`,{headers:InterceptorSkipHeader})

}
//free api key ab94cc22-b501-11ea-9fa5-0200cd936042

//paid: 0820314b-b379-11ea-9fa5-0200cd936042




verifyotp(otp,sessionid){
    const InterceptorSkipHeader = new HttpHeaders({
        'X-Skip-Interceptor': ''
      });
return  this.http.get <{Status:string,Details:string}>(`https://2factor.in/API/V1/0820314b-b379-11ea-9fa5-0200cd936042/SMS/VERIFY/${sessionid}/${otp}`,{headers:InterceptorSkipHeader})

}

}