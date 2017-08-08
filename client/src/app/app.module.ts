import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocalStorageModule } from 'angular-2-local-storage';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { CategoriesService } from './categories/categories.service';
import { FlexLayoutModule } from "@angular/flex-layout";
import { CategoriesComponent } from './categories/categories.component';
import { CategoryEntryComponent } from './categories/entry/entry.component';
import { CompetitorsComponent } from './categories/competitors/competitors.component';
import { PerformanceComponent } from './categories/competitors/performance/performance.component';
import { PerformancesComponent } from './categories/performances/performances.component';

const app_routes: Routes = [
  { path: 'categories',
    component: CategoriesComponent},
  { path: 'categories/:position/competitors',
    component: CompetitorsComponent},
  { path: 'categories/:position/competitors/:competitorId/performance',
    component: PerformanceComponent},
  { path: 'categories/:position/performances',
    component: PerformancesComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'categories' }
]

export const app_routing = RouterModule.forRoot(app_routes);

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryEntryComponent,
    CompetitorsComponent,
    PerformanceComponent,
    PerformancesComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    LocalStorageModule.withConfig({
            prefix: 'carpetsh-app',
            storageType: 'localStorage'
        }),
    HttpModule,
    app_routing
  ],
  providers: [CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
