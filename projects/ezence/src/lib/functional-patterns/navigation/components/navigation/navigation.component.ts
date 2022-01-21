import { Component, Input, OnInit } from '@angular/core';
import { EzNavigation } from '../../models/navigation.model';

@Component({
    selector: 'ez-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class EzNavigationComponent implements OnInit {
    @Input() data!: EzNavigation;

    constructor() {}

    ngOnInit(): void {}
}
