import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Input,
    ViewEncapsulation
} from '@angular/core';
import { EzNotification } from '../models/notification.model';

@Component({
    selector: 'ez-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class EzNotificationComponent {
    @HostBinding('class.ez-notification-hidden')
    isHidden: boolean = true;

    @Input() data!: EzNotification;

    private timeout = 3000;

    open(): void {
        this.isHidden = false;

        setTimeout(() => {
            this.isHidden = true;
        }, this.timeout);
    }
}
