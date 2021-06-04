import { Component, OnInit, Renderer2, QueryList, ViewChildren } from '@angular/core';
// import { ApiService } from './service/apiservice';
// import { DomSanitizer } from '@angular/platform-browser';
// import { Platform } from '@angular/cdk/platform';
import { Router } from '@angular/router';
import { ApiService } from './service/apiservice';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  productview: boolean;
  phoneerror = false;
  invalidphone = false;
  phoneerror1 = false;
  invalidphone1 = false;
  phoneerror2 = false;
  click = false;
  invalidphone2 = false;
  invalidotp = false;
  invalidotp1 = false;
  invalidotp2 = false;
  phonenumber = ""
  anyerror = false;
  pleasewait = false;
  otp = false;
  otp1 = false;
  otp2 = false;
  wait = false;
  login = false;
  otpsession;
  subscribe :any;
  logo = "https://i.ibb.co/rxvGNCn/circle-cropped-2.png";
  backButtonSubscription;
 
  constructor(public router: Router, private renderer: Renderer2, private service: ApiService,
) {
// this.subscribe=this.platform.backButton.subscribeWithPriority(666666,()=>{
//   if(this.constructor.name=="AppComponent"){
//     if(window.confirm("do you want to exit")){
//       navigator["app"].exitApp()
//     }
//   }
// })

  }
  ngOnInit() {

    //   this.service.dataloaded1.subscribe(data=>{
    //     console.log("dtata " +data)
    //     console.log("heyyy")
    // this.click=data;
    //   })
    if (localStorage.getItem("phone") != null || localStorage.getItem("phone") != undefined) {
      this.login = true
    } else {
      this.login = false
    }

    //   this.service.getlogo().subscribe(data=>{
    //     console.log(data)
    //     var imageBase64String  = btoa(new Uint8Array(data[0].binaryimg.data).reduce(function (data, byte) {
    //         return data + String.fromCharCode(byte);
    //     }, ''));

    //     this.domSanitizer.bypassSecurityTrustUrl(imageBase64String);


    //     this.logo = 'data:image/png;base64,' + imageBase64String;


    // })
    //   this.service.pageready.subscribe(data=>{


    //       this.dataloaded=true;   





    //     console.log("app loaded")
    //     console.log(this.dataloaded)
    //     console.log(data)

    //   })
    //   this.productview=false;
    //   this.service.homepage.subscribe(data=>{
    //     this.productview=data;
    //     console.log("product vuew")
    //   })
    // }
    // this.initializeApp()

  }
  // initializeApp() {
  //   this.platform.ready().then(() => {

  //     this.backButtonEvent();

  //   });
  // }

  // backButtonEvent() {
  //   this.backButtonSubscription = this.platform.backButton.subscribe(async () => {
  //     this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
  //       if (outlet && outlet.canGoBack()) {
  //         this.router.navigateByUrl('')
  //         this.click = false;
  //         this.login = true;
  //       } else if (
  //         this.router.url === "app"

  //       ) {
  //         this.click = false;
  //         this.login = true;
  //         this.presentAlertConfirm();
  //       }
  //     });
  //   });
  // }


  // async presentAlertConfirm() {
  //   const alert = await this.alertController.create({
  //     header: 'Confirm!',
  //     message: 'Confirm to Exit App !!!',
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         cssClass: 'secondary',
  //         handler: (blah) => {
  //           console.log('Confirm Cancel: blah');
  //         }
  //       }, {
  //         text: 'Exit',
  //         handler: () => {
  //           console.log('Confirm Okay');
  //           navigator["app"].exitApp();
  //         }
  //       }
  //     ]
  //   });
  //   await alert.present();
  // }


  //Called when view is left
  ngOnDestroy() {
    // Unregister the custom back button action for this page
    this.backButtonSubscription.unsubscribe();
  }

  navigate() {
    this.wait = true;
    this.router.navigateByUrl('app');
    setTimeout(() => {
      this.click = true
    }, 500);

    // window.location.="./app"




  }


  input1(phone) {
    // this.session1('register', false, null)
    if (phone.value == "") {
      this.phoneerror1 = true
      this.invalidphone1 = false;
    } else {
      this.phoneerror1 = false;
      if (phone.value.length != 10) {
        this.invalidphone1 = true;
      } else {
        this.phonenumber = phone.value
        this.pleasewait = true;
        this.anyerror = false;
        // this.pleasewait = false;


        // this.invalidphone1 = false;

        this.verify()
        //     this.service.sendotp(this.phonenumber).subscribe(data => {

        //         this.anyerror = false;
        //         this.pleasewait = false;
        //         this.invalidphone1 = false;
        //         this.otp1 = true;



        //       this.otpsession = data.Details

        //     }, (err => {

        //       this.anyerror = true;
        //     }))

      }
    }


  }

  navigate1() {
    this.router.navigateByUrl('a');

    // window.location.="./app"

  }
  sendotp() {

    var phone = <HTMLInputElement>document.getElementById('phone')

    localStorage.setItem("phone", JSON.stringify(phone.value))

  }
  verify() {



    // console.log(otp.value)
    var otp = <HTMLInputElement>document.getElementById('otp')
    this.pleasewait = true;
    var phone = <HTMLInputElement>document.getElementById('phonemain')
    var value = JSON.stringify(phone.value)
     localStorage.setItem("phone", JSON.stringify(phone.value))
     
     this.service.session(value, false).subscribe(data => {
            localStorage.setItem("phone", JSON.stringify(phone.value))
  
            this.router.navigateByUrl('app');
            setTimeout(() => {
              this.pleasewait = false;
              this.login = true;
              this.click = true;
            }, 500);
            this.router.navigateByUrl('app');
          })
  
  
      //       //     })
    // this.service.verifyotp(otp.value, this.otpsession).subscribe((data) => {

    //   if (data.Status == "Success") {
    //     var phone = <HTMLInputElement>document.getElementById('phonemain')
    //     var value = JSON.stringify(phone.value)
    //     this.service.session(value, false).subscribe(data => {
    //       localStorage.setItem("phone", JSON.stringify(phone.value))

    //       this.router.navigateByUrl('app');
    //       setTimeout(() => {
    //         this.pleasewait = false;
    //         this.login = true;
    //         this.click = true;
    //       }, 500);



    //       //     })

    //       //   }
    //       //   else {

    //       //   }
    //     })

    //   }

    // })

  }
}
