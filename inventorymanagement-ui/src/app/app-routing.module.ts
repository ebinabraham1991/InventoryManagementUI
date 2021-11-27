import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BillingsectionComponent} from './billingsection/billingsection.component';
const routes: Routes = [

{
  path: '',
  component: HomeComponent
},
{
  path: 'billingsection',
  component: BillingsectionComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
