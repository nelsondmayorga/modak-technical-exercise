import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtworkDetailContainerComponent } from './containers/artwork-detail-container/artwork-detail-container.component';

const routes: Routes = [{ path: ':id', component: ArtworkDetailContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtworkDetailRoutingModule {}
