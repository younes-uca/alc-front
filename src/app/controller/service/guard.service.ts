import {Injectable} from '@angular/core';
// @ts-ignore
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {LocaleStorageService} from './locale-storage.service';


@Injectable({providedIn: 'root'})
export class GuardService implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: LocaleStorageService
    ) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.getToken();
        if (currentUser) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
        return false;
    }
}
