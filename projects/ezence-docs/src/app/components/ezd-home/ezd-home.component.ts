import { Component, OnInit } from '@angular/core';
import { EzdHomeService } from './services/ezd-home.service';
import { EzdHomeModel } from './utilities/homeModel.utility';
import { EzFooterItem } from '../../../../../ezence/src/lib/functional-patterns/footer/models/footer-item.model';
import { EzNavigation } from '../../../../../ezence/src/lib/functional-patterns/navigation/models/navigation.model';

@Component({
    selector: 'ezd-home',
    templateUrl: './ezd-home.component.html',
    styleUrls: ['./ezd-home.component.scss']
})
export class EzdHomeComponent implements OnInit {
    homeData!: EzdHomeModel; // TODO: now footer and home are both getting redundant data, rather it should get only specific keys

    navbarData!: EzNavigation;

    footerData!: EzFooterItem[];

    constructor(private homeService: EzdHomeService) {}

    ngOnInit(): void {
        this.homeService.fetchHomeData().subscribe((data) => {
            this.homeData = data;
            console.log(this.homeData);
            this.navbarData = {
                brand: {
                    label: data.app.name,
                    href: ''
                },
                links: data.pages
            };
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
                    css: '', // TODO: use BEM
                    position: 'right'
                },
                {
                    label: 'GitHub',
                    url: 'https://github.com/sahilbabbar/ezence',
                    css: '',
                    position: 'right'
                }
            ];
        });
    }
}
