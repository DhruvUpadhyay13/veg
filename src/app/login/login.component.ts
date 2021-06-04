//https://accounts.google.com/DisplayUnlockCaptcha
import { Component, OnInit, AfterViewInit, AfterContentInit, ChangeDetectorRef } from "@angular/core";
import { ApiService } from "../service/apiservice";
import { userdata } from "../model/user.model";
import { productdata } from "../model/product.model";

import { cartdata } from "../model/cartmodel";

import { catdata } from "../model/catdata.model";
import { images } from "../model/appimage.model";
import { vegetableseller } from "../model/vegtablesseller.model";
import { DomSanitizer } from '@angular/platform-browser';




@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',

    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit, AfterContentInit {
    // mySlideOptions={items: 3, dots: true, nav: true};
    // myCarouselOptions={items: 3, dots: true, nav: true};
    config: IntersectionObserverInit;
    info: string
    camerastart = false;
    videoWidth = 0;
    videoHeight = 0;
    pbalance;
    ptotal;
    productdata: Array<productdata>
    copyproductdata: Array<productdata>
    userloaded = false;
    intervalId;
    exist: boolean
    click = false;
    img = "https://i.ibb.co/J5LmQzJ/fresh-banana-500x500.jpg"
    productview = false;
    cartproducts = Array<cartdata>()
    copycartproducts = Array<cartdata>()
    cartview = false; localstream: any;
    ;
    added = false;
    currentindex = null;
    cartclick = false;
    numberoforders = 0;
    cartindex = 0;
    showorders = false;
    orderindex = null
    cartitemindex: number;
    quantity = 1;
    volume: number;
    initialprice: number;
    initialorignalprice: number;
    carttotal: number = 0;
    copycarttotal: number = 0;
    sendotp = false;
    yorder = false;
    newuser = false;
    orderpage = false;
    login = false;
    userorder: Array<userdata>
    useraddress = "";
    sessionid: string
    noorder = false;
    ordercomplete = false;
    barshow = true;
    upload = true;
    phoneerror = false;
    invalidphone = false;
    phoneerror1 = false;
    invalidphone1 = false;
    phoneerror2 = false;
    invalidphone2 = false;
    invalidotp = false;
    invalidotp1 = false;
    invalidotp2 = false;
    otp = false;
    otp1 = false;
    otp2 = false;
    phonenumber = "";
    verified = false;
    verified1 = false;
    carterror = false;
    slots = ["6-11 am"]
    rajslots = ["7-11 am"]
    slotindex = null;
    Checked = false;
    slotindex1 = null;
    Checked1 = false;
    slot1 = true;
    slot = true;
    slotvalue = "";
    pleasewait = false;
    pleasewait1 = false;
    otpsession = ""
    skeletonscreen = false;
    anyerror = false;
    anyerror2 = false;
    front = true;
    cat: Array<catdata>
    catquery = ""
    data = [{ name: "banana-kela" }, { name: "kela" }, { name: "banana" }, { name: "banana" }, { name: "banana" }, { name: "banana" }]
    addresserror = false;
    addresserror1 = false;
    sloterror = false
    cancelindex: number;
    sessiondata: string;
    starterror = false;
    searchquery: string;
    searchcomplete = false;
    appimages: Array<images>
    vegetabledata: Array<vegetableseller>
    currentseller = 0
    vegsearch = false;
    vegselected = false;
    option2 = false;
    option1 = true;
    requestterminate = false;
    alldata: Array<productdata>
    maxindex = 30;
    minindex = 0;
    logo;
    refer = false;
    referid = "self";
    productname: string[];
    referchecked = false;
    referbalance: string;
    userreferbalance: string;
    waitrefer = false;
    dataready = false;
    savingstotal: number;
    refererror = false;
    newuser1 = false;
    coconut = {
        data: null,
        _id: null,
        name: "Coconut Water",
        unit: "1 pc",
        price: 35,
        volume: 1,
        quantity: 1,
        ourprice: 30,
        status: null,
        mrp: 35,
        img: "https://i.ibb.co/zsLwrSN/coconut-water-feat.jpg",
        total: null,
        binaryimg: null
    }
    coconutcopy = {
        data: null,
        _id: null,
        name: "Coconut Water",
        unit: "1 pc",
        price: 50,
        volume: 1,
        quantity: 1,
        ourprice: 45,
        status: null,
        mrp: 35,
        img: "https://i.ibb.co/zsLwrSN/coconut-water-feat.jpg",
        total: null,
        binaryimg: null
    }
    cats = [{ name: "Dairy", img: "https://i.ibb.co/cgZnPJv/Picture-5png.jpg" }, { name: "Fruits & Vegetables", img: "https://i.ibb.co/HDTXKgB/FRUITS-AND-VEGETABLES.png" },
    { name: "Grocery", img: "https://i.ibb.co/tKymk8v/GROCERY.png" }, { name: "Pooja Essentials", img: "https://i.ibb.co/VQsPpYQ/Picture8-1.jpg" }]
    constructor(public domSanitizer: DomSanitizer, public cdRef: ChangeDetectorRef, public service: ApiService) {

        // this.service.getlogo().subscribe(data=>{
        //     var imageBase64String zzzzzz = btoa(new Uint8Array(data[0].data.data).reduce(function (data, byte) {
        //         return data + String.fromCharCode(byte);
        //     }, ''));
        //     console.log(data)
        //     this.domSanitizer.bypassSecurityTrustUrl(imageBase64String);


        //     this.logo = 'data:image/png;base64,' + imageBase64String;
        //     console.log(this.logo)

        // })

    }
    ngOnInit() {

        // this.numberoforders = localStorage.length -1
        console.log("ng pon ont")
        // this.service.databaseimages("")
        // this.service.orderdetails().subscribe(data => {
        //     this.starterror = false;
        //     this.sessiondata = data
        //     this.sessionid = data;
        //     if (data != null) {
        //         this.service.getorders(this.sessionid).subscribe(data => {
        //             this.starterror = false;
        //             this.userorder = data;




        //             if (this.userorder[0].orders.length != 0) {
        //                 this.refer = false;
        //             }
        //             // this.userorder[0].orders.reverse()
        //             // console.log("user ordermlsl")
        //             // console.log(this.userorder)

        //         }, (err) => {
        //             this.starterror = true;
        //         })
        //     }
        // })





        this.service.orderdetails().subscribe(data => {
            this.starterror = false;
            this.sessiondata = data
            this.sessionid = data;
            console.log("data" + data)
            if (data != null) {
                this.service.getorders(this.sessionid).subscribe(data => {
                    this.starterror = false;
                    this.userorder = data;

                    this.userorder[0].referbalance = parseInt(this.userorder[0].referbalance)


                    if (this.userorder[0].orders.length != 0) {
                        this.refer = false;
                        this.newuser1 = false;

                    } else {
                        this.newuser1 = true;
                    }
                    this.service.dataloaded.next(true)
                    this.service.dataloaded1.next(true)
                    this.userorder[0].orders.reverse()
                    console.log("user ordermlsl")
                    console.log(this.userorder)

                }, (err) => {
                    this.starterror = true;
                })
                this.login = true
                this.verified = true;
                this.verified1 = true;
                this.starterror = false;
                console.log(this.verified)
                console.log(this.sessionid)






            } else {
                console.log("else running")
                // this.service.catdata().subscribe(data => {
                //     console.log("cat dtat 1")
                //     this.cat = data
                //     this.cat.forEach((el, index) => {

                //         var imageBase64String = btoa(new Uint8Array(el.binaryimg.data).reduce(function (data, byte) {
                //             return data + String.fromCharCode(byte);
                //         }, ''));
                //         this.domSanitizer.bypassSecurityTrustUrl(imageBase64String);


                //         this.cat[index].img = 'data:image/png;base64,' + imageBase64String;
                //         console.log(this.cat)

                //     })

                // })

                this.service.dataloaded.next(true)

                this.service.dataloaded1.next(true)

                // console.log("else running")
                this.login = false;
                this.exist = false;

            }

        }, (err) => {

            this.starterror = true;
            this.service.dataloaded.next(true)
        })


        this.service.dataloaded.subscribe(data => {
            console.log("data subscribed")
            if (this.anyerror) {
                this.userloaded = true

                this.service.pageready.next(true)
            } else {
                if (!this.login) {
                    // setTimeout(() => {
                    this.service.pageready.next(true)
                    this.newuser1 = true;

                    // }, 5000);




                } else {

                    this.service.pageready.next(true)

                    this.newuser1 = true;


                }

                // this.service.pageready.next(true)

                //     this.newuser1=true;

                this.userloaded = true;
                // login data
                if (this.sessiondata != null) {
                    this.service.logindata(this.sessionid).subscribe(data => {
                        this.starterror = false;



                        if (data.address != "") {
                            this.useraddress = data.address
                            this.exist = true;
                            console.log("addrssfound")
                        } else {
                            console.log("no address found")
                            this.exist = false;
                        }





                    }, (err) => {
                        this.starterror = true
                    })
                }





                //login data



                //app images
                this.service.getimages().subscribe(data => {
                    console.log(data)
                    this.appimages = data;

                    // data.forEach((el, index) => {

                    //     var imageBase64String = btoa(new Uint8Array(el.binaryimg.data).reduce(function (data, byte) {
                    //         return data + String.fromCharCode(byte);
                    //     }, ''));
                    //     this.domSanitizer.bypassSecurityTrustUrl(imageBase64String);


                    //     this.appimages[index].img = 'data:image/png;base64,' + imageBase64String;
                    // })



                    this.appimages.sort(this.imagesort)

                })
                //ap images ends
                //cat data
                // this.service.catdata().subscribe(data => {
                //     console.log("cat dtat 1")
                //     this.cat = data
                //     // this.cat.forEach((el, index) => {

                //     //     var imageBase64String = btoa(new Uint8Array(el.binaryimg.data).reduce(function (data, byte) {
                //     //         return data + String.fromCharCode(byte);
                //     //     }, ''));
                //     //     this.domSanitizer.bypassSecurityTrustUrl(imageBase64String);


                //     //     this.cat[index].img = 'data:image/png;base64,' + imageBase64String;
                //     //     console.log(this.cat)

                //     // })

                // })
                //cat data  


                console.log("subs")

                var root = this;
                let timeout = null;
                let timeoutmob = null;
                let veg = <HTMLInputElement>document.getElementById('sellers')
                console.log(veg.value)
                let searchbox = <HTMLInputElement>document.getElementById('search')
                let searchboxmob = <HTMLInputElement>document.getElementById('searchmob')
                console.log(this.userloaded)
                console.log(searchboxmob)

                this.service.skeleton.subscribe(data => {
                    if (this.upload == false) {
                        this.productview = false;
                    }
                    console.log("ske;eton subject running")
                    this.skeletonscreen = data
                })

                this.service.producterror.subscribe(data => {

                    this.anyerror = data
                })
                this.service.products.subscribe((data) => {
                    console.log("data pr")
                    console.log(data)
                    this.productdata = data;
                    this.coconut = this.coconutcopy;
                    if (this.productdata.length > 200) {
                        this.productdata.splice(0, 22)
                    }
                    this.productdata.unshift(this.coconut)

                    // this.service.databaseimages(this.productdata)
                    this.searchcomplete = true;
                    this.productname = [];

                    this.productdata.forEach(el => {
                        console.log(el.price)
                        this.productname.push(el.name)
                        el.mrp = parseInt(el.price.toString()) + 2;
                        el.volume = 1;

                    })
                    console.log("product name")
                    console.log(this.productname)
                    this.service.changeproductname(this.productname)
                    this.vegsearch = false;
                    this.nameadjust();
                })

                searchboxmob.addEventListener('keyup', function (e) {
                    root.minindex = 0;
                    root.maxindex = 0;
                    root.searchcomplete = false
                    console.log("sk" + root.skeletonscreen)
                    clearTimeout(timeoutmob);

                    timeoutmob = setTimeout(function () {
                        if (searchboxmob.value != "") {
                            root.productdata = []
                            console.log("skele" + root.skeletonscreen)
                            root.skeletonscreen = true;
                            console.log("skele" + root.skeletonscreen)
                            console.log("event")
                            root.front = false;
                            root.catquery = searchboxmob.value
                            var value = root.catquery.concat('--')

                            root.searchquery = searchboxmob.value
                            console.log("search" + root.searchquery)

                            if (veg.value == "VegNGro") {
                                root.service.getproducts(searchboxmob.value, "VegNGro")
                            } else {
                                root.service.getproducts(searchboxmob.value, root.vegetabledata[root.currentseller].name)
                            }





                            this.cartview = false;
                            root.yorder = false;
                            root.productview = true;
                            root.upload = true;

                            root.service.homepage.next(true)


                        } else {
                            // root.anyerror = false;
                            // console.log("event2")
                            // this.cartview = false;
                            // root.productview = false;
                            // root.orderpage = false

                            // root.service.homepage.next(false);
                            // root.front = true;
                            // root.upload = true;
                            // root.yorder = false;

                        }



                        // this.service.getproducts(searchbox.value).subscribe(data=>{
                        //     console.log(data)
                        // })



                    }, 800);

                })


            }


        })



        this.service.getvegetables().subscribe(data => {


            this.vegetabledata = data;
            // this.service.getalldata('', null).subscribe(data => {
            //     this.alldata = data;
            //     this.alldata.splice(0, 30)

            // })
            // this.vegetabledata.forEach(el => {
            //     el.vegetables.forEach(el => {
            //         el.mrp = parseInt(el.price.toString()) + 2;

            //     })
            // })

        })




        var cookie = document.cookie.split(';')

        var products = []

        for (var i = 0; i < localStorage.length - 1; i++) {

            if (localStorage.key(i) == 'phone') {

            } else {
                console.log("error",localStorage.getItem(localStorage.key(i)))
                // products.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
            }

            // do something with localStorage.getItem(localStorage.key(i));
        }
        // cookie.forEach(el => {
        //     if (el != "") {
        //         products.push(JSON.parse(el.split('=')[1]))
        //     }
        // })
        if (products.length != 0) {
            this.cartproducts = products;
            this.carttotal = 0;
            this.cartproducts.forEach(el => {
                this.carttotal += Number(el.ourprice)
            })
            this.numberoforders = products.length
            // if (localStorage.getItem("phone") != null || localStorage.getItem("phone") != undefined) {
            //     this.numberoforders = this.numberoforders - 1
            // }
        }
















    }
    ngAfterContentInit() {

        let searchboxmob = <HTMLInputElement>document.getElementById('searchmob')

    }

    ngAfterViewInit() {





    }



    handleError(error) {
        console.log('Error: ', error);
    }

    continue() {
        this.refer = false;
        this.referid = "self"
    }
    savings() {
        this.savingstotal = 0;
        var pricetotal = 0;
        var initialprice = 0;
        var ourinitial = 0;
        var ourpricetotal = 0;
        this.cartproducts.forEach(el => {
            initialprice = el.price / el.volume
            ourinitial = el.ourprice / el.volume
            pricetotal += initialprice * el.volume
            ourpricetotal += ourinitial * el.volume
            initialprice = 0;
            ourinitial = 0;
        })
        console.log(pricetotal)
        console.log(ourpricetotal)
        this.savingstotal = pricetotal - ourpricetotal;
        if (this.userorder != undefined) {
            console.log(this.savingstotal)
            this.savingstotal = this.savingstotal + parseInt(this.userorder[0].referbalance)
            console.log(this.userorder[0].referbalance)
        }

        console.log("savings")
        console.log(this.savingstotal)
    }
    refersave() {
        this.pleasewait = true;
        this.refererror = false;
        var value = <HTMLInputElement>document.getElementById('refer')
        this.referid = value.value
        this.waitrefer = true
        this.service.getorders(this.referid).subscribe(data => {
            if (data.length == 0) {
                this.waitrefer = false;
                this.refererror = true
                this.pleasewait = false;
            } else {
                this.referbalance = data[0].referbalance
                // this.referbalance = parseInt(data[0].referbalance)
                this.waitrefer = false;
                this.refer = false;
                this.pleasewait = false;
            }

        })
    }

    getproductname() {
        console.log(this.productname)
        return this.productname
    }

    sendimage(event, phone1) {
        this.addresserror = false;
        this.sloterror = false;
        console.log("sendimage running")
        var address = <HTMLInputElement>document.getElementById('p-address')
        console.log(address.value)

        if (address.value == '') {

            this.addresserror = true


        } else if (this.slotvalue == "") {
            this.sloterror = true;
        }
        else {
            console.log(event)
            if (event.target.files.length > 0) {
                console.log("image recieved")

                for (var i = 0; i < event.target.files.length; i++) {
                    const file = event.target.files[i]
                    var formdata = new FormData();
                    formdata.append('image', file)
                    var value = this.phonenumber
                    this.pleasewait = true;
                    //  if(this.phonenumber!=''){
                    //         var value=this.phonenumber
                    //     }else{
                    //        var value=phone.value
                    //     }
                    console.log(event.target.files[i])
                    console.log(formdata)
                    this.addresserror = false;
                    this.service.sendimage('', address.value, this.slotvalue, formdata, "1").subscribe(data => {
                        if (data) {
                            this.pleasewait = false;
                            this.upload = true
                            this.barshow = false;
                            this.ordercomplete = true;
                            setTimeout(() => {
                                this.ordercomplete = false;
                                this.productview = false;

                                this.service.homepage.next(false)
                                this.front = true;
                                this.barshow = true;


                                console.log(this.cartproducts)
                                this.numberoforders = 0
                                this.slotindex = null;
                                this.Checked = false;
                                this.slotindex1 = null
                                this.Checked1 = false;
                                this.slot = true;
                                this.slot1 = true;


                            }, 5000);


                        }
                    })
                    // this.service.uploadimage(formdata, value, address.value).subscribe(data => {
                    //     console.log("imagedata")
                    //     console.log(data)
                    //     this .pleasewait = false;
                    //     this.upload = true
                    //     this.barshow = false;
                    //     this.ordercomplete = true;
                    //     setTimeout(() => {
                    //         this.ordercomplete = false;
                    //         this.productview = false;

                    //         this.service.homepage.next(false)
                    //         this.front = true;
                    //         this.barshow = true;


                    //         console.log(this.cartproducts)
                    //         this.numberoforders = 0
                    //        this.slotindex=null;
                    //         this.Checked = false;
                    //         this.slotindex1 = null
                    //         this.Checked1 = false;
                    //         this.slot = true;
                    //         this.slot1 = true;


                    //     }, 5000);

                    //     if (data) {

                    //     }
                    //     this.service.sendimage(data.data.url, address.value,this.slotvalue).subscribe(data => {
                    //         if (data == "done") {


                    //         }
                    //     })
                    // })



                }


            }
        }

    }


    // dataURItoBlob(dataURI) {
    //     // convert base64/URLEncoded data component to raw binary data held in a string
    //     var byteString;
    //     if (dataURI.split(',')[0].indexOf('base64') >= 0)
    //         byteString = atob(dataURI.split(',')[1]);
    //     else
    //         byteString = unescape(dataURI.split(',')[1]);

    //     // separate out the mime component
    //     var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    //     // write the bytes of the string to a typed array
    //     var ia = new Uint8Array(byteString.length);
    //     for (var i = 0; i < byteString.length; i++) {
    //         ia[i] = byteString.charCodeAt(i);
    //     }

    //     return new Blob([ia], { type: mimeString });
    // }

    // attachVideo(stream) {
    //     this.localstream=stream;
    //     this.renderer.setProperty(this.videoElement.nativeElement, 'srcObject', stream);
    //     this.renderer.listen(this.videoElement.nativeElement, 'play', (event) => {
    //         this.videoHeight = this.videoElement.nativeElement.videoHeight;
    //         this.videoWidth = this.videoElement.nativeElement.videoWidth;
    //     });
    // }


    reload() {
        window.location.reload()
    }
    imagesort(a, b) {
        // Use toUpperCase() to ignore character casing
        const bandA = a.name.toUpperCase();
        const bandB = b.name.toUpperCase();

        let comparison = 0;
        if (bandA > bandB) {
            comparison = 1;
        } else if (bandA < bandB) {
            comparison = -1;
        }
        return comparison;
    }

    catsearch(query, index?) {
        this.maxindex = 30;
        this.minindex = 0;
        console.log("cat seacrh running")
        this.productdata = []
        this.searchcomplete = false;
        this.catquery = query;
        var searchbar = <HTMLInputElement>document.getElementById('searchmob')
        let veg = <HTMLInputElement>document.getElementById('sellers')
        // searchbar.value = this.catquery
        if (this.productview) {

        }
        if (this.catquery.includes('Grocery')) {
            console.log("grocery block")

            this.front = false;
            this.skeletonscreen = true;
            this.searchquery = '';
            this.service.getproducts('', null)
            // setTimeout(() => {
            //     this.service.products.next(this.alldata)
            //     this.vegsearch = false;

            // }, 1000);
            setTimeout(() => {

                this.copyproductdata = this.productdata
                console.log(this.copyproductdata)
            }, 2000);
        } else {

            this.catquery = this.catquery.split(' ')[0]
            if (this.catquery == "Fruits") {
                if (veg.value == "VegNGro") {
                    var value = '11111'.concat(this.catquery)
                    var final = value.concat('@')
                    this.searchquery = final
                    console.log(final)
                    this.front = false;
                    this.skeletonscreen = true;

                    console.log("if running ")
                    this.service.getproducts(final, 'VegNGro')
                }
                else {
                    console.log("else runnign")
                    this.currentseller = parseInt(veg.value)
                    if (this.option1) {
                        this.option1 = false;
                        this.option2 = true;
                    } else {
                        this.option1 = true;
                        this.option2 = false;
                    }
                    this.front = false;
                    this.skeletonscreen = true;
                    var value = '11111'.concat("Fruits")
                    var final = value.concat('@')
                    this.searchquery = final
                    this.service.getproducts(final, 'VegNGro')
                }

            } else {
                this.searchquery = this.catquery
                console.log(this.catquery)
                var value = '11111'.concat(this.catquery)
                var final = value.concat('@')
                this.searchquery = final
                console.log(final)
                this.front = false;
                this.skeletonscreen = true;
                this.service.getproducts(final, 'other')
                this.vegsearch = false;
            }






        }

        this.cartview = false;
        this.yorder = false;
        this.productview = true;
        this.upload = true;

        this.service.homepage.next(true)

    }

    uploaddisplay() {
        this.pleasewait = false;
        this.service.homepage.next(true)
        this.front = false;
        this.upload = false;
        this.productview = false;
        this.yorder = false;
        this.anyerror = false;
        this.slotvalue = ""
    }
    slotcheck(index, value) {
        this.sloterror = false

        if (!this.Checked) {
            this.slotindex = index;
            this.Checked = true
            this.slot1 = false;
            this.slotvalue = value
            this.total()
        } else {
            this.Checked = false;
            this.slotindex = null;
            this.slot1 = true;
            this.slotvalue = ""
            this.total()
        }
        if (this.upload) {
            var finaltotal = <HTMLCollection>document.getElementsByClassName('final-total')
            console.log(finaltotal[0].innerHTML.split(':')[1])

        }
    }
    slotcheck1(index, value) {
        this.sloterror = false;
        this.total()
        if (!this.Checked1) {
            this.slotindex1 = index;
            this.Checked1 = true
            this.slot = false;
            this.slotvalue = value
            this.total()
        } else {
            this.Checked1 = false;
            this.slotindex1 = null;
            this.slot = true;
            this.slotvalue = ""
            this.total()
        }
        if (this.upload) {
            var finaltotal = <HTMLCollection>document.getElementsByClassName('final-total')
            console.log(finaltotal[0].innerHTML.split(':')[1])
        }

    }
    changeproducts(action) {
        if (action == 'next') {

            this.maxindex = this.maxindex + 30
            this.minindex = this.minindex + 30
            document.documentElement.scrollTop = 0
        } else if (action == 'prev') {
            this.maxindex = this.maxindex - 30
            this.minindex = this.minindex - 30
            document.documentElement.scrollTop = 0
        }
        console.log(this.maxindex, this.minindex)
    }
    vegetableselected(index) {
        console.log("vegetable hit")
        console.log(this.vegetabledata[index])
    }

    cartinitiate(product, index) {
        this.cartclick = true;
        this.addtobag(product, index)

        console.log("cart inittite")
    }
    productcheck(product) {
        var exist = this.cartproducts.findIndex(el => {
            return el.name == product.name
        })
        if (exist == -1) {
            return false;
        } else {
            return true;
        }
    }

    addtobag(product, index) {
        console.log(product)
        console.log(this.cartproducts)

        this.cartclick = true;
        this.carterror = false;
        var selected = false;


        this.cartproducts.forEach(el => {

            if (el.name == product.name) {
                selected = true

            } else {

            }
        })

        console.log(selected)
        if (selected) {

            var index2 = this.cartproducts.findIndex(el => {
                console.log(product.name)
                console.log(el)
                return el.name == product.name;
            })

            this.cartproducts.splice(index2, 1)
            // this.cartproducts=this.cartproducts.filter(el=>{
            //     return el.name!=product.name;
            // })
            this.numberoforders--;
            console.log("selected")
            console.log(this.cartproducts)
            this.cartindex--
            this.eraseCookie(product.name)
        } else {
            console.log("else")
            this.cartproducts.push(product)
            this.copycartproducts = this.cartproducts
            this.cartindex++;

            this.numberoforders++;
            console.log(this.cartproducts)

            this.setCookie(product.name, JSON.stringify(product), 1)


        }


        this.total()
        this.savings();
        //    session console.log(product)


        // console.log(this.cartproducts)
        // console.log(this.cartview)
    }
    eraseCookie(name) {
        // console.log("erase cookie running")
        // document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        localStorage.removeItem(name)
    }

    balanceupdate() {
        //     if (this.slotvalue == '6-7 am' || this.slotvalue == '7-8 am') {
        if (this.userorder[0].referbalance >= this.carttotal) {
            this.userorder[0].referbalance = (this.userorder[0].referbalance - this.carttotal).toString()
        } else {
            this.userorder[0].referbalance = "0"
        }
        console.log(this.referbalance + " if one")
        // } else {
        //     if (this.carttotal < 100) {

        //         if (this.userorder[0].referbalance >= this.carttotal) {
        //             if ((this.userorder[0].referbalance - (this.carttotal + 30)) > 0) {
        //                 console.log(this.userorder[0].referbalance - this.carttotal + 30)
        //                 this.userorder[0].referbalance = (this.userorder[0].referbalance - this.carttotal + 30).toString()
        //                 console.log(this.userorder[0].referbalance)
        //                 console.log("unique if")
        //             } else {
        //                 this.userorder[0].referbalance = "0"
        //                 console.log("unique else" + this.userorder[0].referbalance)
        //             }

        //         } else {
        //             this.userorder[0].referbalance = "0"
        //         }

        //     } else {
        //         if (this.userorder[0].referbalance >= this.carttotal) {
        //             this.userorder[0].referbalance = (this.userorder[0].referbalance - this.carttotal).toString()
        //         } else {
        //             this.userorder[0].referbalance = "0"
        //         }
        //     }
        //     console.log(this.referbalance + " else one")
        // }
        // var balancevalue = parseInt(this.userorder[0].referbalance)
        // var totalstring = this.carttotal.toString()

        // var previoustotal = this.carttotal

        // if (!this.referchecked) {


        //     if (parseInt(this.pbalance) > parseInt(this.ptotal)) {
        //         console.log(this.ptotal)
        //         this.carttotal = 0
        //         // console.log(balancevalue)
        //         // console.log(parseInt(totalstring))
        //         console.log("balance is greator")
        //         this.userorder[0].referbalance = (parseInt(this.pbalance) - this.ptotal).toString()
        //         //update query
        //         this.referchecked = true;
        //     } else {

        //         this.carttotal = this.ptotal - parseInt(this.pbalance)
        //         this.userorder[0].referbalance = (0).toString()
        //         // console.log(balancevalue)
        //         // console.log(totalstring)
        //         console.log("total is greator")
        //         this.referchecked = true;
        //     }
        // } else {

        //     if (parseInt(this.pbalance) > parseInt(this.ptotal)) {
        //         if (parseInt(this.ptotal) < 100) {
        //             if (this.slotvalue == '6-7 am' || this.slotvalue == '7-8 am') {
        //                 console.log("balance if")
        //                 this.carttotal = parseInt(this.ptotal)
        //             } else {
        //                 this.carttotal = parseInt(this.ptotal) - 30
        //             }

        //         }
        //         else {
        //             this.carttotal = parseInt(this.ptotal)
        //         }

        //         console.log(this.ptotal, this.pbalance)
        //         this.userorder[0].referbalance = this.pbalance
        //         // console.log(balancevalue)
        //         // console.log(parseInt(totalstring))
        //         console.log("balance is greator")

        //         this.referchecked = false;
        //     } else {

        //         this.carttotal = this.carttotal + parseInt(this.pbalance)
        //         this.userorder[0].referbalance = this.pbalance
        //         this.referchecked = false;
        //         // console.log(balancevalue)
        //         // // console.log(totalstring)
        //         console.log("total is greator")

        //     }



        //     console.log("unchecked")

        // }

    }

    setCookie(name, value, days) {
        console.log("cookie data" + name, days)
        console.log("cookie running")
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        // document.cookie = name + "=" + (value || "") + expires + "; path=/";
        window.localStorage.setItem(name, value)

    }

    removefromcart(product) {
        var index2 = this.cartproducts.findIndex(el => {
            console.log(product.name)
            console.log(el)
            return el.name == product.name;
        })
        console.log(product.price)
        this.carttotal -= product.ourprice
        this.ptotal = this.carttotal
        this.cartproducts.splice(index2, 1)
        this.eraseCookie(product.name)
        console.log(this.cartproducts)
        localStorage.removeItem(product.name)
        this.numberoforders--;
        this.total()
    }

    sortorder(a, b) {
        return b.orderid - a.orderid;
    }

    session() {
        var root = this;
        this.anyerror = false;
        this.front = false;


        if (this.sessiondata == null) {
            console.log(this.sessiondata)
            this.yorder = true;
            this.newuser = true;

            console.log(this.yorder)
            console.log("if")
            this.upload = true;

        } else {
            console.log("else")
            console.log(this.sessionid)
            this.sessionid = this.sessiondata;
            this.upload = true;
            console.log("else")
            this.service.getorders(this.sessionid).subscribe(data => {
                this.userorder = data;
                this.userorder[0].orders.reverse()
                console.log(this.userorder)

            })



            this.login = true;
            this.yorder = true;
            this.productview = false;
            this.orderpage = true;


            console.log("user order")
        }

        setTimeout(function () {
            root.service.homepage.next(true)
            this.front = false;
        }, 500);

    }
    session1(phone1, newsession, uploadsession) {

        // if (phone1) {
        //     var value = JSON.stringify(phone1)
        //     this.service.session(phone1, true).subscribe(data => {

        //         console.log(data)
        //         if (data.length == 0) {
        //             this.login = true
        //             this.verified = true;
        //             this.exist = false;
        //             this.userorder = data;
        //             this.userorder.sort().reverse()
        //             console.log(this.userorder)
        //             console.log("if runnin")
        //             this.newuser = false;
        //             this.yorder = true;
        //             this.orderpage = true;
        //             //  this.noorder=true;
        //         } else {
        //             this.login = true;
        //             this.verified = true;
        //             if (data[0].address != "") {
        //                 this.useraddress = data[0].address
        //                 this.exist = true;
        //                 console.log("addrssfound")
        //             }
        //             this.userorder = data;
        //             this.userorder.sort().reverse()
        //             console.log(this.userorder)
        //             console.log("if 0 runnin")
        //             this.newuser = false;
        //             this.yorder = true;
        //             this.orderpage = true;
        //         }
        //         // if(data[0].orders.length!=0){
        //         //     console.log("else if ")
        //         //     this.userorder=data
        //         //     this.newuser=false;
        //         //     this.noorder=false;
        //         //     this.yorder=true;
        //         //     this.orderpage=true;

        //         // }
        //     })


        // }
        // else {
        var value;
        var phone = <HTMLInputElement>document.getElementById("session")
        var phone2 = <HTMLInputElement>document.getElementById("session1")

        if (phone1 != 'register') {
            value = JSON.stringify(phone1)
            console.log("product user")
            console.log(phone1)
        } else {
            console.log(phone2)
            if (uploadsession == null) {
                console.log("unique")
                value = JSON.stringify(phone.value)
                this.phonenumber = phone.value


            }

            else {
                console.log("main")
                value = JSON.stringify(phone2.value)
                this.phonenumber = phone2.value
                console.log("upload running")
            }
        }

        this.service.session(value, newsession).subscribe(data => {


            this.anyerror = false;
            console.log("demand")
            console.log(data)
            if (data.length == 0) {

                this.service.getorders(JSON.parse(value)).subscribe(data => {
                    this.sessiondata = JSON.parse(value)
                    this.userorder = data;
                    this.userorder[0].orders.reverse()
                    console.log(this.userorder)
                    this.login = true
                    this.verified = true;
                    this.verified1 = true;
                    this.exist = false;
                    this.userorder = data;
                    console.log(this.userorder)
                    this.userorder = this.userorder.reverse()
                    console.log(this.userorder)
                    console.log("if runnin")
                    this.newuser = false;
                    this.yorder = true;
                    this.total()
                    this.dataready = true;
                    this.pleasewait = false;
                    if (phone1 != 'register' || phone2.value != '') {
                        this.orderpage = false;

                    } else {
                        this.orderpage = true
                    }

                    //  this.noorder=true;


                })
                this.sessionid = value;

            } else {
                // this.service.getorders(JSON.parse(value)).subscribe(data=>{
                this.sessiondata = JSON.parse(value)
                this.userorder = data;
                this.userorder[0].orders.reverse()
                this.login = true;
                this.verified = true;
                this.verified1 = true;
                this.total()
                if (data[0].address != "") {
                    this.useraddress = data[0].address
                    this.exist = true;
                    console.log("addrssfound")
                }
                // this.userorder = data;
                // this.userorder[0].orders.reverse()
                console.log(this.useraddress)
                console.log("if 0 runnin")
                this.newuser = false;
                // this.yorder = true;
                if (phone1 != 'register' || phone2.value != '') {
                    this.orderpage = false;
                } else {
                    this.orderpage = true
                }
                this.dataready = true;
                this.pleasewait = false;
                // })
                this.sessionid = JSON.parse(value);
            }
            // if(data[0].orders.length!=0){
            //     console.log("else if ")
            //     this.userorder=data
            //     this.newuser=false;
            //     this.noorder=false;
            //     this.yorder=true;
            //     this.orderpage=true;

            // }
        }, (err) => {
            this.pleasewait = false;
            this.anyerror = true;
        })
        setTimeout(() => {



        }, 1000);


    

}
input(phone) {
    this.session1(phone.value, false, '')

    // if (phone.value == "") {
    //     this.phoneerror = true
    //     this.invalidphone = false;
    //     this.anyerror2 = false;
    // } else {
    //     this.phoneerror = false;
    //     this.anyerror2 = false;
    //     if (phone.value.length != 10) {
    //         this.invalidphone = true;
    //         this.anyerror2 = false;
    //     } else {
    //         this.phonenumber = phone.value;
    //         this.pleasewait = true;
    //         this.service.sendotp(this.phonenumber).subscribe(data => {
    //             this.anyerror2 = false;
    //             this.otp = true;
    //             this.pleasewait = false;
    //             this.otpsession = data.Details
    //         }, (err) => {
    //             this.anyerror2 = true;
    //             this.otp = false;
    //         })
    //         this.invalidphone = false;

    //     }
    // }


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
            this.service.sendotp(this.phonenumber).subscribe(data => {
                this.anyerror = false;
                this.pleasewait = false;
                this.otpsession = data.Details

                this.invalidphone1 = false;
                this.otp1 = true;
            }, (err => {
                this.yorder = false;
                this.anyerror = true;
            }))

        }
    }


}
input2(phone) {
    //this.session1('register', false, 'phonevalue2')
    if (phone.value == "") {
        this.phoneerror2 = true
        this.invalidphone2 = false;
    } else {
        this.phoneerror2 = false;
        if (phone.value.length != 10) {
            this.invalidphone2 = true;
        } else {

            this.phonenumber = phone.value
            this.pleasewait = true;
            this.service.sendotp(this.phonenumber).subscribe(data => {
                this.otpsession = data.Details
                this.invalidphone2 = false;
                this.otp2 = true;
                this.pleasewait = false;
                this.anyerror = false;

            }, (err) => {
                this.service.homepage.next(true)
                this.front = false;
                this.upload = true;
                this.productview = false;
                this.yorder = false;
                this.anyerror = true;

            })

        }
    }


}
order() {

    this.addresserror1 = false;
    this.pleasewait1 = false;
    var address = <HTMLInputElement>document.getElementById('address');
    if (address.value == "") {
        this.addresserror1 = true;
    } else if (this.slotvalue == "") {
        this.sloterror = true
    } else {
        this.pleasewait1 = true;
        this.addresserror1 = false;
        this.sloterror = false;
        var phone = <HTMLInputElement>document.getElementById('phone');
        var id = ""
        this.service.orderid(false, null).subscribe(data => {


            var orderid = data.orderid
            var newid
            console.log(orderid)
            var finaltotal = <HTMLCollection>document.getElementsByClassName('final-total')



            if (this.login) {
                console.log("login running")
                this.balanceupdate()
                // if (this.carttotal <= 150 && this.slotvalue != "6-7 am") {
                //     if (this.slotvalue != "7-8 am") {
                //         this.carttotal = this.carttotal + 30

                //     }
                // }
                let veg = <HTMLInputElement>document.getElementById('sellers')
                var sellername;
                if (this.currentseller) {
                    sellername = this.vegetabledata[this.currentseller].name
                } else {
                    sellername = "VegNGro"
                }

                if (this.userorder[0].referid != null) {
                    this.referid = null

                    this.referbalance = this.referbalance
                } else {
                    if (this.referid == "self" || this.referid == "") {
                        this.referid = "self"
                    } else {
                        console.log("session id" + this.sessionid)
                        console.log(this.referid)
                        if (this.referid == this.sessionid) {
                            this.referid = "self"
                            this.referbalance = this.referbalance
                            console.log("fraud running")
                        } else {

                            this.referbalance = (parseInt(this.referbalance) + 100).toString()
                        }

                    }

                }

                console.log(this.cartproducts, address.value, this.login, null, orderid, false, null,
                    this.slotvalue, finaltotal[0].innerHTML, sellername, this.referid, this.referbalance, this.userorder[0].referbalance, this.savingstotal)
                this.service.order(this.cartproducts, address.value, this.login, null, orderid, false, null,
                    this.slotvalue, finaltotal[0].innerHTML, sellername, this.referid, this.referbalance, this.userorder[0].referbalance, this.savingstotal).subscribe(data => {

                        console.log(data)
                        if (data) {

                            newid = orderid + 1

                            console.log(newid)
                            this.yorder = false;
                            this.cartview = false;
                            this.pleasewait1 = false;
                            this.dataready = false;
                            this.ordercomplete = true;

                            let id = newid.toString()
                            console.log(id.toString())

                            // window.localStorage.setItem("orderid", id)
                            this.service.orderid(true, newid).subscribe(data => {

                            })
                            setTimeout(() => {
                                this.orderreset()
                            }, 5000);

                        } else {
                            console.log("error handling")
                        }
                    }, (err) => {
                        newid = orderid + 1
                        this.service.orderid(true, newid).subscribe(data => {
                            console.log("order data" + data)
                        })
                        console.log("refer" + this.referid)
                        if (err) {
                            this.yorder = false;
                            this.cartview = false;
                            this.pleasewait = false;
                            this.dataready = false;

                            this.anyerror = true;
                            this.cartview = false;
                            this.productview = false;
                        }
                        setTimeout(() => {

                            this.orderreset()
                        }, 5000);

                    })


            }
            if (!this.login) {
                this.referbalance = this.referbalance + 100
                console.log("not login")
                console.log(phone, address)
                console.log(address.value)
                if (this.carttotal <= 150 && this.slotvalue != "6-7 am") {
                    if (this.slotvalue != "7-8 am") {
                        this.carttotal = this.carttotal + 30

                    }
                }

                console.log(this.cartproducts, address.value, this.login, this.phonenumber, orderid, false)
                this.service.order(this.cartproducts, address.value, this.login, this.phonenumber, orderid, false,
                    null, this.slotvalue, this.carttotal, null, this.referid, this.referbalance, this.userorder[0].referbalance, this.savingstotal).subscribe(data => {
                        this.session1(this.phonenumber, true, null)

                        if (data != null) {


                            newid = orderid + 1


                            // let id=newid.toString()
                            // console.log(id.toString())

                            // window.localStorage.setItem("orderid",id)

                            this.service.orderid(true, newid).subscribe(data => {


                            })
                        }


                    })

                this.cartview = false;

                this.ordercomplete = true;


                setTimeout(() => {
                    this.orderreset()
                }, 5000);

            }





        })



    }

    //window.localStorage.setItem("orderid","1");


}

