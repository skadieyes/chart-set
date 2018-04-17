import { Injectable } from '@angular/core';

declare var $: any;

@Injectable()
export class ScreenLengthService {

    height() {
        const height1 = $(window).height();
        if (height1 < 700) {
            return 700;
        }else {
            return height1;
        }
    };
    width() {
        const width1 = $(window).width();
        if (width1 < 1200) {
            return 1200;
        }else {
            return width1;
        }
    };

}
