import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Input,
    OnInit,
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
export class EzDialogComponent implements OnInit {
    @Input() data!: EzDialog;

    @HostBinding('class.ez-dialog-hidden')
    isHidden: boolean = true;

    ngOnInit(): void {}

    open(): void {
        this.isHidden = false;
    }

    close(): void {
        this.isHidden = true;
    }
}
