import responceForTest from '../services/responceForTest';
import testInterFace from '../tamplate/testInterFace.hbs';
import showResaltTemplate from '../tamplate/showResaltTemplate.hbs';
import { startTestActions } from '../components/testStartActions';
import Toastify from 'toastify-js';

const testActions = {
  correctAnswers: [],
  userAnswers: [],
  quantityOfQuestions: 0,
  currentQuestionIdx: 0,
  container: document.querySelector('.container'),
  initTest() {
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
      testActions.testStart(testsData);
    });
  },
  getCorrectAnswersAndQuantity(questions) {
    this.correctAnswers.push(...questions.map(item => item.correct_answer));
    this.quantityOfQuestions += questions.length;
  },
  testStart(questions) {
    this.getCorrectAnswersAndQuantity(questions);
    this.testRun(questions);
  },
  testRun(questions) {
    if (this.quantityOfQuestions === this.currentQuestionIdx) {
      this.showTestResalt();
      this.correctAnswers = [];
      this.userAnswers = [];
      this.quantityOfQuestions = 0;
      this.currentQuestionIdx = 0;
      return;
    }
    questions[this.currentQuestionIdx].incorrect_answers.splice(
      Math.round(
        Math.random() *
          questions[this.currentQuestionIdx].incorrect_answers.length,
      ),
      0,
      questions[this.currentQuestionIdx].correct_answer,
    );
    this.container.innerHTML = '';
    this.container.insertAdjacentHTML(
      'beforeend',
      testInterFace(questions[this.currentQuestionIdx]),
    );
    document.querySelector('.currentQuestion').addEventListener('submit', e => {
      e.preventDefault();
      const userAnswer = Array.from(e.target.elements).find(
        item => item.checked,
      );
      if (!userAnswer) {
        Toastify({
          text: 'You should choose any answer!!',
          backgroundColor: '#f64c72',
          duration: 2000,
          className: 'info',
        }).showToast();
        return;
      }

      this.userAnswers.push(userAnswer.value);
      this.currentQuestionIdx += 1;
      this.testRun(questions);
    });
  },
  testResalt() {
    return this.userAnswers.reduce((acc, item, idx) => {
      item === this.correctAnswers[idx] && acc++;
      return acc;
    }, 0);
  },
  showTestResalt() {
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
