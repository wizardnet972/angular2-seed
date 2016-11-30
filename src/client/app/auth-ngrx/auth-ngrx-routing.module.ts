import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthNgrxComponent } from './auth-ngrx.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'ngrx', component: AuthNgrxComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
