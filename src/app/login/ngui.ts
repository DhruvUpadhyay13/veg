import {
    Component,
    ContentChild,
    ElementRef,
    EventEmitter,
    Inject,
    Input,
    OnDestroy,
    OnInit,
    Output,
    PLATFORM_ID,
    Renderer2,
    TemplateRef,
    ViewChild,
    ChangeDetectorRef
   } from '@angular/core';
  
  import { isPlatformBrowser } from '@angular/common';
import { LoginComponent } from './login.component';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from '../service/apiservice';
import { productdata } from '../model/product.model';
  
  
  @Component({
    selector: 'ngui-in-view',
    template: `
      <ng-container *ngIf="inView" [ngTemplateOutlet]="template">
      </ng-container>
    `,
    styles: [':host {display: block;},img:{align-self:center}']
  })
  export class NguiInViewComponent extends LoginComponent implements OnInit, OnDestroy {
    observer: IntersectionObserver;
    inView: boolean = false;
    once50PctVisible: boolean = false;
    @Input() productdata:Array<productdata>
    @Input() copyproductdata:Array<productdata>
    @Input() currentproduct:string
  
    @ContentChild(TemplateRef) template: TemplateRef<any>;
    @Input() options: any = {threshold: [.1, .2, .3, .4, .5, .6, .7, .8]};
    @Output('inView') inView$: EventEmitter<any> = new EventEmitter();
    @Output('notInView') notInView$: EventEmitter<any> = new EventEmitter();
    productname:string[]
    constructor(
      public service: ApiService,
      public element: ElementRef,
      public renderer: Renderer2,
     
      @Inject(PLATFORM_ID) private platformId: any,public domSanitizer: DomSanitizer, public cdRef: ChangeDetectorRef,) {
        super(domSanitizer,cdRef,service);
    }
  
    ngOnInit() {
       this.service.productname.subscribe(data=>{
        
         this.productname=data
       })
      if (isPlatformBrowser(this.platformId)) {
        
        this.observer = new IntersectionObserver(this.handleIntersect.bind(this), this.options);
        this.observer.observe(this.element.nativeElement);
      }
    }
  
    ngOnDestroy(): void {
      this.observer.disconnect();
    }
  
    handleIntersect(entries, observer): void {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) { 
          this.inView = true;
          this.defaultInViewHandler(entry);
          this.inView$.emit(entry);
        } else {
          this.notInView$.emit(entry);
        }
      });
    }
  
    defaultInViewHandler(entry) {
      if (this.once50PctVisible)
        return false;
      if (this.inView$.observers.length)
        return false;
  
      if (entry.intersectionRatio < 0.8) {
          
        let opacity = entry.intersectionRatio * (1/0.8);
        let blur = 20 - Math.floor(entry.intersectionRatio * 10)*4;
        let filter = `blur(${blur}px)`;
        Object.assign(entry.target.style, {opacity, filter});
      } else {
       
     
     
          this.nameadjust(this.currentproduct,this.productname)      
        
         entry.target.style.opacity = 1;
         entry.target.style.filter = 'unset';
  
         this.once50PctVisible = true;
      }
    }
  }
  