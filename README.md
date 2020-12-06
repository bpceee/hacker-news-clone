# HackerNewsClone

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.3.
Using [Hacker News API](https://github.com/HackerNews/API).

### Features:
* All Stories Page
  * Display the latest stories first http://localhost:4200
* Top Stories Page
  * Display up to 500 top stories, use the `topstories` API to fetch top stories http://localhost:4200/top
* Best Stories
  * Display up to 500 best stories, use the `beststories` API to fetch best stories http://localhost:4200/best
* Display all comments for a given story
  * Display all comments for a given story
  * Include sub-comments
  * Fold / Unfold comment
  * Go to individual comment page
  * Go to to parent comment page
  
Due to time limit, only added some tests in comment and story-item componnent. No e2e test though 😕.

## Setup
[Angular CLI](https://github.com/angular/angular-cli) version 11.0.3.

Node.js v14.15.0. (Should be fine on Node 10.13 or above, haven't got time to try it yet)

Run `npm ci` to install dependencies.
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
