import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {AppLoginComponent} from './login/app.login.component';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {ButtonModule} from 'primeng/button';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputTextModule} from 'primeng/inputtext';
import {MenuService} from '../mains/menu/app.menu.service';
import {RippleModule} from 'primeng/ripple';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppBreadcrumbService} from '../mains/breadcrumb/app.breadcrumb.service';
import {ToastModule} from 'primeng/toast';




@NgModule({
    declarations: [
        AppLoginComponent,
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        ButtonModule,
        InputNumberModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        RippleModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        ToastModule
    ],
    providers: [
        MenuService,
        AppBreadcrumbService,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ]
})

export  class  AuthModule{}
