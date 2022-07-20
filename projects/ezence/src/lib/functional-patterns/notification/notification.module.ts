import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EzNotificationComponent } from './components/notification/notification.component';

@NgModule({
    declarations: [EzNotificationComponent],
    imports: [CommonModule],
    exports: [EzNotificationComponent]
})
export class EzNotificationModule {}
