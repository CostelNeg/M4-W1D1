// Esercizio 1

function Check50() {
  let num1 = 50;
  let num2 = 0;
  let sum = num1 + num2
  if (Number.isInteger(num1) && Number.isInteger(num2) && num1 === 50 && num2 ===50 || sum === 50 ) {
    return true
  } else {
    return false
  }
  
}
console.log(Check50());



// Esercizio  2 
let posizione = 2 ;
 let stringa ="caro"
function removeChar(){ 
stringa = stringa.substring(0,posizione -1)+stringa.substring(posizione) 
return stringa
}
console.log(removeChar())

//Esercizio 3 

function numberBetween(){
  let num1 = 40;
  let num2 = 44;

  if((num1<=60 && num1>=40 || num1<=100 && num1>=70) && (num2<=60 && num2>=40 || num2<=100 && num2>=70)   ){
    return true
  }else{
    return false
  }

}

console.log(numberBetween())

//esercizio 4

function losNew() {
  let myString = "los angeles";
  let firstLetter = myString.charAt(0);
  let capitalizeFirstLetter = firstLetter.toUpperCase();
  let restOfLetter = myString.slice(1);
  let capitalizeString = capitalizeFirstLetter + restOfLetter;
  if (
    capitalizeString.startsWith("Los") ||
    capitalizeString.startsWith("New")
  ) {
    return true;
  } else {
    return false;
  }
}

//esercizio 5
function arrayCount() {
  const array = [1, 2];
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}

//esercizio 6
function include() {
  const array = [2, 4, 5, 6];
  if (array.includes(1) || array.includes(3)) {
    return false;
  } else {
    return true;
  }
}

//esercizio 7
function triangle() {}

//esercizio 8
function acronimo() {
  let string = "bella ciao";
  string = string.split(" ");
  let acronimo = "";
  let index = 0;
  while (index < string.length) {
    let proxParola = string[index];
    acronimo = acronimo + proxParola.charAt(0);
    index = index + 1;
  }
  acronimo = acronimo.toUpperCase();
  return acronimo;
}

//esercizio extra 1

function charCount() {
  let string = "iaoaa";
  const charMap = {};
  let max = 0;
  let maxChar = "";

  // creiamo una mappa dei char
  for (let char of string) {
    if (charMap[char]) {
      // incrementiamo il valore del char se esiste nella mappa
      charMap[char]++;
    } else {
      // se non esiste avra valore 1 (inizializazione)
      charMap[char] = 1;
    }
  }

  // cherchiamo il carattere piu comune
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

//esercizio extra 2
function anagramma() {
  let string1 = "aasa";
  let string2 = "saca";
  let a = string1.length;
  let b = string2.length;

  if (a.length !== b.length) {
    return false;
  }

  let str1 = string1.split("").sort().join("");
  let str2 = string2.split("").sort().join("");
  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
}

// esercizio extra 3

function listOfanagrams() {
  let string = "cartine";
  const array = ["incerta", "carenti", "trecina", "espatrio"];

  let str1 = string.split("").sort().join("");
  let str2 = "";
  const arrayNew = [];
  for (let i = 0; i < array.length; i++) {
    str2 = array[i].split("").sort().join("");
    if (str2 === str1) {
      arrayNew.push(array[i]);
    }
  }
  return arrayNew;
}

//esercizio extra 4

function palindromo() {
  let string = "sar";
  let strong = string.split("").reverse().join("");
  //console.log(strong);
  if (string === strong) {
    return true;
  } else {
    return false;
  }
}
console.log(palindromo())
//esercizio extra 5

function rturnRevere() {
  let num1 = 1234;
  let num2 = num1.toString().split("").reverse().join("");
  console.log(num2);
}
console.log(rturnRevere())
//esercizio extra 6
function stair() {
  let stairNumb = 6;
  let fillArray = new Array(stairNumb).fill(" ");
  while (fillArray.indexOf(" ") !== -1) {
    fillArray.shift();
    fillArray.push("#");
    console.log(fillArray.join(""));
    stairNumb--;
  }
}
console.log(stair())
//esercizio extra 7

function reverseStrin() {
  let string = "Ciao Belli";
  let revString = string.split("").reverse().join("");

  return revString
}
console.log(reverseStrin())
//esercizio extra 8

function sottoArray() {
  let array = [1, 2, 3, 4, 5, 6, 7, 8];
  let num = 3;
  let arrayTemp;
  while (array.length > 0) {
    arrayTemp = array.splice(0, num);
    console.log(arrayTemp);
  }
}
console.log(sottoArray())
//esercizio extra 9
//Scrivi una funzione che accetti un numero positivo X come parametro.
//La funzione dovrebbe stampare a console una “piramide” create con il carattere “#” e avente X strati
function piramide() {
  let num = 10;
  for (let i = 1; i <= num; i++) {
    let string = " ".repeat(num - i);
    let string1 = "#".repeat(i * 2);
    console.log(string + string1 + string);
  }
}
console.log(piramide())
//esercizio extra 10

function nMatrice() {
  let n = 7;
  //mi fa un nested array per la lunghezza del n .
  const array = Array.from({ length: n }, () => []);
  let riga = 0;
  let colonna = 0;
  // a fine riga
  let fineRiga = n - 1;
  // a fine colonna
  let fineColonna = n - 1;
  let conta = 1;

  while (colonna <= fineColonna && riga <= fineRiga) {
    for (let i = colonna; i <= fineColonna; i++) {
      array[riga][i] = conta;
      conta++;
    }
    riga++;

    //fine colonna
    for (let i = riga; i <= fineRiga; i++) {
      array[i][fineColonna] = conta;
      conta++;
    }
    fineColonna--;

    //fine riga 
    for (let i = fineColonna; i >= colonna; i--) {
        array[fineRiga][i] = conta;
        conta++;
    }
    fineRiga--;

    //prima colona dalla fine 
    for(let i= fineRiga;i>=riga;i--){
        array[i][colonna] = conta;
        conta ++;
    }
    colonna++
  }
  console.log(array);
}