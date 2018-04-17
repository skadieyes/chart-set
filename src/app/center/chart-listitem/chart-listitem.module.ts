import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeNavbarModule } from '../../home-navbar/home-navbar.module';
import { ChartListItemComponent } from './chart-listitem.component';



@NgModule({
    imports: [CommonModule,
        HomeNavbarModule
    ],
    declarations: [ChartListItemComponent],
    exports: [ChartListItemComponent],
})

export class ChartListItemModule {

}
