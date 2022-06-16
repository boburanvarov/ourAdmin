import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AdminGuard} from './mains/Guards/admin.guard';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: '',
                    redirectTo: 'auth',
                    pathMatch: 'full'
                },
                {
                    path: 'auth',
                    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
                },
                {
                    path: 'admins',
                    loadChildren: () => import('./admins/admins.module').then(m => m.AdminsModule),
                    // canActivate: [AdminGuard]
                },


                // {path: 'error', component: AppErrorComponent},
                // {path: 'access', component: AppAccessdeniedComponent},
                // {path: 'notfound', component: AppNotfoundComponent},
                // {path: '**', redirectTo: '/notfound'},
            ],
            {scrollPositionRestoration: 'enabled'}
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
