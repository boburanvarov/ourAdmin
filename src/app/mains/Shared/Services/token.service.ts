import { Injectable } from '@angular/core';
import {Utils} from '../Utilts/Utils';

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    constructor() { }

    getToken(){
        const token = Utils.getToSessionStorage('login')
        return !token ? null : token.access_token;
    }


}
