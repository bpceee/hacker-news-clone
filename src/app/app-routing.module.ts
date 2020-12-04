import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {StoryListComponent} from './story-list/story-list.component'

const routes: Routes = [
  { path: '', component: StoryListComponent },
  // { path: 'heroes', component: StoryListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
