import { Component, ViewEncapsulation } from '@angular/core';
import { EditService } from './share/edit-list.service';

declare var $: any;
@Component({
  selector: 'cst-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [EditService]
})


export class AppComponent {

}
