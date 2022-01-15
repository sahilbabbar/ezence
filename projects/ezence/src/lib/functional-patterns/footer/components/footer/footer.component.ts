import { Component, Input, OnInit } from '@angular/core';
import { EzFooterItem } from '../../utilities/footer-item.utility';

export type footerData = [EzFooterItem[], EzFooterItem[]];

@Component({
    selector: 'ez-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    @Input() data!: footerData;

    constructor() {}

    ngOnInit(): void {}
}
