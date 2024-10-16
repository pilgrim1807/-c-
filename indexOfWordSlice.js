let userText = prompt('Введите текст');
let userTextTrim = userText.trim();
let wordFromText = prompt('Введите слово из текста');
let wordFromTextTrim = wordFromText.trim();
let indexOfWord = userTextTrim.indexOf(wordFromTextTrim);
let string = userTextTrim.slice(0, indexOfWord);
alert(`Результат ${string}`);