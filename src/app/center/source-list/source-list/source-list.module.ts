import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeNavbarModule } from '../../../home-navbar/home-navbar.module';
import { SourceListComponent } from './source-list.component';
import { RouterModule } from '@angular/router';
import { SourceListItemModule } from '../source-listitem/source-listitem.module';
import { ModalModule } from 'ng2-bootstrap/modal';
import { SourceSetModule } from '../source-set/source-set.module';

@NgModule({
    imports: [CommonModule,
        RouterModule,
        HomeNavbarModule,
        SourceListItemModule,
        ModalModule.forRoot(),
        SourceSetModule
    ],
    declarations: [SourceListComponent],
    exports: [SourceListComponent],
})

export class SourceListModule {

}
