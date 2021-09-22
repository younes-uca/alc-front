import {Component} from '@angular/core';
import {AppComponent} from '../../app.component';
import {MenuItem} from 'primeng/api';
import {LoginService} from '../../controller/service/login.service';
import {PublicComponent} from '../../public/public.component';
import {AdminComponent} from '../../admin/admin.component';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent  {
    items: MenuItem[];

    constructor(public app: AppComponent, public appMain: PublicComponent, private serviceUser: LoginService) {
    }
}
