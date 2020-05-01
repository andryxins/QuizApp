import testInterFace from '../tamplate/testInterFace.hbs';
import decodeTestData from './decodeTestData';
import Toastify from 'toastify-js';

export const showTestInterFace = async (containerNode, questions) =>
  new Promise(res => {
    // inserting markUp with questions and answers to container
    // decoding specials symbols (", ', etc) when creating markUp

    console.log(questions);

    containerNode.insertAdjacentHTML(
      'beforeend',
      testInterFace(decodeTestData(questions)),
    );

    // adding eventListner, all logic was writen in, need to refactor
    document.querySelector('.currentQuestion').addEventListener('submit', e => {
      e.preventDefault();

      const questionsNodes = Array.from(e.target.elements); // getting all questions
      const userAnswer = questionsNodes.find(item => item.checked); // finding user question

      if (!userAnswer) {
        // if user didnt choose any answer
        Toastify({
          text: 'You should choose any answer!!',
          backgroundColor: '#f64c72',
          duration: 2000,
          className: 'info',
        }).showToast();
        return;
      }
      // if any input checked and submited, button turning to disabled
      questionsNodes[questionsNodes.length - 1].setAttribute(
        'disabled',
        'true',
      );
      // checking true or false
      if (userAnswer.value === questions.correct_answer) {
        Toastify({
          text: 'Excellent, you give correct answer!',
          backgroundColor: '#91e842',
          duration: 2000,
          className: 'info',
        }).showToast();
      } else {
        Toastify({
          text: 'You were wrong(',
          backgroundColor: '#f64c72',
          duration: 2000,
          className: 'info',
        }).showToast();
      }
      // if answer is incorrect - showing rigth answer
      questionsNodes.forEach(item => {
        if (item.value === questions.correct_answer) {
          item.nextElementSibling.removeAttribute('style');
          item.nextElementSibling.setAttribute(
            'style',
            'background-color: #91e842; border: 3px solid #91e842;',
          );
        }
      });
      // after 2 seconds switching to the next question
      setTimeout(() => res(userAnswer), 2000);
    });
  });
