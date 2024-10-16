let userString = prompt('Введите текст для обрезки');
let userStringTrim = userString.trim();
let startSliceIndex = prompt('Введите индекс, с которого нужно начать обрезку строки');
let endSliceIndex = prompt('Введите индекс, с которого нужно начать обрезку строки');
let string = userStringTrim.slice(startSliceIndex, endSliceIndex);
alert(`Результат ${string} `);