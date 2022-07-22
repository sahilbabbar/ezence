import { NgModule } from '@angular/core';
import { EzButtonModule } from './functional-patterns/button/button.module';
import { EzFooterModule } from './functional-patterns/footer/footer.module';
import { EzCardModule } from './functional-patterns/card/card.module';
import { EzNavigationModule } from './functional-patterns/navigation/navigation.module';
import { EzDialogModule } from './functional-patterns/dialog/dialog.module';
import { EzNotificationModule } from './functional-patterns/notification/notification.module';

const functionalPatterns = [
    EzButtonModule,
    EzFooterModule,
    EzCardModule,
    EzDialogModule,
    EzNavigationModule,
    EzNotificationModule
];

@NgModule({
    declarations: [],
    imports: [functionalPatterns],
    exports: [functionalPatterns]
})
export class EzenceModule {}
