import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    ViewChild
} from '@angular/core';
import { EzNavigation } from '../../models/navigation.model';

@Component({
    selector: 'ez-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class EzNavigationComponent implements AfterViewInit {
    // TODO: Rename to NavBarComponent

    @Input() data!: EzNavigation; // TODO: data remains undefined when template loads

    @ViewChild('navLinks') navLinks!: ElementRef;

    linksWidth!: number;

    responsive = false;

    showLinksMenu = false;

    constructor() {
        window.addEventListener('resize', (e) => {
            this.onViewportResize();
        });
    }

    ngAfterViewInit() {
        this.linksWidth =
            this.navLinks.nativeElement.getBoundingClientRect().width;
        this.onViewportResize();
    }

    /**
     * Show/Hide navbar links in case combined width of links
     * is greater than navbar container's width.
     */
    onViewportResize() {
        const navLinksParentWidth =
            this.navLinks.nativeElement.parentElement.getBoundingClientRect()
                .width;
        const buffer = 200;

        /*
            TODO: Can we encapsulate this in a util function and
             use in other components like footer.
        */
        if (this.linksWidth + buffer >= navLinksParentWidth) {
            this.navLinks.nativeElement.style.display = 'none';
            this.responsive = true;
        } else if (
            this.responsive &&
            this.linksWidth + buffer < navLinksParentWidth
        ) {
            this.navLinks.nativeElement.style.display = 'inherit';
            this.responsive = false;
        }
    }

    toggleLinksMenu() {
        this.showLinksMenu = !this.showLinksMenu;
    }
}
