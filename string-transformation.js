const myName = 'Анастасия';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Владилена Минина';
const reasonText = 'хочу карьерного роста';
const numberOfMonth = '1';

let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык 
программирования ${programmingLanguage} на курсе по ${programmingLanguage} 
у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}.
До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев(а). 
Я уверен(а), что пройду данный курс до конца!`;

let  myNewInfoText = myInfoText.replaceAll('JavaScript', 'javascript');
let myNewAnotherInfoText = myNewInfoText.replaceAll('курс', 'КУРС');
console.log(myNewAnotherInfoText);
console.log(myInfoText.length);
console.log(myInfoText[0]);
console.log(myInfoText[286]);
