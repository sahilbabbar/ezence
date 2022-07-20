import { Component, Input } from '@angular/core';
import { EzFooterItem } from '../../models/footer-item.model';
import { EzFooterContainer } from '../../models/footer-container.model';

@Component({
    selector: 'ez-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class EzFooterComponent {
    @Input() data!: EzFooterItem[];

    @Input() leftColumn!: EzFooterContainer;

    constructor() {}
}
