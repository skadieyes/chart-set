import { Component, OnInit, EventEmitter, Input, Output, ViewChild } from '@angular/core';


import { HomeSetModel } from './home-set.model';
import { ChartlistService } from '../../center/chart-list.service';
import { EditService } from '../../share/edit-list.service';

import { Template1Component } from '../template/template-1/template-1.component';
import { Template2Component } from '../template/template-2/template-2.component';
import { HomeNavbarComponent } from '../../home-navbar/home-navbar.component';
import { Router } from '@angular/router';

declare var $: any;
declare var echarts: any;

/**
 * This class represents the lazy loaded HomeComponent.
 */

@Component({
    selector: 'cst-home-set',
    templateUrl: 'home-set.component.html',
    styleUrls: ['home-set.component.scss'],
    providers: [ChartlistService]
})
export class HomeSetComponent implements OnInit {

    menu_template_name: any;
    title: any;
    homeset: any;
    flag: any;
    edit_data: any;
    chart_arr: any;
    template_name: any;
    charts_set: any;
    menu_items = [
        {
            'id': 'menu_template1',
            'label': '大屏模版',
            'class': 'li_active'
        },
        {
            'id': 'menu_template2',
            'label': '滚屏模版'
        },
        {
            'id': 'menu_template3',
            'label': '自自定义模版'
        }];

    @ViewChild(Template1Component) menu_template1: Template1Component;
    @ViewChild(Template2Component) menu_template2: Template2Component;
    @ViewChild(HomeNavbarComponent) homenavbar: HomeNavbarComponent;
    constructor(
        private _chartlist: ChartlistService,
        private _edit: EditService,
        public _router: Router
    ) {
        this.menu_template_name = 'menu_template1';
        this.homeset = new HomeSetModel('', '', '');
        this.flag = this._edit.flag;
        this.edit_data = this._edit.edit_data;
    }

    ngOnInit(): void {
       // this.homenavbar.SetStyle('#homelist');
        $('.first').addClass('li_active');

        const flag = this._edit.flag;
        if (flag === true) {
            const type = this._edit.edit_data.template_name;
            this.menu_template_name = type;
            const id = '#' + this.menu_template_name;
            $(id).addClass('li_active');
        } else if (flag === false) {
            $('.first').addClass('li_active');
        };
        $('li').click(function () {
            if (flag === false) {
                $(this).addClass('li_active')
                    .siblings().removeClass('li_active');
            }
        });

        $(function () { $('#collapseOne').collapse('show'); });
        $('#collapseOne').on('show.bs.collapse', function () {
            $('.coll-panel-one').addClass('panel-cst');
        });
        $('#collapseOne').on('hide.bs.collapse', function () {
            $('.coll-panel-one').removeClass('panel-cst');
        });

        $(function () { $('#collapseTwo').collapse('show'); });
        $('#collapseTwo').on('show.bs.collapse', function () {
            $('.coll-panel-two').addClass('panel-cst');
        });
        $('#collapseTwo').on('hide.bs.collapse', function () {
            $('.coll-panel-two').removeClass('panel-cst');
        });
        if (this.flag === true) {
            this.homeset = this.edit_data;
            this.title = this.homeset.page_title;
            this.chart_arr = this.homeset.chart_arr;
            this.template_name = this.homeset.template_name;
            this.Template_change(this.template_name);

        }
    }

    Template_change(name: any) {
        const id = '#' + name;
        $(id).addClass('li_active');
    }

    itemClick(item: any) {
        if (item.id) {
            this.template_name = item.id;
        }
    }

    Save() {

        const template = this.menu_template_name;
        switch (template) {
            case 'menu_template1':
                this.charts_set = this.menu_template1.homesetlist;
                break;
            case 'menu_template2':
                this.charts_set = this.menu_template2.homesetlist;
                break;
        }
        const homelist = new HomeSetModel(this.title, this.charts_set, this.menu_template_name);

        if (this.flag === false) {
            this._chartlist.Add_homelistitem(homelist);
        } else if (this.flag === true) {
            this.homeset.chart_arr = this.chart_arr;
            this._chartlist.Update_homelistitem(this.homeset);
        }
        this._router.navigate(['/center/homelist']);

    }
}
