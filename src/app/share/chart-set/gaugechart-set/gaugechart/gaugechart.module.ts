import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularEchartsModule } from 'angular2-echarts';
import { GaugeChartComponent } from './gaugechart.component';

@NgModule({
    imports: [CommonModule,
        AngularEchartsModule],
    declarations: [GaugeChartComponent],
    exports: [GaugeChartComponent],
})

export class GaugeChartModule {


}
