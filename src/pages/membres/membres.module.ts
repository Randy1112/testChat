import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MembresPage } from './membres';

@NgModule({
  declarations: [
    MembresPage,
  ],
  imports: [
    IonicPageModule.forChild(MembresPage),
  ],
})
export class MembresPageModule {}
