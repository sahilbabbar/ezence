import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EzdHomeComponent } from './components/ezd-home/ezd-home.component';
import { EzdFunctionalPatternsComponent } from './components/ezd-functional-patterns/ezd-functional-patterns.component';
import { EzdPerceptualPatternsComponent } from './components/ezd-perceptual-patterns/ezd-perceptual-patterns.component';

const routes: Routes = [
    {
        path: '',
        component: EzdHomeComponent
    },
    {
        path: 'functional-patterns',
        component: EzdFunctionalPatternsComponent
    },
    {
        path: 'perceptual-patterns',
        component: EzdPerceptualPatternsComponent
    },
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
