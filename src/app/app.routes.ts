import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFountComponent } from './pages/page-not-fount/page-not-fount.component';
import { NavebarComponent } from './components/navebar/navebar.component';
import { NgModel } from '@angular/forms';
import { StaticsComponent } from './pages/statics/statics.component';
import { ChartComponent } from './components/chart/chart.component';
// export const routes: Routes = [
//     { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
//     { path: 'home', component: HomeComponent },



// ];





export const routes: Routes = [
    {
      path: 'home',
      component: HomeComponent,
      children: [
        { path: '404', component: PageNotFountComponent },
        { path: 'nav', component: PageNotFountComponent },
        { path: 'statics', component: StaticsComponent },
        { path: 'chart', component: ChartComponent },
        // { path: 'users', component: UsersComponent },
      ]
     
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
    { path: 'login', component: LoginComponent },
    { path: '**', component: PageNotFountComponent },
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
