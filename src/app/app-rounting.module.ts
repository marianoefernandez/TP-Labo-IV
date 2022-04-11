import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';

const routes: Routes =
[
  {
    path: 'login', component:LoginComponent
  },
  {
    path: 'home', component:HomeComponent
  },
  {
    path: 'quiensoy', component:QuienSoyComponent
  }
]

@NgModule
({
  imports: 
  [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRountingModule { }
