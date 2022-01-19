import { NgModule } from '@angular/core';
import { ButtonModule } from './functional-patterns/button/button.module';
import { FooterModule } from './functional-patterns/footer/footer.module';
import { EzCardModule } from './functional-patterns/card/card.module';
import { NavigationModule } from './functional-patterns/navigation/navigation.module';

const functionalPatterns = [
    ButtonModule,
    FooterModule,
    EzCardModule,
    NavigationModule
];

@NgModule({
    declarations: [],
    imports: [functionalPatterns],
    exports: [functionalPatterns]
})
export class EzenceModule {}
