import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularEchartsModule } from 'angular2-echarts';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeNavbarModule } from '../../../home-navbar/home-navbar.module';
import { ColorPickerModule } from 'ngx-color-picker';
import { PieChartModule } from './piechart/piechart.module';
import { PieChartSetComponent } from './piechart-set.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
    imports: [CommonModule,
        PieChartModule,
        RouterModule,
        HomeNavbarModule,
        AngularEchartsModule,
        FormsModule,
        ColorPickerModule,
        NgZorroAntdModule
    ],
    declarations: [PieChartSetComponent],
    exports: [PieChartSetComponent],
})

export class PieChartSetModule {

}
