import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
    selector: 'button[ez-button]',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EzButtonComponent {
    @HostBinding('class.ez-button') cssClass = true;

    constructor() {}
}
