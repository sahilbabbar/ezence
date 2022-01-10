import {
    Directive,
    ElementRef,
    Input,
    OnChanges,
    Renderer2,
    SimpleChanges
} from '@angular/core';

type EZ_COLORS = 'primary-blue' | 'primary-black';

@Directive({
    selector: '[ezColor]'
})
export class ColorDirective implements OnChanges {
    @Input() ezColor: EZ_COLORS = 'primary-blue';

    constructor(private el: ElementRef, private renderer: Renderer2) {}

    // TODO: explore any other approach for applying color classes
    ngOnChanges(changes: SimpleChanges) {
        const colorValue = changes['ezColor'].currentValue;
        switch (colorValue) {
            case 'primary-blue':
                // TODO: if the color changes on-the-fly, then there can be multiple classes on one element
                this.renderer.addClass(this.el.nativeElement, 'primary-blue');
                break;
            case 'primary-black':
                this.renderer.addClass(this.el.nativeElement, 'primary-black');
                break;
        }
    }
}
