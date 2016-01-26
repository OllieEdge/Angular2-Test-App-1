import {Component} from 'angular2/core';

@Component({
    selector: 'app',
    template: `

        <h3 (click)="onSelect()" [class.clicked]="showDetail === true">
            {{contact.firstName}} {{contact.lastName}}
        </h3>
        <input [(ngModel)]="contact.firstName" type="text">
        <div *ngIf="showDetail === true">
            Phone Number: {{contact.phone}}<br>
            Email: {{contact.email}}
        </div>
    `,
    styleUrls: ["../src/css/app.css"]
})
export class AppComponent {

    public contact = {firstName:'Ollie', lastName:'Edgington', phone:'07583197423', email:'ollie_edgington@hotmail.co.uk'};

    public showDetail = false;

    onSelect(){
        this.showDetail = true;
    }
}