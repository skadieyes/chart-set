import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { ScreenLengthService } from '../screen-length.service';
import { EditService } from '../edit-list.service';
import { HomeNavbarComponent } from '../../home-navbar/home-navbar.component';

declare var $: any;
@Component({
    selector: 'cst-set',
    templateUrl: './set.component.html',
    styleUrls: ['./set.component.scss'],
    providers: [ScreenLengthService]
})


export class SetComponent implements OnInit {

    chevron_flag: any;
    typemenuclass: any;
    chartmenuclass: any;
    SmallNavShow: any;
    BigNavShow: any;
    height = this._ScrenntLength.height();
    flag: any;
    menu_chart_name = 'menu_line_chart';

    menu_items = [
        {
            'id': 'menu_line_chart',
            'icon': 'fa-line-chart',
            'label': '折线图',
            'class': 'ant-menu-item-selected'
        },
        {
            'id': 'menu_gauge_chart',
            'icon': 'fa-dashboard',
            'label': '仪表图'
        },
        {
            'id': 'menu_pie_chart',
            'icon': 'fa-pie-chart',
            'label': '饼图'
        },
        {
            'id': 'menu_bar_chart',
            'icon': 'fa-bar-chart-o',
            'label': '柱状图'
        },
        {
            'id': 'menu_strip_chart',
            'icon': 'fa-sliders',
            'label': '条形图'
        }, {
            'id': 'menu_map_chart',
            'icon': 'fa-map-marker',
            'label': '地图'
        }
    ];
    @ViewChild(HomeNavbarComponent) homenavbar: HomeNavbarComponent;

    constructor(
        private _ScrenntLength: ScreenLengthService,
        private _edit: EditService
    ) {
        this.chevron_flag = true;

        this.typemenuclass = 'type_menu';

        this.chartmenuclass = 'chart_menu';

        this.SmallNavShow = false;

        this.BigNavShow = true;
    }

    ngOnInit(): void {
        $('.set_body').css('height', this.height - 64);
        // this.homenavbar.SetStyle('#chartlist');
        const flag = this._edit.flag;
        if (flag === true) {
            const type = this._edit.edit_data.Series_Type;
            if (type === 'bar') {
                if (this._edit.edit_data.Xaxis_Type === 'value') {
                    this.menu_chart_name = 'menu_' + 'strip' + '_chart';
                    return;
                }
            }

            this.menu_chart_name = 'menu_' + type + '_chart';
            const id = '#' + this.menu_chart_name;
            $(id).addClass('li_active ant-menu-item-selected');
        } else if (flag === false) {
            $('.first').addClass('ant-menu-item-selected');
        };

        $('li').click(() => {
            if (flag === false) {
                $(event.target).addClass('li_active').siblings().removeClass('li_active');
                this.menu_chart_name = $('.li_active').attr('id');
                console.log(this.menu_chart_name);
            }

        });

    }
    itemClick(item: any) {
        if (item.id) {
            this.menu_chart_name = item.id;
        }
    }
    chevronChange() {
        if (this.chevron_flag === true) {
            this.chevron_flag = false;

            this.typemenuclass = 'type_menu_small';

            this.chartmenuclass = 'chart_menu_big';

            this.SmallNavShow = true;

            this.BigNavShow = false;

        } else if (this.chevron_flag === false) {
            this.chevron_flag = true;

            this.typemenuclass = 'type_menu';

            this.chartmenuclass = 'chart_menu';

            this.SmallNavShow = false;

            this.BigNavShow = true;
        }

    }

}
