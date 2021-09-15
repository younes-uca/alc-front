import {Injectable, Inject, Optional} from '@angular/core';
import {HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {LocaleStorageService} from './locale-storage.service';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

    constructor(private localeStorageService: LocaleStorageService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        let authReq = req;
        const token = this.localeStorageService.getToken();
        if (token != null) {
            // for Spring Boot back-end
            authReq = req.clone({headers: req.headers.set(TOKEN_HEADER_KEY, token)});

            // for Node.js Express back-end
            // authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token) });
        }
        return next.handle(authReq);
    }
}
