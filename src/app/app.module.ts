import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';


import {AppComponent} from './app.component';
import {AuthService} from './mains/Shared/Services/auth.service';
import {MainsModule} from './mains/mains.module';
import {InterceptorService} from './mains/Shared/interceptor/interceptor.service';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MainsModule,

        SweetAlert2Module.forRoot(),
    ],
    declarations: [
        AppComponent,
    ],
    providers: [
        AuthService,
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},

    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    bootstrap: [AppComponent],

})
export class AppModule {
}
