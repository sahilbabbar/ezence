import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EzCardComponent } from './components/card/card.component';

@NgModule({
    declarations: [EzCardComponent],
    imports: [CommonModule],
    exports: [EzCardComponent]
})
export class EzCardModule {}
