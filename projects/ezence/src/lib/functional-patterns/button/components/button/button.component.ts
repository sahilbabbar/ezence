import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    ViewEncapsulation
} from '@angular/core';

@Component({
    // <-- Shouldn't this be a directive?
    selector: 'button[ez-button]', // eslint-disable-line
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class EzButtonComponent {
    @HostBinding('class.ez-button') cssClass = true;

    constructor() {}
}
