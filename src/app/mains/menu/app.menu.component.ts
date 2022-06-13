import {AppComponent} from '../../app.component';
import {Component, OnInit} from '@angular/core';
import {TokenService} from '../Shared/Services/token.service';

@Component({
    selector: 'app-menu',
    // templateUrl: './app.menu.component.html',
    template: `
        <ul class="layout-menu">
            <li
                app-menuitem
                *ngFor="let item of model; let i = index"
                [item]="item"
                [index]="i"
                [root]="true"
            ></li>
        </ul>
    `,
    styleUrls: ['./app.menu.component.scss']
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public app: AppComponent, private data: TokenService) {
    }

    ngOnInit() {

        this.model = [
            {
                label: 'Отдел',
                icon: 'pi pi-fw pi-id-card',
                routerLink: ['/'],
            },
            {
                label: 'Должность',
                icon: 'pi pi-fw pi-home',
                routerLink: ['position'],

            },
            {
                label: 'Вакансия',
                icon: 'pi pi-fw pi-home',
                routerLink: ['vacancy'],
            },
            {
                label: 'Резюме',
                icon: 'pi pi-fw pi-home',
                routerLink: ['resume'],
            },
        ];

    }
}
