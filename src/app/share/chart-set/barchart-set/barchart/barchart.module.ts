import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarChartComponent } from './barchart.component';
import { AngularEchartsModule } from 'angular2-echarts';

@NgModule({
    imports: [CommonModule,
        AngularEchartsModule],
    declarations: [BarChartComponent],
    exports: [BarChartComponent],
})

export class BarChartModule {

}
