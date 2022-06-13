import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API} from '../../constants/constants';

@Injectable({
    providedIn: 'root'
})

export class VacanciesService {

    constructor(private http: HttpClient) {
    }

    //departament
    postDepartament(body: any) {
        return this.http.post<any>(API + 'department', body);
    }

    getDepartament() {
        return this.http.get(API + 'department?page&size&sort');
    }

    deleteDepartament(id: number) {
        return this.http.delete<any>(API + 'department/' + id);
    }

    editDepartament(data: any) {
        return this.http.put<any>(API + 'department', data);
    }

    //position
    postPosition(body: any) {
        return this.http.post<any>(API + 'position', body);
    }

    getPosition() {
        return this.http.get<any>(API + 'position');
    }

    deletePosition(id: number) {
        return this.http.delete<any>(API + 'position/' + id);
    }

    editPosition(data: any) {
        return this.http.put(API + 'position', data);
    }

    postVacancy(body: any) {
        return this.http.post<any>(API + 'vacancy', body);
    }

}
