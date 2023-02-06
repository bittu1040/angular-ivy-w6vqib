import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoadingInterceptor } from "./loading-interceptor.service";

export const httpInterceptorProviders = [
  { 
    provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true 
  }
];