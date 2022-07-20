import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EzDialogComponent } from './components/dialog/dialog.component';
import { EzButtonModule } from '../button/button.module';

@NgModule({
    declarations: [EzDialogComponent],
    imports: [CommonModule, EzButtonModule],
    exports: [EzDialogComponent]
})
export class EzDialogModule {}
