import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EzImageDirective } from './directives/image.directive';

@NgModule({
    declarations: [EzImageDirective],
    imports: [CommonModule],
    exports: [EzImageDirective]
})
export class EzImageModule {}
