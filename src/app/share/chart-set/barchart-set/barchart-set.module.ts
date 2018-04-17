import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularEchartsModule } from 'angular2-echarts';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeNavbarModule } from '../../../home-navbar/home-navbar.module';
import { ColorPickerModule } from 'ngx-color-picker';
import { BarChartModule } from './barchart/barchart.module';
import { BarChartSetComponent } from './barchart-set.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
    imports: [CommonModule,
        BarChartModule,
        RouterModule,
        HomeNavbarModule,
        AngularEchartsModule,
        FormsModule,
        ColorPickerModule,
        NgZorroAntdModule
    ],
    declarations: [BarChartSetComponent],
    exports: [BarChartSetComponent],
})
export class BarChartSetModule {


}
