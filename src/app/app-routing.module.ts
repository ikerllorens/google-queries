import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchHomeComponent} from './search-home/search-home.component';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full'},
  { path: 'search', component: SearchHomeComponent }
];


@NgModule({
  imports: [
 RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

