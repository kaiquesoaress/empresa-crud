import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaListComponent } from './components/empresa-list/empresa-list.component';
import { EmpresaFormComponent } from './components/empresa-form/empresa-form.component';
import { EmpresaDetailComponent } from './components/empresa-detail/empresa-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/empresas', pathMatch: 'full' },
  { path: 'empresas', component: EmpresaListComponent },
  { path: 'empresas/new', component: EmpresaFormComponent },
  { path: 'empresas/:id', component: EmpresaDetailComponent },
  { path: 'empresas/:id/edit', component: EmpresaFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
