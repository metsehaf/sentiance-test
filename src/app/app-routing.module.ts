import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserDataComponent} from './user-data/user-data.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'user-data',
    component: UserDataComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {

  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
