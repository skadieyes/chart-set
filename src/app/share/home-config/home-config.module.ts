import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ng2-bootstrap';

import { HomeConfigComponent } from './home-config.component';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { AngularEchartsModule } from 'angular2-echarts';
import { ModalModule } from 'ng2-bootstrap/modal';
import { LineChartModule } from '../../share/chart-set/linechart-set/linechart/linechart.module';
import { BarChartModule } from '../chart-set/barchart-set/barchart/barchart.module';
import { PieChartModule } from '../chart-set/piechart-set/piechart/piechart.module';
import { GaugeChartModule } from '../chart-set/gaugechart-set/gaugechart/gaugechart.module';
import { StripchartModule } from '../chart-set/stripchart-set/stripchart/stripchart.module';
import { MapChartModule } from '../chart-set/mapchart-set/mapchart/mapchart.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
    imports: [CommonModule,
              ModalModule,
              TabsModule,
              AngularEchartsModule,
              LineChartModule,
              BarChartModule,
              PieChartModule,
              GaugeChartModule,
              StripchartModule,
              FormsModule,
              MapChartModule,
              ModalModule.forRoot(),
              BsDropdownModule.forRoot(),
              NgZorroAntdModule
              ],
    declarations: [HomeConfigComponent],
    exports: [HomeConfigComponent],
})
export class HomeConfigModule {

}
