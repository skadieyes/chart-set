import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { AngularEchartsModule } from 'angular2-echarts';
import { ModalModule } from 'ng2-bootstrap/modal';
import { HomeNavbarModule } from '../home-navbar/home-navbar.module';
import { LineChartModule } from '../share/chart-set/linechart-set/linechart/linechart.module';
import { HomeConfigModule } from '../share/home-config/home-config.module';
import { HomeSetModule } from './home-set/home-set.module';
import { HomeViewModule } from './home-view/home-view.module';

@NgModule({
    imports: [CommonModule,
              ModalModule,
              TabsModule,
              AngularEchartsModule,
              HomeNavbarModule,
              LineChartModule,
              HomeConfigModule,
              HomeSetModule,
              HomeViewModule
              ],
    declarations: [HomeComponent],
    exports: [HomeComponent],
})
export class HomeModule {

}
