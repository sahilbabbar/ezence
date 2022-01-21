import { NgModule } from '@angular/core';
import { EzButtonModule } from './functional-patterns/button/button.module';
import { EzFooterModule } from './functional-patterns/footer/footer.module';
import { EzCardModule } from './functional-patterns/card/card.module';
import { EzNavigationModule } from './functional-patterns/navigation/navigation.module';

const functionalPatterns = [
    EzButtonModule,
    EzFooterModule,
    EzCardModule,
    EzNavigationModule
];

@NgModule({
    declarations: [],
    imports: [functionalPatterns],
    exports: [functionalPatterns]
})
export class EzenceModule {}
