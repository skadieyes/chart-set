import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeSetComponent } from './home-set.component';

import { HomeNavbarModule } from '../../home-navbar/home-navbar.module';

import { HomeConfigModule } from '../../share/home-config/home-config.module';

import { Template1Module } from '../template/template-1/template-1.module';
import { Template2Module } from '../template/template-2/template-2.module';
import { Template3Module } from '../template/template-3/template-3.module';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
    imports: [CommonModule,
              HomeNavbarModule,
              HomeConfigModule,
              FormsModule,
              RouterModule,
              Template1Module,
              Template2Module,
              Template3Module,
              NgZorroAntdModule
              ],
    declarations: [HomeSetComponent],
    exports: [HomeSetComponent],
})
export class HomeSetModule {

}
