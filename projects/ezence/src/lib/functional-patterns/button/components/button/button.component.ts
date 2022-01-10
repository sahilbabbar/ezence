import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    OnInit
} from '@angular/core';

@Component({
    selector: 'button[ez-button]',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {
    @HostBinding('class.ez-button') cssClass = true;

    constructor() {}

    ngOnInit() {}
}
