import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'cst-center',
    templateUrl: './center.component.html',
    styleUrls: ['./center.component.scss']
})
export class CenterComponent implements OnInit {

    constructor(public _router: Router) { }

    ngOnInit() {

    }

}
