import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    myVar = '';
    myInc = 0;
    hideMe: boolean;
    buttonLabel: string;
    butShowMe = 'Show Me';
    butHideMe = 'Hide Me';
    birthday = new Date(1988, 3, 15)

    constructor(private http: HttpClient) {
        this.hideMe = false;
        this.buttonLabel = this.butHideMe;
    }

    ngOnInit() {
    }

    clickMe() {
        switch (this.hideMe) {
            case true:
                this.buttonLabel = this.butShowMe;
                break;

            default:
                this.buttonLabel = this.butHideMe;
                break;
        }

        this.hideMe = !this.hideMe;

        return;
    }

}
