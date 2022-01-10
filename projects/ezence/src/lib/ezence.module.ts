import { NgModule } from '@angular/core';
import { ButtonModule } from './functional-patterns/button/button.module';

const functionalPatterns = [ButtonModule];

@NgModule({
    declarations: [],
    imports: [functionalPatterns],
    exports: [functionalPatterns]
})
export class EzenceModule {}
