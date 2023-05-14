import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),MatPaginatorModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
