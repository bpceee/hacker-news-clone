import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StoryListComponent } from './story-list/story-list.component';
import { AppRoutingModule } from './app-routing.module';
import { StoryListItemComponent } from './story-list-item/story-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    StoryListComponent,
    StoryListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
