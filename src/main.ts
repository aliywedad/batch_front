import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes, RouterOutlet } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HomeComponent } from './app/pages/home/home.component';
import { PageNotFountComponent } from './app/pages/page-not-fount/page-not-fount.component';
import { NavebarComponent } from './app/components/navebar/navebar.component';
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));






