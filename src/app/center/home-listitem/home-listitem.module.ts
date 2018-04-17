import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeNavbarModule } from '../../home-navbar/home-navbar.module';
import { HomeListItemComponent } from './home-listitem.component';



@NgModule({
    imports: [CommonModule,
        HomeNavbarModule
    ],
    declarations: [HomeListItemComponent],
    exports: [HomeListItemComponent],
})

export class HomeListItemModule {

}
