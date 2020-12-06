import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StoryListComponent } from './story-list/story-list.component';
import { AppRoutingModule } from './app-routing.module';
import { StoryListItemComponent } from './story-list-item/story-list-item.component';
import { StoryItemComponent } from './story-item/story-item.component';
import { CommentComponent } from './comment/comment.component';
import { HeaderComponent } from './header/header.component';
import { StoryInfoComponent } from './story-info/story-info.component';

@NgModule({
  declarations: [
    AppComponent,
    StoryInfoComponent,
    StoryListComponent,
    StoryListItemComponent,
    StoryItemComponent,
    CommentComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
