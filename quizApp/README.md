# QuizApp by me :-)

You can try it [here](https://andryxins.github.io/QuizApp/)

### Usage

Choose options, tap on 'Start' and try to get 10/10 rigth questions!

### About App

Vanilla JS single-page app, markUp maded with HandleBars, for notification App
using Toastify. Questions we get [Open Trivia DataBase](https://opentdb.com/).
Development and build with
Webpack([Webpack starter kit](https://github.com/luxplanjay/webpack-starter-kit)).

### How it Works

App make request to [Open Trivia DataBase](https://opentdb.com/), get available
categories. After user select options, App make request and take random
questions in selected categories. Then recursivly asking user all questions and
show where he choose rigth choice, where - was make mistake. After 10 questions
App show result.
