import { Component, OnInit } from '@angular/core';
import { EzdHomeService } from '../../services/ezd-home.service';
import { EzdHomeModel } from '../../utilities/homeModel.utility';

@Component({
    selector: 'ezd-ezd-footer',
    templateUrl: './ezd-footer.component.html',
    styleUrls: ['./ezd-footer.component.scss']
})
export class EzdFooterComponent implements OnInit {
    footerData!: EzdHomeModel;

    constructor(private homeService: EzdHomeService) {}

    ngOnInit(): void {
        this.homeService.fetchHomeData().subscribe((data) => {
            console.log(data);
            this.footerData = data;
        });
    }
}
