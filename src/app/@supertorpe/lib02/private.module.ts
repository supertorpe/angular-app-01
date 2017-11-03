import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrivateComponent } from './private.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: PrivateComponent },
    ])
  ],
  declarations: [PrivateComponent],
  exports: [PrivateComponent]
})
export class PrivateModule { }
