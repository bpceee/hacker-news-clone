import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StoryListComponent} from './story-list/story-list.component'
import {StoryItemComponent} from './story-item/story-item.component'

const routes: Routes = [
  { path: '', component: StoryListComponent, data: {type: 'new'} },     // latest
  { path: 'top', component: StoryListComponent, data: {type: 'top'} },  // top
  { path: 'best', component: StoryListComponent, data: {type: 'best'} }, // best
  { path: 'item', component: StoryItemComponent }, 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
