//on upload page after verifying otp order oage is showing
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApiService } from './service/apiservice';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


// import { cancelComponent } from './cancelapi/cancel';
// import { CancelService } from './cancelapi/cancelservice';
//import { LazyLoadImageModule,IntersectionObserverHooks  } from 'ng-lazyload-image';

// import { ServiceWorkerModule } from '@angular/service-worker';

import { LoaderComponent } from './loader/loader';
import { SharedModule } from './sharedmodule';
import { CustomInterceptor } from './interceptor/intercepter';
import { cancelComponent } from './cancelapi/cancel';
import { CancelService } from './cancelapi/cancelservice';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  //  {path:'', component:AppComponent},
  {path:'cancel', component:cancelComponent},
  {path:'app',  loadChildren: () => import('./login/login.module').then(m=>m.LoginModule)}
 
 
 
  
];

@NgModule({

  
  declarations: [
    AppComponent,
  cancelComponent
  
    
    
  

   
  ],
  imports: [
    RouterModule.forRoot(routes),
   // LazyLoadImageModule.forRoot(IntersectionObserverHooks),
   //NgxLazyImagesModule, 
   BrowserModule,
   CommonModule,
    HttpClientModule,
    SharedModule
    // MatCardModule,
  
    // FlexLayoutModule,
    // MatIconModule,
    
    // // <-- tell LazyLoadImage that you want to use IntersectionObserver
  
    // NgxSkeletonLoaderModule,
    
    // ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    

  ],
  exports:[RouterModule],
  //  providers: [ {provide:HTTP_INTERCEPTORS,useClass:CustomInterceptor,multi:true},ApiService,CancelService],
  providers: [ApiService,{provide:HTTP_INTERCEPTORS,useClass:CustomInterceptor,multi:true},CancelService],
  bootstrap: [AppComponent]
})
export class AppModule {
  //


 }
