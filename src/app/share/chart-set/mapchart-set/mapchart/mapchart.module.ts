import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapChartComponent } from './mapchart.component';
import { AngularEchartsModule } from 'angular2-echarts';

@NgModule({
    imports: [CommonModule,
        AngularEchartsModule],
    declarations: [MapChartComponent],
    exports: [MapChartComponent],
})

export class MapChartModule {


}
