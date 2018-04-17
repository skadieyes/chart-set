import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeNavbarModule } from '../../../home-navbar/home-navbar.module';
import { SourceListItemComponent } from './source-listitem.component';



@NgModule({
    imports: [CommonModule,
        HomeNavbarModule
    ],
    declarations: [SourceListItemComponent],
    exports: [SourceListItemComponent],
})

export class SourceListItemModule {

}
