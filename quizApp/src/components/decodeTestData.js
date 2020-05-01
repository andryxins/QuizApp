const htmlDecode = input => {
  const e = document.createElement('div');
  e.innerHTML = input;
  return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
};

export default ({ correct_answer, incorrect_answers, question }) => {
  correct_answer = htmlDecode(correct_answer);
  question = htmlDecode(question);
  incorrect_answers.forEach(item => htmlDecode(item));

  return {
    correct_answer: correct_answer,
    incorrect_answers: incorrect_answers,
    question: question,
  };
};
