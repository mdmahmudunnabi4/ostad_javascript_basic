// const x = 10;
// const y = 20;
// const z = x + y
// console.log(z);


// for loop******************
// for(let x=0; x < 10; x++){
//     console.log(x);
// }


//function*****************

// function addNumber(){
//     const num1  = 3;
//     const num2 = 4;
//     console.log(num1 + num2);
// }

// addNumber()


// function addTwoNumber(num1, num2){
//     const num3 = num1 + num2;
//     console.log(num3);
// }

// addTwoNumber(10, 20)
// addTwoNumber(1, 2)
// addTwoNumber(40, 20)


// Object*******************


// const student = {
//     name: "rana",
//     age:35,
//     cgpa:2.70,
// }

// console.log(student['cgpa']);
// console.log(student.cgpa);


// Array********************


// const numbers = [3, 4, 2, 6, 6];

// for (let i = 0 ; i < numbers.length; i++){
//     console.log(numbers[i]);
// }

// for in Loop (Array) *******************

// const names = ['rana', 'korim', 'rahim', 'sawon']

// for( let item in names){
//     console.log(names[item]);
// }


// for in Loop (Object) *******************

const person = {
    name: "jack",
    age: 38,
    city: "london", 
    height: "6 Feet"
}

for(let item in person){
    console.log(item);
    console.log(person[item]);
}