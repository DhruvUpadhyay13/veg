import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable()
export class CustomInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    console.log("interceptor running")
    const InterceptorSkip = 'X-Skip-Interceptor';
    if (request.headers && request.headers.has(InterceptorSkip)) {
      const headers = request.headers.delete(InterceptorSkip);
      return next.handle(request.clone({ headers }));
    }
    else{
      request = request.clone({
        withCredentials:true,
      
     
     });
     return next.handle(request);
    }
    
   
  }
}