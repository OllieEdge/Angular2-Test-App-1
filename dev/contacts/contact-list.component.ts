import {Component} from 'angular2/core';
import {ContactComponent} from "./contact.component";

@Component({
    selector: 'contact-list',
    template: `
    <ul>
        <li *ngFor="#contact of contacts"
            (click)="onSelect(contact)"
            [class.clicked]="selectedContact === contact">
        {{contact.firstName}} {{contact.lastName}}
        </li>
    </ul>
    <contact [contact]="selectedContact"></contact>
    `,
    directives:[ContactComponent],
    styleUrls: ["../src/css/app.css"]
})
export class ContactListComponent {
    public contacts = [{firstName:'Ollie', lastName:'Edgington', phone:'07583197423', email:'ollie_edgington@hotmail.co.uk'},
        {firstName:'Becca', lastName:'Edgington', phone:'07583197424', email:'becca_edgington@hotmail.co.uk'},
        {firstName:'Kate', lastName:'Edgington', phone:'07583197425', email:'kate_edgington@hotmail.co.uk'},
        {firstName:'Steve', lastName:'Edgington', phone:'07583197426', email:'steve_edgington@hotmail.co.uk'}];

    public selectedContact = {};

    onSelect(contact){
        this.selectedContact = contact;
    }
}