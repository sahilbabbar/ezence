import { Component, OnInit } from '@angular/core';
import { EzdHomeService } from './services/ezd-home.service';
import { EzdHomeModel } from './utilities/homeModel.utility';
import { EzFooterItem } from '../../../../../ezence/src/lib/functional-patterns/footer/models/footer-item.model';

@Component({
    selector: 'ezd-home',
    templateUrl: './ezd-home.component.html',
    styleUrls: ['./ezd-home.component.scss']
})
export class EzdHomeComponent implements OnInit {
    homeData!: EzdHomeModel; // TODO: now footer and home are both getting redundant data, rather it should get only specific keys

    footerData!: EzFooterItem[];

    constructor(private homeService: EzdHomeService) {}

    ngOnInit(): void {
        this.homeService.fetchHomeData().subscribe((data) => {
            this.homeData = data;
            this.footerData = [
                {
                    label:
                        this.homeData.app.name +
                        ' v' + // TODO: why unable to provide line break here
                        this.homeData.app.version
                },
                {
                    label: 'Twitter',
                    url: 'https://twitter.com/sahilbabbarrr',
                    css: 'text-transform-upper', // TODO: use BEM
                    position: 'right'
                },
                {
                    label: 'Github',
                    url: 'https://github.com/sahilbabbar/ezence',
                    css: 'text-transform-upper',
                    position: 'right'
                }
            ];
        });
    }
}
