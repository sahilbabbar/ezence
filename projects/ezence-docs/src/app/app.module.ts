import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EzdHomeComponent } from './components/ezd-home/ezd-home.component';
import { HttpClientModule } from '@angular/common/http';
import { EzenceModule } from '../../../ezence/src/lib/ezence.module';
import { EzdPatternsComponent } from './components/ezd-patterns/ezd-patterns.component';

@NgModule({
    declarations: [AppComponent, EzdHomeComponent, EzdPatternsComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, EzenceModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