orderreset() {
    this.anyerror = false;

    this.cartproducts.forEach(el => {
        this.eraseCookie(el.name)
    })
    // for (var i = 0; localStorage.length-1; i++) {
    //     if (localStorage.key(i) == 'phone') {

    //     } else {
    //         localStorage.removeItem(localStorage.key(i))
    //     }
    // }
    this.ordercomplete = false;
    this.productview = false;
    this.cartview = false;
    this.service.homepage.next(false)
    this.front = true;
    this.barshow = true;
    this.cartproducts.splice(0, this.cartproducts.length)
    this.numberoforders = 0;
    this.slotindex = null
    this.Checked = false;
    this.slotindex1 = null
    this.Checked1 = false;
    this.slot = true;
    this.slot1 = true;
    console.log("reach to the end")

}

cancelorder(items, orderid, index, deliveryaddress) {

    this.cancelindex = index;
    this.pleasewait = true;
    let veg = <HTMLInputElement>document.getElementById('sellers')

    this.service.order(items, null, null, null, orderid, true, deliveryaddress, null, null, null, null, null, null, null).subscribe(data => {
        var root = this
        this.cdRef.detectChanges()
        this.userorder[0].orders[index].status = "Canceled"
        this.pleasewait = false;
        if (data != null) {


        }

    }, (err) => {

    })
    setTimeout(() => {


    }, 1000);
}
gotocart() {

    if (!this.skeletonscreen) {

        if (this.numberoforders == 0) {
            console.log(1, this.productview, this.cartview, this.cartproducts)
            this.carterror = true
            setTimeout(() => {
                this.carterror = false;
            }, 3000);
        } else {
            this.cartproducts.forEach((el, index) => {
                if (el.name == undefined) {
                    this.cartproducts.splice(index, 1)
                }
            })
            // this.cartproducts.forEach(el => {
            //     el.ourprice = el.volume * el.ourprice
            // })
            this.coconutcopy.volume = this.coconutcopy.ourprice / 45;
            this.pleasewait = false
            this.requestterminate = true;
            this.slotvalue = ""
            this.carterror = false;

            this.barshow = false;
            this.orderpage = false;
            this.productview = false;
            this.cartview = true;
            if (this.front) {
                this.front = false;
                this.catquery = ""
            } else {
                this.front = false;
            }
            this.upload = true;
            this.yorder = false;

            console.log(this.productview, this.cartview, this.cartproducts)
            // if (this.userorder[0].orders.length == 0) {
            //     console.log("cart running")
            //     this.service.addtocart(this.cartproducts).subscribe(data => {

            //     })

            // }

        }

        if (this.login) {
            this.dataready = true;
            console.log(3, this.productview, this.cartview, this.cartproducts)
        }
    }


}
gotofront() {
    this.requestterminate = true;
    this.anyerror = false;
    console.log("event2")
    this.cartview = false;
    this.productview = false;
    this.orderpage = false

    this.service.homepage.next(false);
    this.front = true;
    this.upload = true;
    this.yorder = false;

}
gotoproduct() {

    if (this.catquery == "") {


        this.barshow = true;
        this.productview = false;
        this.front = true
        this.cartview = false;
        this.slotindex = null
        this.Checked = false;
        this.slotindex1 = null
        this.Checked1 = false;
        this.slot = true;
        this.slot1 = true;
        this.skeletonscreen = false;

    } else {
        // this.coconut.price=35
        // this.coconut.ourprice=35
        // this.coconut.volume=1;
        // this.coconut.quantity=1
        console.log(this.coconut)
        console.log(this.coconutcopy)
        this.skeletonscreen = true;
        this.barshow = true;
        this.productview = true;
        this.front = false
        this.cartview = false;
        this.slotindex = null
        this.Checked = false;
        this.slotindex1 = null
        this.Checked1 = false;
        this.slot = true;
        this.slot1 = true;
        this.cartclick = true;
        this.requestterminate = true
        console.log("go to product")
        console.log(this.searchquery)
        this.referchecked = false;

    }

    let veg = <HTMLInputElement>document.getElementById('sellers')
    setTimeout(() => {
        // if (this.login) {
        //     this.userorder[0].referbalance = this.pbalance

        // }

        if (this.catquery != "") {
            console.log("ifing")
            console.log()
            if (this.catquery == "Fruits") {
                if (veg.value == "VegNGro") {

                    console.log(this.searchquery)
                    console.log(this.catquery)
                    console.log("if1");
                    var value = '11111'.concat("Fruits")
                    var final = value.concat('@')
                    this.searchquery = final
                    this.service.getproducts(final, 'VegNGro')
                    // this.service.products.next(this.vegetabledata[this.currentseller].vegetables)
                    setTimeout(() => {
                        this.skeletonscreen = false;
                    }, 1000);
                }
                else {

                    console.log("else runnign")
                    if (this.searchquery && !this.vegsearch) {
                        this.service.getproducts(this.searchquery, this.vegetabledata[this.currentseller].name)
                        console.log("if3");
                    } else {
                        console.log("if4");
                        this.service.products.next(this.vegetabledata[this.currentseller].vegetables)
                        setTimeout(() => {
                            this.skeletonscreen = false;
                        }, 500);
                    }


                }

            } else {
                if (veg.value == "VegNGro") {
                    console.log("if5");
                    console.log(this.searchquery)
                    console.log(this.vegsearch)
                    if (this.searchquery == '' && !this.vegsearch) {


                        this.alldata = this.copyproductdata
                        this.service.getproducts('', null)

                    }
                    else if (this.searchquery != '' && !this.vegsearch) {
                        this.service.getproducts(this.searchquery, 'VegNGro')
                        console.log("if6");
                    } else {
                        console.log("if7");
                        console.log("error 5")
                        console.log(this.currentseller)
                        this.service.products.next(this.vegetabledata[this.currentseller].vegetables)
                        setTimeout(() => {
                            this.skeletonscreen = false;
                        }, 500);
                    }


                } else {
                    console.log("error 5")
                    if (this.searchquery && !this.vegsearch) {
                        console.log("if8");
                        this.service.getproducts(this.searchquery, this.vegetabledata[this.currentseller].name)
                    } else {
                        console.log("if8");
                        this.service.products.next(this.vegetabledata[this.currentseller].vegetables)
                        setTimeout(() => {
                            this.skeletonscreen = false;
                        }, 500);
                    }
                }

            }





        }



    }, 500);


}
total() {

    this.carttotal = 0;
    this.copycarttotal = 0;
    this.cartproducts.forEach(el => {

        this.copycarttotal += Number(el.ourprice)
        if (!this.referchecked) {
            this.carttotal += Number(el.ourprice)
        }

    })


    this.ptotal = this.carttotal;
    if (parseInt(this.ptotal) < 100) {
        if (this.slotvalue == '6-7 am' || this.slotvalue == '7-8 am') {


        } else {
            this.ptotal = (parseInt(this.ptotal) + 30).toString()

        }

    }
    // if (this.login) {
    //     this.pbalance = this.userorder[0].referbalance
    // }



}
nameadjust(viewproductindex ?, products ?) {
    this.maxindex = 30;
    this.minindex = 0;
    this.copyproductdata = this.productdata


    if (viewproductindex != null) {

        var name = products[parseInt(viewproductindex)]

        // this.service.productimage(name).subscribe(data => {


        //     // btoa( strchar)
        //     if (data != []) {

        //         var imageBase64String = btoa(new Uint8Array(data[0].data.data).reduce(function (data, byte) {
        //             return data + String.fromCharCode(byte);
        //         }, ''));

        //         this.domSanitizer.bypassSecurityTrustUrl(imageBase64String);

        //         this.productdata[viewproductindex].img = 'data:image/png;base64,' + imageBase64String;


        //     }


        // })

    } else {


        this.requestterminate = false;
        this.productdata.forEach((el, index) => {


            this.productdata[index].name = el.name.split('-')[0];
            var imageBase64String = el.binaryimg

            //    this.domSanitizer.bypassSecurityTrustUrl(imageBase64String);
            //      this.productdata[index].img = 'data:image/png;base64,' + imageBase64String;


        })

        console.log(this.minindex, this.maxindex)
        setTimeout(() => {
            this.skeletonscreen = false;
        }, 1000);

    }


    this.productview = true;
    this.service.homepage.next(true);
    this.front = false;

}



