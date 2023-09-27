console.log('my' + ' cat');
console.log('1' + 2);
console.log("ellie's \n\tbook");

console.log(1+1); //덧셈
console.log(1-1); //뺄셈
console.log(1/1); //나누기
console.log(1*1); //곱하기
console.log(5%2); //나머지
console.log(2**3) //제곱

let counter = 2;
const preIncrement = ++counter;
console.log('preIncrement: ${preIncrement} , counter: ${counter}');
const postIncrement = counter++;
console.log('postIncrement: postIncrement, counter: counter');
const preDecrement = --counter;
console.log('preDecrement: preDecrement, counter: counter');
const postDecrement = counter--;

let x = 3;
let y = 6;
x += y; // x = x+y;
x -= y;
x *= y;
x /= y;

console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

const value1 = false;
const value2 = 4 < 2;

console.log('or ${value1 || value2 || check()}');

function check() {
    for (let i = 0; i < 10; i ++) {
        console.log('😱');
    }
    return true;
}

console.log(!value1);
const stringFive = '5';
const numberFive = 5;

console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);
