import { Component, OnInit, EventEmitter } from '@angular/core';
declare var $: any;

@Component({
    selector: 'cst-home-navbar',
    templateUrl: 'home-navbar.component.html',
    styleUrls: ['home-navbar.component.css'],
})
export class HomeNavbarComponent implements OnInit {
    ngOnInit() {
        $('li').click(function () {
            $('#' + this.id).addClass('selected').siblings().removeClass('selected');
        });
    }

    SetStyle(id: string) {
        $(id).addClass('selected').siblings().removeClass('selected');
    }
}
