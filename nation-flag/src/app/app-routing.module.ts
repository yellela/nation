import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlagComponent } from './flag/flag.component';
const routes: Routes = [
  { path: 'flag', component: FlagComponent },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
