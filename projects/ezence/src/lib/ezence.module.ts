import { NgModule } from '@angular/core';
import { EzButtonModule } from './functional-patterns/button/button.module';
import { EzFooterModule } from './functional-patterns/footer/footer.module';
import { EzCardModule } from './functional-patterns/card/card.module';
import { EzNavigationModule } from './functional-patterns/navigation/navigation.module';
import { EzImageModule } from './perceptual-patterns/image/image.module';

const functionalPatterns = [
    EzButtonModule,
    EzFooterModule,
    EzCardModule,
    EzNavigationModule
];

const perceptualPatterns = [EzImageModule];

@NgModule({
    declarations: [],
    imports: [functionalPatterns, perceptualPatterns],
    exports: [functionalPatterns, perceptualPatterns]
})
export class EzenceModule {}
