import { Component, OnInit, EventEmitter } from '@angular/core';
import { ContactService } from '../share/http/contact.service';
import { ChartService } from '../share/chart/chart.service';
import { ScreenLengthService } from '../share/screen-length.service';
import { ChartlistService } from '../center/chart-list.service';
import { LineChartSetModel } from '../share/chart-set/linechart-set/linechart-set.model';



declare var $: any;
declare var echarts: any;

/**
 * This class represents the lazy loaded HomeComponent.
 */

@Component({
  selector: 'cst-sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
  providers: [ContactService,
    ChartService,
    ScreenLengthService,
    ChartlistService]
})
export class HomeComponent implements OnInit {

  linechartset: LineChartSetModel;

  constructor(
    private _http: ContactService,
    private _chart: ChartService,
    private _length: ScreenLengthService,
    private _chartlist: ChartlistService
  ) {
    this.linechartset = new LineChartSetModel();
  }

  ngOnInit(): void {

  }
}
