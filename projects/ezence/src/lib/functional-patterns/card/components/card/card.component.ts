import { Component, Input } from '@angular/core';
import { EzCard } from '../../models/card.model';

@Component({
    selector: 'ez-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class EzCardComponent {
    @Input() data!: EzCard;
}
