import responceForTest from '../services/responceForTest';
import showResaltTemplate from '../tamplate/showResaltTemplate.hbs';
import { startTestActions } from '../components/testStartActions';
import Toastify from 'toastify-js';
import { showTestInterFace } from './showTestInterFace';

const testActions = {
  correctAnswers: [],
  userAnswers: [],
  quantityOfQuestions: 0,
  currentQuestionIdx: 0,
  container: document.querySelector('.container'),
  initTest() {
    // get questions form Trivia, if no questions - showing notification
    const form = document.querySelector('#searchQuestions');
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const testsData = await responceForTest(e.target.elements);
      if (!testsData.length) {
        Toastify({
          text: "Sory, we couldn't find anything",
          backgroundColor: '#f64c72',
          duration: 2000,
          className: 'info',
        }).showToast();
        return;
      }
      // if all good - test start
      testActions.testStart(testsData);
    });
  },
  getCorrectAnswersAndQuantity(questions) {
    this.correctAnswers.push(...questions.map(item => item.correct_answer));
    this.quantityOfQuestions += questions.length;
  },
  testStart(questions) {
    // test start

    // getting corect answers and quantity of questions
    this.getCorrectAnswersAndQuantity(questions);

    this.testRun(questions);
  },
  async testRun(questions) {
    /*
     * Asking questions reqursivly, on each iteration, at start, checking number of question
     * If it is 10/10 we break reqursion and showing test result
     */

    if (this.quantityOfQuestions === this.currentQuestionIdx) {
      this.showTestResalt();
      this.correctAnswers = [];
      this.userAnswers = [];
      this.quantityOfQuestions = 0;
      this.currentQuestionIdx = 0;
      return;
    }

    // randomizing order of questions, and putting corret answer to incorect answers

    questions[this.currentQuestionIdx].incorrect_answers.splice(
      Math.round(
        Math.random() *
          questions[this.currentQuestionIdx].incorrect_answers.length,
      ),
      0,
      questions[this.currentQuestionIdx].correct_answer,
    );

    // start interface
    this.container.innerHTML = '';
    const userAnswer = await showTestInterFace(
      this.container,
      questions[this.currentQuestionIdx],
    );
    // after each iteration, function return DOM Node with user answer

    this.userAnswers.push(userAnswer.value); // pushing to all answers
    this.currentQuestionIdx += 1; // increasing index of current question
    this.testRun(questions); // and starting functions again
  },
  testResalt() {
    // getting sum of correct answers
    return this.userAnswers.reduce((acc, item, idx) => {
      item === this.correctAnswers[idx] && acc++;
      return acc;
    }, 0);
  },
  showTestResalt() {
    // showing results and asking to start again
    const quantityOfCorrectAnswers = this.testResalt();
    this.container.innerHTML = '';
    this.container.insertAdjacentHTML(
      'beforeend',
      showResaltTemplate({ correctAnswers: quantityOfCorrectAnswers }),
    );
    this.container
      .querySelector('.show-resalt-btn')
      .addEventListener('click', e => startTestActions.renderingStartPage());
  },
};

export { testActions };
