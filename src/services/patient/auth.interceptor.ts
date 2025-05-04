import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Interceptor running!');
  const token = localStorage.getItem('token');
  
  if (token) {
    console.log('Adding Bearer token to request');
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log('Final Authorization header:', authReq.headers.get('Authorization'));
    return next(authReq);
  }
  
  return next(req);
};