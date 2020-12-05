import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Observable } from 'rxjs'

import { StoryService } from '../story.service'
import { Item } from '../types/item'
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() id: number;
  item$: Observable<Item>;
  isFolded = false;
  showMoreCount = 1
  constructor(
    private el: ElementRef,
    private storyService: StoryService,
  ) { }

  ngOnInit(): void {
    this.item$ = this.storyService.getItem(this.id)
  }

  get toggleButtonText() {
    return this.isFolded ? `[${this.showMoreCount} more]` : '[-]';
  }

  onClickToggleFold() {
    this.isFolded = !this.isFolded
    if (this.isFolded) {
      // FIXME: Not an ideal solution. Might be wrong if sub comments are not rendered yet. 
      this.showMoreCount = 1 + this.el.nativeElement.querySelectorAll('app-comment').length
    }
  }
}
