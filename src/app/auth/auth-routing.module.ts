import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppLoginComponent} from './login/app.login.component';

const routes: Routes = [
    {
        path: '', component: AppLoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}
