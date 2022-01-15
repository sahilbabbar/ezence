import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EzdHomeComponent } from './components/ezd-home/ezd-home.component';
import { EzdPatternsComponent } from './components/ezd-patterns/ezd-patterns.component';

const routes: Routes = [
    {
        path: '',
        component: EzdHomeComponent
    },
    {
        path: 'patterns',
        component: EzdPatternsComponent
    },
    {
        path: '**',
        component: EzdHomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
