import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeNavbarModule } from '../../home-navbar/home-navbar.module';
import { ChartListComponent } from './chart-list.component';
import { ChartListItemModule } from '../chart-listitem/chart-listitem.module';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [CommonModule,
        RouterModule,
        HomeNavbarModule,
        ChartListItemModule
    ],
    declarations: [ChartListComponent],
    exports: [ChartListComponent],
})

export class ChartListModule {

}
