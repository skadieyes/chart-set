import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeNavbarModule } from '../../home-navbar/home-navbar.module';
import { HomeListComponent } from './home-list.component';
import { RouterModule } from '@angular/router';
import { HomeListItemModule } from '../home-listitem/home-listitem.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';


@NgModule({
    imports: [CommonModule,
        RouterModule,
        HomeNavbarModule,
        HomeListItemModule,
        NgZorroAntdModule
    ],
    declarations: [HomeListComponent],
    exports: [HomeListComponent],
})

export class HomeListModule {

}
