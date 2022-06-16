import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Utils} from '../Shared/Utilts/Utils';

@Injectable({
    providedIn: 'root'
})

export class AdminGuard implements CanActivate {
    constructor(private router: Router) {
        const role = Utils.getToSessionStorage('login');
        console.log(role.user.roles[0].name);
    }

    canActivate(next: ActivatedRouteSnapshot): boolean | Observable<boolean> {
        const role = Utils.getToSessionStorage('login');

        if (role && role.user.roles[0].name == 'ADMIN') {
            this.router.navigate(['admins/departament']).then();
            return true;
        }

        return false;
    }

}
