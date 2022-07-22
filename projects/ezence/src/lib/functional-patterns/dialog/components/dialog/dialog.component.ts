import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Input,
    ViewEncapsulation
} from '@angular/core';
import { EzDialog } from '../../models/dialog.model';

@Component({
    selector: 'ez-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class EzDialogComponent {
    @Input() data!: EzDialog;

    @HostBinding('class.ez-dialog-hidden')
    isHidden: boolean = true;

    open(): void {
        this.isHidden = false;
    }

    close(): void {
        this.isHidden = true;
    }
}
