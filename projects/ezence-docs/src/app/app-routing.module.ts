import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EzdHomeComponent } from './components/ezd-home/ezd-home.component';

const routes: Routes = [
    {
        path: '',
        component: EzdHomeComponent,
    },
    {
        path: '**',
        component: EzdHomeComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
