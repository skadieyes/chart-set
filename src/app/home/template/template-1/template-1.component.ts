import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { TemplateChartSetModel } from '../template-chart.model';
import { EditService } from '../../../share/edit-list.service';


declare var $: any;
declare var itemid: any;
declare var echarts: any;

/**
 * This class represents the lazy loaded HomeComponent.
 */

@Component({
    selector: 'cst-template-1',
    templateUrl: 'template-1.component.html',
    styleUrls: ['template-1.component.scss']
})

export class Template1Component implements OnInit {


    homesetlist: any;

    @Input() homesetlist_edit: any;
    constructor(
        private _edit: EditService
    ) {
        this.homesetlist = [
            new TemplateChartSetModel(1, '', ''),
            new TemplateChartSetModel(2, '', ''),
            new TemplateChartSetModel(3, '', ''),
            new TemplateChartSetModel(4, '', '')
        ];
    }

    ngOnInit(): void {
        if (this._edit.flag === true) {
            this.homesetlist = this.homesetlist_edit;
        }
    }



    SaveIdEvent(item: any) {
        const index = item.itemid;
        this.homesetlist[index - 1] = item;
    }
}
