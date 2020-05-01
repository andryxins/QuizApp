const htmlDecode = input => {
  const e = document.createElement('div');
  e.innerHTML = input;
  return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
};

export default ({ correct_answer, incorrect_answers, question }) => {
  const decodedCorrect_answer = htmlDecode(correct_answer);
  const decodedQuestion = htmlDecode(question);
  const updatedIncorrect_answers = incorrect_answers.map(item =>
    htmlDecode(item),
  );
  return {
    correct_answer: decodedCorrect_answer,
    question: decodedQuestion,
    incorrect_answers: updatedIncorrect_answers,
  };
};