verifyotp(otp, session ?, upload ?) {
    console.log(otp.value)
    console.log(this.otpsession)
    this.pleasewait = true;
    this.service.verifyotp(otp.value, this.otpsession).subscribe((data) => {

        if (data.Status == "Success") {

            if (session != null) {

                console.log("session uniqyue running")
                this.session1('register', false, null)
            }
            else if (upload != null) {
                console.log(upload)
                console.log('upload running')
                this.session1('register', false, 'phonevalue2')

            }
            else {
                console.log("product otp running")

                this.verified = true;
                this.exist = false;
                var phone = <HTMLInputElement>document.getElementById('phone')
                console.log(phone.value)

                this.service.getdata(phone.value).subscribe(data => {

                    this.session1(phone.value, false, '')
                    this.otp = false;
                    if (data.address != "") {
                        this.sendotp = true;
                        console.log("running")
                        this.exist = true;


                        this.click = true;
                        setTimeout(() => {
                            var address = <HTMLInputElement>document.getElementById('address')

                            console.log(address)
                            this.useraddress = data.address
                            //address.value=data.address;

                        }, 500);


                    }
                    else {
                        this.exist = false;
                        this.sendotp = true;
                        var address = <HTMLInputElement>document.getElementById('address')
                        // address.placeholder="Type your Address"

                    }
                })

            }

        }


    }, (err) => {
        console.log(err)
        if (err) {
            if (session != null) {
                if (err.statusText == "OK") {
                    this.invalidotp1 = true;
                    this.anyerror = false;
                    setTimeout(() => {
                        this.reset()
                    }, 3000);
                } else if (err.statusText == "Unknown Error") {

                    this.anyerror = true;
                }

            } else if (upload != null) {
                if (err.statusText == "OK") {
                    this.invalidotp2 = true;
                    this.anyerror = false;
                    setTimeout(() => {
                        this.reset()
                    }, 3000);
                } else if (err.statusText == "Unknown Error") {
                    this.upload = true
                    this.anyerror = true;
                }

            } else {

                if (err.statusText == "OK") {
                    this.invalidotp = true;
                    this.anyerror2 = false;
                    setTimeout(() => {
                        this.reset()
                    }, 3000);
                } else if (err.statusText == "Unknown Error") {

                    this.anyerror2 = true;
                }

            }



        }
    })

}

