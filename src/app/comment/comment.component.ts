import { Component, OnInit, Input } from '@angular/core';

import {StoryService} from '../story.service'
import {Item} from '../types/item'
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() id: string;
  item: Item;
  constructor(
    private storyService: StoryService
  ) { }

  ngOnInit(): void {
    this.storyService.getItem(this.id).subscribe((data)=>{
      this.item = data
    })
  }

}
