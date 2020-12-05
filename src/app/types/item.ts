// From https://github.com/HackerNews/API#items
export type Item = {
  id: number // The item's unique id.
  deleted?: boolean //	true if the item is deleted.
  // type	The type of item. One of "job", "story", "comment", "poll", or "pollopt".
  by: string // The username of the item's author.
  time?: number // Creation date of the item, in Unix Time.
  text: string // The comment, story or poll text. HTML.
  dead?: boolean //	true if the item is dead.
  parent: number // The comment's parent: either another comment or the relevant story.
  // poll	The pollopt's associated poll.
  kids: number[] // The ids of the item's comments, in ranked display order.
  url?: string // The URL of the story.
  score?: number // The story's score, or the votes for a pollopt.
  title?: string	//The title of the story, poll or job. HTML.
  // parts	A list of related pollopts, in display order.
  descendants?: number//	In the case of stories or polls, the total comment count.
}