reset() {
    this.ordercomplete = false;
    this.productview = false;
    this.newuser = true;

    this.invalidotp2 = false;
    this.invalidotp1 = false;
    this.invalidotp = false;
    this.service.homepage.next(false)
    this.front = true;
    this.barshow = true;
    this.otp = false;
    this.otp1 = false;
    this.otp2 = false;
    this.upload = true;

    // this.numberoforders = 0

    this.yorder = false;
    // this.cartproducts.splice(0, this.cartproducts.length)
    this.cartview = false;
    this.slotindex = null
    this.Checked = false;
    this.slotindex1 = null
    this.Checked1 = false;
    this.slot = true;
    this.slot1 = true;

}
getaddress() {


}
// volumeincrease(product,index,quantity){

//     this.productdata[index].volume=(parseInt(quantity.value)+1);
// }
// volumedecrease(product,index,quantity){
//     if(parseInt(quantity.value)>0){
//         this.productdata[index].volume=(parseInt(quantity.value)-1);
//     }

// }
increasequantity1(index, quantity) {
    var item = this.cartproducts.find(el => {
        return el.name == this.productdata[index].name
    })
    var i = this.cartproducts.findIndex(el => {
        return el.name == this.productdata[index].name;
    })
    console.log("find item " + i)
    let volume = this.cartproducts[i].volume;
    var price = this.cartproducts[i].ourprice;
    var orignalprice = this.cartproducts[i].price;
    this.initialprice = Number(price) / volume
    this.initialorignalprice = Number(orignalprice) / volume
    volume++
    this.cartproducts[index].volume = volume;
    this.productdata[index].volume = volume;

    if (quantity.value == "1") {
        console.log("block running")
        var count0 = Number(quantity.value) + 1;
        this.cartproducts[i].ourprice = count0 * this.initialprice
        this.cartproducts[i].price = count0 * this.initialorignalprice
        localStorage.removeItem(this.cartproducts[i].name)
        console.log(JSON.stringify(this.cartproducts[i]))
        localStorage.setItem(this.cartproducts[i].name, JSON.stringify(this.cartproducts[index]))

    }

    var count = Number(quantity.value) + 1;

    console.log(this.initialprice)
    //        var orignal= this.productdata.find(el=>{
    // return el.name==this.cartproducts[index].name
    //         })
    //         console.log("orignal")
    // console.log(orignal)
    //         this.cartproducts[index].ourprice =  this.cartproducts[index].ourprice+ parseInt(orignal.ourprice.toString())
    this.cartproducts[i].ourprice = count * this.initialprice
    this.cartproducts[i].price = count * this.initialorignalprice

    localStorage.removeItem(this.cartproducts[i].name)
    localStorage.setItem(this.cartproducts[i].name, JSON.stringify(this.cartproducts[i]))
    this.total();

    this.savings()

}
decreasequantity2() {

}
increasequantity(index, quantity, product, index1) {

    let volume = this.cartproducts[index].volume;
    var price = this.cartproducts[index].ourprice;
    var orignalprice = this.cartproducts[index].price;
    this.initialprice = Number(price) / volume
    this.initialorignalprice = Number(orignalprice) / volume
    volume++
    this.cartproducts[index].volume = volume;

    if (quantity.value == "1") {
        console.log("block running")
        var count0 = Number(quantity.value) + 1;
        this.cartproducts[index].ourprice = count0 * this.initialprice
        this.cartproducts[index].price = count0 * this.initialorignalprice
        localStorage.removeItem(this.cartproducts[index].name)
        console.log(JSON.stringify(this.cartproducts[index]))
        localStorage.setItem(this.cartproducts[index].name, JSON.stringify(this.cartproducts[index]))

    }

    var count = Number(quantity.value) + 1;

    console.log(this.initialprice)
    //        var orignal= this.productdata.find(el=>{
    // return el.name==this.cartproducts[index].name
    //         })
    //         console.log("orignal")
    // console.log(orignal)
    //         this.cartproducts[index].ourprice =  this.cartproducts[index].ourprice+ parseInt(orignal.ourprice.toString())
    this.cartproducts[index].ourprice = count * this.initialprice
    this.cartproducts[index].price = count * this.initialorignalprice

    localStorage.removeItem(this.cartproducts[index].name)
    localStorage.setItem(this.cartproducts[index].name, JSON.stringify(this.cartproducts[index]))
    this.total();

    this.savings()
    //   console.log(this.cartproducts[index])
}

