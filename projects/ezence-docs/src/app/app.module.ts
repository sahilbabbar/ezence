import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EzdHomeComponent } from './components/ezd-home/ezd-home.component';
import { EzdFooterComponent } from './components/ezd-home/components/ezd-footer/ezd-footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [AppComponent, EzdHomeComponent, EzdFooterComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
