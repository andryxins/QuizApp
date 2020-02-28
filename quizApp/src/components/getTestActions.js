import responceForTest from '../services/responceForTest';
import testInterFace from '../tamplate/testInterFace.hbs';
import showResaltTemplate from '../tamplate/showResaltTemplate.hbs';

const refs = {
  container: document.querySelector('.container'),
  form: document.querySelector('#searchQuestions'),
};

const testActions = {
  correctAnswers: [],
  userAnswers: [],
  quantityOfQuestions: 0,
  currentQuestionIdx: 0,
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
      return;
    }
    questions[this.currentQuestionIdx].incorrect_answers.push(
      questions[this.currentQuestionIdx].correct_answer,
    );
    refs.container.innerHTML = '';
    refs.container.insertAdjacentHTML(
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
    refs.container.innerHTML = '';
    refs.container.insertAdjacentHTML(
      'beforeend',
      showResaltTemplate({ correctAnswers: quantityOfCorrectAnswers }),
    );
  },
};

refs.form.addEventListener('submit', async e => {
  e.preventDefault();
  const testsData = await responceForTest(e.target.elements);
  testActions.testStart(testsData);
});

// category: "General Knowledge"
// type: "multiple"
// difficulty: "medium"
// question: "Which of these companies does NOT manufacture automobiles?"
// correct_answer: "Ducati"
// incorrect_answers: (3) ["Nissan", "GMC", "Fiat"]
