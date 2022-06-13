import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API} from '../../constants/constants';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient,
    ) {
    }

    login(body: any) {
        return this.http.post<any>(API + 'auth/login', body);
    }
}


