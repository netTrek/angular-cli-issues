import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SabanComponent } from './saban/saban.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SabanComponent],
  exports: [SabanComponent]
})
export class NetTrekModule { }
