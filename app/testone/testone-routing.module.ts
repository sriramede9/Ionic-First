import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestonePage } from './testone.page';

const routes: Routes = [
  {
    path: '',
    component: TestonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestonePageRoutingModule {}
