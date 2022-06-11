import {AppComponent} from '../../app.component';
import {Component, OnInit} from '@angular/core';
import {DataService} from '../Shared/Services/data.service';

@Component({
    selector: "app-menu",
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

    userInfo : any;
    model: any[];
    constructor(public app: AppComponent, private data: DataService) { }

    ngOnInit() {

        this.userInfo = this.data.getUserRole();
        this.model = [
            {
                label: "Entered список",
                icon: "pi pi-fw pi-id-card",
                routerLink: ["/"],
            },
            {
                label: "Юридик",
                icon: "pi pi-fw pi-home",
                items: [
                    {
                        label: "Новый",
                        icon: "pi pi-fw pi-file-o",
                        routerLink: ["accountCard"],
                    },
                    {
                        label: "Список операция",
                        icon: "pi pi-fw pi-id-card",
                        routerLink: ["list"],
                    },

                ],
            },
            ]

    }
}
