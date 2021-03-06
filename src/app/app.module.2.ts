// #docplaster
// #docregion
// #docregion hero-import
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ClearanceListComponent }   from './clearance-list/clearance-list.component';
import { ItemListComponent }     from './item-list/item-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ItemListComponent,
    ClearanceListComponent,
    PageNotFoundComponent
  ],
  bootstrap: [ AppComponent ]
})
// #enddocregion hero-import
export class AppModule { }
// #enddocregion
