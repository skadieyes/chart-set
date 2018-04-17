import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeNavbarComponent } from './home-navbar.component';

@NgModule({
    imports: [CommonModule,
        RouterModule],
    declarations: [HomeNavbarComponent],
    exports: [HomeNavbarComponent]
})
export class HomeNavbarModule {

}
