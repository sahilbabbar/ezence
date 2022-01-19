import { Component, Input, OnInit } from '@angular/core';
import { EzCard } from '../../models/card.model';

@Component({
    selector: 'ez-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class EzCardComponent implements OnInit {
    @Input() data!: EzCard;

    constructor() {}

    ngOnInit(): void {}
}
