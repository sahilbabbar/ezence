import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EzButtonComponent } from './components/button/button.component';

@NgModule({
    declarations: [EzButtonComponent],
    imports: [CommonModule],
    exports: [EzButtonComponent]
})
export class EzButtonModule {}
