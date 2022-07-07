import { Component, OnInit } from '@angular/core';
import { EzCard } from '../../../../../ezence/src/lib/functional-patterns/card/models/card.model';
import { EzNavigation } from '../../../../../ezence/src/lib/functional-patterns/navigation/models/navigation.model';

@Component({
    selector: 'ezd-ezd-patterns',
    templateUrl: './ezd-functional-patterns.component.html',
    styleUrls: ['./ezd-functional-patterns.component.scss']
})
export class EzdFunctionalPatternsComponent implements OnInit {
    navData!: EzNavigation;

    navDataDemo!: EzNavigation;

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
                    label: 'Functional Patterns',
                    href: 'functional-patterns'
                },
                {
                    label: 'Perceptual Patterns',
                    href: 'perceptual-patterns'
                }
            ]
        };

        this.navDataDemo = {
            brand: {
                label: 'Brand'
            },
            links: [
                {
                    label: 'Link 1'
                },
                {
                    label: 'Link 2'
                },
                {
                    label: 'Link 3'
                },
                {
                    label: 'Link 4'
                },
                {
                    label: 'Link 5'
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
