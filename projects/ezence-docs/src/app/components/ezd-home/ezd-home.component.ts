import { Component, OnInit } from '@angular/core';
import { EzdHomeService } from './services/ezd-home.service';
import { EzdHomeModel } from './utilities/homeModel.utility';

@Component({
    selector: 'ezd-home',
    templateUrl: './ezd-home.component.html',
    styleUrls: ['./ezd-home.component.scss']
})
export class EzdHomeComponent implements OnInit {
    homeData!: EzdHomeModel; // TODO: now footer and home are both getting redundant data, rather it should get only specific keys

    constructor(private homeService: EzdHomeService) {}

    ngOnInit(): void {
        this.homeService.fetchHomeData().subscribe((data) => {
            this.homeData = data;
        });
    }
}
