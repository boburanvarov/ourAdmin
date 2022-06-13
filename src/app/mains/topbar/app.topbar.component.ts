import {Component} from '@angular/core';
import {AppComponent} from '../../app.component';
import {AppMainComponent} from '../main/app.main.component';
import {Router} from '@angular/router';
import {ConfirmationService, ConfirmEventType, MessageService} from 'primeng/api';
import {AuthService} from '../Shared/Services/auth.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
})
export class AppTopBarComponent {

    constructor(
        public appMain: AppMainComponent,
        public app: AppComponent,
        private router: Router,
        private authService: AuthService,
        private confirmationService: ConfirmationService,
        private messageService: MessageService) {
    }

    logOut() {
        this.router.navigate(['auth'])
    }

    confirm(event: Event) {
        this.confirmationService.confirm({
            target: event.target,
            message: 'Are you sure that you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.logOut();
            },
            reject: () => {

            }
        });
    }
}
