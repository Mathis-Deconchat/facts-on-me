import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactComponent } from './fact/fact.component'
import { FactAdderComponent } from './fact-adder/fact-adder.component'
import { FactAllComponent } from './fact-all/fact-all.component'

const routes: Routes = [
  { path: '', redirectTo: '/random', pathMatch: 'full' },
  { path: 'add', component: FactAdderComponent },
  { path: 'random', component: FactComponent },
  { path: 'all', component: FactAllComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
