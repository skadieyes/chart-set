import { Component, OnInit, EventEmitter, Input, AfterContentInit, ViewChild } from '@angular/core';
import { TemplateChartSetModel } from '../template-chart.model';
import { EditService } from '../../../share/edit-list.service';
import { HomeConfigComponent } from '../../../share/home-config/home-config.component';



declare var $: any;
declare var itemid: any;
declare var echarts: any;

/**
 * This class represents the lazy loaded HomeComponent.
 */

@Component({
  selector: 'cst-template-2',
  templateUrl: 'template-2.component.html',
  styleUrls: ['template-2.component.scss']
})

export class Template2Component implements AfterContentInit {

  @ViewChild(HomeConfigComponent) homeconfig: HomeConfigComponent;

  homesetlist: any;

  @Input() homesetlist_edit: any;
  constructor(
    private _edit: EditService
  ) {
    this.homesetlist = [
      new TemplateChartSetModel(1, '', ''),
      new TemplateChartSetModel(2, '', ''),
      //  new TemplateChartSetModel(3, '', ''),
      //   new TemplateChartSetModel(4, '', '')
    ];
  }

  ngAfterContentInit(): void {
    if (this._edit.flag === true) {
      this.homesetlist = this.homesetlist_edit;
    }
    }



  SaveIdEvent(item: any) {
    const index = item.itemid;
    this.homesetlist[index - 1] = item;
  }
}
