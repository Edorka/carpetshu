import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { CategoriesComponent } from './categories/categories.component';
import { CategoryEntryComponent } from './categories/entry/entry.component';

const app_routes: Routes = [
  { path: 'categories', component: CategoriesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'categories' }
]

export const app_routing = RouterModule.forRoot(app_routes);

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryEntryComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
