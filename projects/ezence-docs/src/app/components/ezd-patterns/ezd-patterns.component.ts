import { Component, OnInit } from '@angular/core';
import { EzCard } from '../../../../../ezence/src/lib/functional-patterns/card/models/card.model';
import { EzNavigation } from '../../../../../ezence/src/lib/functional-patterns/navigation/models/navigation.model';

@Component({
    selector: 'ezd-ezd-patterns',
    templateUrl: './ezd-patterns.component.html',
    styleUrls: ['./ezd-patterns.component.scss']
})
export class EzdPatternsComponent implements OnInit {
    navData!: EzNavigation;

    cardDemo!: EzCard;

    constructor() {}

    ngOnInit(): void {
        this.navData = {
            brand: {
                label: 'Ezence'
            },
            links: [
                {
                    label: 'Home'
                },
                {
                    label: 'Patterns'
                }
            ]
        };

        this.cardDemo = {
            heading: 'Card heading should not be more than two lines',
            body: 'This is a card body that has been put here for demo purpose.',
            tag: 'Card Tag'
        };
    }
}
