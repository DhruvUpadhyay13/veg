import { Component, OnInit } from "@angular/core";
import { CancelService } from "./cancelservice";

@Component({
    selector: 'cancel',
    templateUrl: './cancel.html',

    styleUrls: ['./cancel.scss']
})
export class cancelComponent implements OnInit {
constructor(private service :CancelService){

}
status=""
status1=""
err=false
ngOnInit(){
  
}
cancelorder(){
    var id=<HTMLInputElement>document.getElementById("id1input");
    this.service.cancelorder(id.value,true).subscribe(data=>{
        this.status=data
        console.log(data)
    },err=>{
    this.err=true;
    })
}

deliverorder(){
    var id=<HTMLInputElement>document.getElementById("idinput");
    this.service.deliverorder(id.value,false).subscribe(data=>{
        this.status=data
        console.log(data)
    },err=>{
    this.err=true;
    })
}

}