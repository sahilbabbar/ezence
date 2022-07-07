import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EzNavigationComponent } from './components/navigation/navigation.component';
import { EzButtonModule } from '../button/button.module';

@NgModule({
    declarations: [EzNavigationComponent],
    imports: [CommonModule, EzButtonModule],
    exports: [EzNavigationComponent]
})
export class EzNavigationModule {}
