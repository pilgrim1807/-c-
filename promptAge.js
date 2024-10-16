let userName = prompt('Как вас зовут?');
let userAnswer = userName.trim();
let userAnswerName = userAnswer.toLowerCase();
let userAge = prompt('Сколько вам лет?');
let userAnswers = userAge.trim();
let userAnswersAge = (Number(userAnswers));
alert(`Вас зовут ${userAnswerName} и вам ${userAnswersAge} лет `);