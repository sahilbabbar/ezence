import { Component, OnInit } from '@angular/core';
import { EzNavigation } from '../../../ezence/src/lib/functional-patterns/navigation/models/navigation.model';
import { EzdHomeService } from './components/ezd-home/services/ezd-home.service';
import { EzFooterItem } from '../../../ezence/src/lib/functional-patterns/footer/models/footer-item.model';

@Component({
    selector: 'ezd-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    navData!: EzNavigation;

    footerData!: EzFooterItem[];

    constructor(private homeService: EzdHomeService) {}

    ngOnInit() {
        this.homeService.fetchHomeData().subscribe((data) => {
            this.navData = {
                brand: {
                    label: data.app.name,
                    href: '/',
                    image: 'assets/favicon.svg'
                },
                links: data.pages
            };
            this.footerData = [
                {
                    label:
                        data.app.name +
                        ' v' + // TODO: why unable to provide line break here
                        data.app.version
                },
                {
                    label: data.app.licenseInfo,
                    position: 'left',
                    css: 'margin-top-small color-var-black-1-imp' // TODO: use BEM
                },
                {
                    icon: 'twitter',
                    url: 'https://twitter.com/sahilbabbarrr',
                    position: 'right'
                },
                {
                    icon: 'github',
                    url: 'https://github.com/sahilbabbar/ezence',
                    position: 'right'
                }
            ];
        });
    }
}
