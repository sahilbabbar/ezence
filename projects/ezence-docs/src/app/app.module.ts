import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EzdHomeComponent } from './components/ezd-home/ezd-home.component';
import { HttpClientModule } from '@angular/common/http';
import { EzenceModule } from '../../../ezence/src/lib/ezence.module';
import { EzdFunctionalPatternsComponent } from './components/ezd-functional-patterns/ezd-functional-patterns.component';
import { EzdPerceptualPatternsComponent } from './components/ezd-perceptual-patterns/ezd-perceptual-patterns.component';
import { EzdNewsletterSignup } from './components/ezd-home/components/newsletter-signup/newsletter-signup.component';

@NgModule({
    declarations: [
        AppComponent,
        EzdHomeComponent,
        EzdNewsletterSignup,
        EzdFunctionalPatternsComponent,
        EzdPerceptualPatternsComponent
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, EzenceModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
