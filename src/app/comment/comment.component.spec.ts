import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { StoryService } from '../story.service'
import { CommentComponent } from './comment.component';

describe('CommentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;
  let storyServiceStub: Partial<StoryService>;

  beforeEach(async () => {
    storyServiceStub = {
      getItem: (id: number) => {
        const isRoot = id === 0
        return of({
          by: "m12k",
          id,
          kids: isRoot?[1, 2]:[],
          parent: 25316198,
          text: isRoot?"root comment":"child comment",
          time: 1607188816,
          type: "comment",
        })
      }
    }
    await TestBed.configureTestingModule({
      declarations: [ CommentComponent ],
      providers: [ { provide: StoryService, useValue: storyServiceStub } ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.componentInstance;
    component.id = 0,
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render root comment conent', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.commtext').textContent).toContain('root comment');
  });

  it('should render child comment conent', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('.commtext')[1].textContent).toContain('child comment');
  });

  it('toggle fold should work', () => {
    const compiled = fixture.nativeElement; 
    compiled.querySelector('.toggle-btn').click();
    fixture.detectChanges();
    expect(compiled.querySelector('.commtext').textContent).not.toContain('root comment');

    compiled.querySelector('.toggle-btn').click();
    fixture.detectChanges();
    expect(compiled.querySelectorAll('.commtext')[1].textContent).toContain('child comment');
  })
});
