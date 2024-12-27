import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFountComponent } from './pages/page-not-fount/page-not-fount.component';
import { NavebarComponent } from './components/navebar/navebar.component';
import { NgModel } from '@angular/forms';
import { StaticsComponent } from './pages/statics/statics.component';
import { ChartComponent } from './components/chart/chart.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { ExtractComponent } from './pages/extract/extract.component';





export const routes: Routes = [
    {
      path: 'home',
      component: HomeComponent,
      children: [
        { path: '404', component: PageNotFountComponent },
        { path: 'extract', component: ExtractComponent },
        { path: 'statics', component: StaticsComponent },
        { path: 'chart', component: ChartComponent },
        { path: 'weather', component: WeatherComponent },
        // { path: 'users', component: UsersComponent },
      ]
     
    },
    { path: '', redirectTo: '/home/weather', pathMatch: 'full' }, // Default route
    { path: '**', component: PageNotFountComponent },
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
