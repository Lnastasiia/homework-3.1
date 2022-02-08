
let inputStr = prompt('Введите ваш ИНН');
console.log(inputStr);
let arrinputStr = inputStr.split('');

let checkSum = (-1 * arrinputStr[0]) + (arrinputStr[1] * 5) + (arrinputStr[2] * 7) + (arrinputStr[3] * 9) + (arrinputStr[4] * 4) + (arrinputStr[5] * 6) + (arrinputStr[6] * 10) + (arrinputStr[7] * 5) + (arrinputStr[8] * 7);

console.log(`Контрольноая сумма по формуле: ${checkSum}`);

let checkNum = checkSum - (Math.trunc(checkSum / 11)*11);
console.log(`Контрольное число после деления: ${checkNum}`);

if(arrinputStr.length < 10 && checkSum != arrinputStr[9]){
    console.log("Вы ввели не корректный ИНН");
}else{
    console.log("Вы ввели корректный ИНН");
}if(arrinputStr[8] % 2 != 0){
    console.log("Владелец ИНН мужчина");
}else{
    console.log("Владелец ИНН женщина");
}

let date = new Date(1900, 0, 1);


let daysBday = arrinputStr.slice(0, 5).join("");
let dateBday = new Date(1900, 0, daysBday);
//console.log(dateBday);

let arrdateBday = [dateBday.getDate(), dateBday.getMonth()+1, dateBday.getFullYear()]
let Bday = arrdateBday.join('.');
console.log(`Дата рождения: ${Bday}`);

let currDate = new Date();
//console.log(currDate);

let age = new Date().getFullYear() - dateBday.getFullYear();

if((currDate.getMonth() < dateBday.getMonth()) || (currDate.getMonth() == dateBday.getMonth()) && (currDate.getDate() < dateBday.getDate()) ){
    age = age - 1;
}
console.log(`Полных лет: ${age}`);
    





