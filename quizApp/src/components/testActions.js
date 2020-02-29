import responceForTest from '../services/responceForTest';
import testInterFace from '../tamplate/testInterFace.hbs';
import showResaltTemplate from '../tamplate/showResaltTemplate.hbs';
import { startTestActions } from '../components/testStartActions';

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
    if (this.userAnswers.length === this.correctAnswers.length) {
      this.showTestResalt();
      this.correctAnswers = [];
      this.userAnswers = [];
      this.quantityOfQuestions = 0;
      this.currentQuestionIdx = 0;
      return;
    }
    questions[this.currentQuestionIdx].incorrect_answers.push(
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
      ).value;
      this.userAnswers.push(userAnswer);
      this.currentQuestionIdx += 1;
      console.log(this.userAnswers);
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
