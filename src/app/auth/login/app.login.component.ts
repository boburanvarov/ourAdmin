import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
// import {AuthService} from '../../mains/Shared/Services/auth.service';


import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MessageService} from 'primeng/api';
import {DataService} from '../../mains/Shared/Services/data.service';

@Component({
    selector: 'app-login',
    templateUrl: './app.login.component.html',
})
export class AppLoginComponent implements OnInit, OnDestroy {

    // Properties

    invalidLogin: Boolean = false;

    // Form

    userLoginForm = new FormGroup({
        userName: new FormControl('', Validators.required),
        userPassword: new FormControl('', Validators.required),
    });
    password: string | number;
    username: string;


    constructor(
        private router: Router,
        // private authService1: AuthService,
        private messageService: MessageService,

        private dataService: DataService
    ) {
    }

    ngOnInit(): void {

        this.dataService.clearSessionStorage();

    }


    ngOnDestroy(): void {
    }


    signIn() {

        if (!this.userLoginForm.valid) {
            console.log('form error');
            return;
        }
        console.log('submitted');
        const username = this.userLoginForm.controls['userName'].value;
        const password = this.userLoginForm.controls['userPassword'].value;
        // this.authService1.login(username, password).subscribe(res => {
        //     sessionStorage.setItem('user', JSON.stringify(res));
        //     this.router.navigate(['/']).then();
        // });


    }



}
