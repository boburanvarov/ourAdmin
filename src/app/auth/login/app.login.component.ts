import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MessageService} from 'primeng/api';
import {TokenService} from '../../mains/Shared/Services/token.service';
import {AuthService} from '../../mains/Shared/Services/auth.service';
import {Utils} from '../../mains/Shared/Utilts/Utils';

@Component({
    selector: 'app-login',
    templateUrl: './app.login.component.html',
    styleUrls: ['./app.login.component.scss']
})
export class AppLoginComponent implements OnInit, OnDestroy {

    // Properties

    invalidLogin: Boolean = false;
    errorMessage = '';

    // Form
    constructor(
        private router: Router,
        private authService: AuthService,
        private messageService: MessageService,
        private fb: FormBuilder,
        private dataService: TokenService
    ) {
    }

    userLoginForm = this.fb.group({
        userName: ['', Validators.required],
        userPassword: ['', Validators.required]
    });

    // DavrVacancy
    // davr2001

    ngOnInit(): void {

        Utils.clearSessionStorage();

    }


    ngOnDestroy(): void {
    }


    signIn() {

        if (!this.userLoginForm.valid) {
            this.userLoginForm.markAllAsTouched();
            console.log('form error');

            return;
        }
        console.log('submitted');
        const loginValue = this.userLoginForm.value;
        console.log(loginValue);
        const body = {
            username: loginValue.userName,
            password: loginValue.userPassword
        };
        this.authService.login(body).subscribe(res => {
                Utils.setToSessionStorage('login', res);
                this.router.navigate(['admins/departament']).then();
            },
            (error) => {
                this.invalidLogin = true;
                console.log(error);
            });


    }


}
