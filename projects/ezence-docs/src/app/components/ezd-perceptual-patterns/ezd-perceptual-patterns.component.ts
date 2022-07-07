import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { EzNavigation } from '../../../../../ezence/src/lib/functional-patterns/navigation/models/navigation.model';

@Component({
    selector: 'ezd-ezd-perceptual-patterns',
    templateUrl: './ezd-perceptual-patterns.component.html',
    styleUrls: ['./ezd-perceptual-patterns.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EzdPerceptualPatternsComponent implements OnInit {
    navData!: EzNavigation;

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
    }
}
