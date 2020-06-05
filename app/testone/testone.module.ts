import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestonePageRoutingModule } from './testone-routing.module';

import { TestonePage } from './testone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestonePageRoutingModule
  ],
  declarations: [TestonePage]
})
export class TestonePageModule {}
