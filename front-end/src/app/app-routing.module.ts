import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { JobsComponent } from './jobs/jobs.component';
import { DetailComponent } from './detail/detail.component';
const routes: Routes = [
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'jobs',
    component: JobsComponent,
  },
  {
    path: 'detail',
    component: DetailComponent,
  },

  { path: '', redirectTo: 'search', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