decreasequantity(index, quantity) {

    let volume = this.cartproducts[index].volume;
    if (volume != 1) {
        console.log("quanity if running")
        volume--
        this.cartproducts[index].volume = volume;
        var count = quantity.value;

        console.log(count)

        let price = this.cartproducts[index].ourprice;
        let orignalprice = this.cartproducts[index].price;
        console.log(Number(price) / Number(count))
        this.cartproducts[index].ourprice = (Number(price) - (Number(price) / Number(count)))
        this.cartproducts[index].price = (Number(orignalprice) - (Number(orignalprice) / Number(count)))
        localStorage.removeItem(this.cartproducts[index].name)
        localStorage.setItem(this.cartproducts[index].name, JSON.stringify(this.cartproducts[index]))

        this.total()
        this.savings()

    } else {

        console.log("quasntity else running")
        localStorage.removeItem(this.cartproducts[index].name)
        this.carttotal -= this.cartproducts[index].ourprice
        this.cartproducts.splice(index, 1)
        this.numberoforders--
        this.savings()
    }

}
displayorders(index) {
    if (this.orderindex == index) {
        if (this.showorders) {
            this.showorders = false;
        } else {
            this.showorders = true

        }

    } else {
        if (this.showorders) {
            this.orderindex = index
        } else {
            this.orderindex = index;
            this.showorders = true;

        }

    }



}
hideorders() {
    this.showorders = false
}
scrolltobottom() {
    window.scrollTo(0, document.body.scrollHeight);
}
}



