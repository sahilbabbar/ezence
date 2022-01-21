import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EzNavigationComponent } from './components/navigation/navigation.component';

@NgModule({
    declarations: [EzNavigationComponent],
    imports: [CommonModule],
    exports: [EzNavigationComponent]
})
export class EzNavigationModule {}
