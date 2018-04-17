import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SetComponent } from './set.component';
import { HomeNavbarModule } from '../../home-navbar/home-navbar.module';
import { LineChartSetModule } from './linechart-set/linechart-set.module';
import { BarChartSetModule } from './barchart-set/barchart-set.module';
import { PieChartSetModule } from './piechart-set/piechart-set.module';
import { GaugeChartSetModule } from './gaugechart-set/gaugechart-set.module';
import { StripchartSetModule } from './stripchart-set/stripchart-set.module';
import { MapChartSetModule } from './mapchart-set/mapchart-set.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
    imports: [CommonModule,
        RouterModule,
        HomeNavbarModule,
        LineChartSetModule,
        BarChartSetModule,
        PieChartSetModule,
        GaugeChartSetModule,
        StripchartSetModule,
        MapChartSetModule,
        NgZorroAntdModule
    ],
    declarations: [SetComponent],
    exports: [SetComponent],
})

export class SetModule {

}
