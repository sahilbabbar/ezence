import { NgModule } from '@angular/core';
import { ButtonModule } from './functional-patterns/button/button.module';
import { FooterModule } from './functional-patterns/footer/footer.module';

const functionalPatterns = [ButtonModule, FooterModule];

@NgModule({
    declarations: [],
    imports: [functionalPatterns],
    exports: [functionalPatterns]
})
export class EzenceModule {}
