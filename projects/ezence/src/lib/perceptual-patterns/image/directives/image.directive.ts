import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[ezImg]'
})
export class EzImageDirective {
    @HostBinding('class.ez-image')
    cssClass = true;
}
