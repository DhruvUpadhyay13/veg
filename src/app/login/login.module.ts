import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.route.module';
import { NguiInViewComponent } from './ngui';
import { LoaderComponent } from '../loader/loader';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomInterceptor } from '../interceptor/intercepter';
import { ApiService } from '../service/apiservice';
// import { Platform } from 'ionic-angular';
// import { CarouselModule } from 'ngx-owl-carousel-o';
// import { OwlModule } from 'ngx-owl-carousel';


import { SharedModule } from '../sharedmodule';

@NgModule({
  imports: [
    CommonModule,
  LoginRoutingModule,
  MatCardModule,
  SharedModule,
  FlexLayoutModule,
  MatIconModule,
  
// OwlModule,
  // <tell LazyLoadImage that you want to use IntersectionObserver

  NgxSkeletonLoaderModule,
  
  ],
  declarations: [LoginComponent,NguiInViewComponent,
   ],
    providers: [ {provide:HTTP_INTERCEPTORS,useClass:CustomInterceptor,multi:true},ApiService,],
})
export class LoginModule { }