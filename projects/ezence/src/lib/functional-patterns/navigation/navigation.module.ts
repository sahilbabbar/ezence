import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EzNavigationComponent } from './components/navigation/navigation.component';
import { EzButtonModule } from '../button/button.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [EzNavigationComponent],
    imports: [CommonModule, EzButtonModule, RouterModule],
    exports: [EzNavigationComponent]
})
export class EzNavigationModule {}
