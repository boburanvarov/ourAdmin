import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {URL} from '../../constants/constants';
import {map} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {Auth} from '../interface/auth';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    token: BehaviorSubject<any> = new BehaviorSubject<any>('');
    isLoggedIn: BehaviorSubject<any> = new BehaviorSubject<any>(true);

    constructor(
        private http: HttpClient,
    ) {
    }

    login(requestBody): Observable<Auth> {
        return this.http.post<Auth>(`${URL}/login`, requestBody).pipe(
            map(res => {
                this.token.next(res.a_t);
                this.setToken(res.a_t);
                this.isLoggedIn.next(true);
                return res;
            })
        );
    }

    setToken(token): void {
        localStorage.setItem('token', token);
    }

    getToken() {
        return localStorage.getItem('token');
    }

    isLoggedin() {
        let isLoggedIn: boolean;
        this.isLoggedIn.subscribe(res => {
            isLoggedIn = res;
        });
        return isLoggedIn;
    }

    getValidToken() {
        let token: string;
        this.token.subscribe(res => {
            token = res;
        });
        return token;
    }

    isValid() {
        return !!this.getToken();
        // return this.getToken() === this.getValidToken();
    }
}
