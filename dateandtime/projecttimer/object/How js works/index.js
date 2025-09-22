// lexical analysis 
// tokens are the basic building block of the 
// javascript is a single threaded means ek k bas ek kam hoga 
//


// const fun2=()=>{
//     console.log("fun2 starts and ends");
// };
// const fun1=()=>{
//     console.log("fun1 is start");
//     fun2();
//     console.log("fun1 ends");
// };

// fun1();



// const fun2=()=>{
//     setTimeout(()=>{
//         console.log("fun2 starts and ends");

//     },2000);
// };

// const fun1=()=>{
//     console.log("fun1 is start ");
//     fun2();
//     console.log("fun1 ends");
// };


// fun1();

//  console.log(myvar);
// var myvar=10;
// function greet(){
//   console.log("welcome ,if you are reading this,dont forget you are awesome")
// };
// greet();


// function outerfunction(){
//     var outervariable="i am from outer ";


// function innerFunction()
// {
//     console.log(outerfunction);
// }

// return innerFunction;
// }

// var closureFunction=outerfunction();
// closureFunction();


// const name="gyan";
// const age=30;
// // if key and value are same then object property 
// const person={name:name,age:age};
// const person1={name,age};
// console.log(person1);

// const numbers=[10,20,30];
// const [first,second,third]=numbers;


// // const first=numbers[0];

// console.log(first);
// console.log(second);
// console.log(third);



// destructing arrays 


// const numbers=[10,20,30,40,50];
// const[,,,,fifth]=numbers;
// console.log(fifth);


// let a=10;
// let b=30;

// let c=b;
// b=a;
// a=c;
// console.log(a);
// console.log(b);


// [a,b]=[b,a];
// // console.log(a,b);


// const 
// user={name:"Gyan",age:30};
// // object.properties name 
// const name_=(user.name);
// console.log(name_)


// const {name, age} = user;
// console.log(name, age);



// spread operator 
// 1.copying an array

// let fruits=["apple,orange,mango,banana"];
// let newfruits=[...fruits];
// console.log(newfruits);

// const number1=[1,2,3,4];
// const number2=[4,5,6,7];
// const newnumber=[...number1,...number2];
// // console.log(newnumber);
// fruits.push("grapes");
// // console.log(fruits)

// fruits.push(...["grapes","guava"]);
// console.log(fruits);


// const sum=(...numbers)=>{
//     return a+b+c+d;

// }

// console.log(sum(1,2,3,4));


// const sum1=(...numbers)=>{
//  return   numbers.reduce((accum,currval)=>(accum=accum+currval),0);

// }

// console.log(sum1(1,2,3,4,5));



// let base=2;
// let exponent=3;

// console.log("using the math.pow",Math.pow(base,exponent));
// console.log("using exopnetiaion operator",base**exponent);

// let area=Math.PI*5**2;
// console.log(area);



// object and rest operator 
// const student ={
//     age:10,name:"gyan",isstudent:"true"
// };


// // object and spread operator
// const obj1={a:10,b:20,c:50};
// const obj2={c:30,d:40};
// const newobj={...obj1,...obj2};
// console.log(newobj);


// let str="   thapa  ";
// console.log(str.trim().length);
// console.log(str.trimStart());
// console.log(str.trimEnd().length);

// higher order function and callback functioin '

// const mathoperation=(a,b,operation)=>{
//    return operation(a,b);

// };

// const add=(a,b)=>{
//     return a+b;

// }



// const sub=(a,b)=>{
//     return a-b;
// }
// const x=10;
// const y=20;


// console.log(mathoperation(x ,y ,add))
// //  console.log(mathoperation(10,20,sub))



// promises 
// a promise is like a placeholder for the result of an asynchronous operation 
// then and catch for the promises 


// const promise=new Promise(function(resolve,reject){

//     // your code goes here 

// })




// const pr=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("hey i miss you ")
//     },2000);
// });
// pr.then((res)=>{

//     console.log(res);
// }).catch((error)=>
// {  
//       console.log(error);

// }).finally(()=>{
//     console.log("dont worry we all miss you and keep smiling ");


// })




// const enrollstudent = (studentname) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const issuccessful = Math.random() > 0.4;
//             if (issuccessful) {
//                 resolve(`Enrolment successful for the student ${studentname}`)
//             }
//             else {
//                 reject(`Enrolment failed for the student ${studentname}. Please try again.`);
//             }
//         }, 2000);

//     })
// }

// const studentname = "John Doe"; // Define the student name here

// enrollstudent(studentname).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// }).finally(() => {
//     console.log("enrollment process completed")
// });



// Promise.all
// Promise.allsettled
// Promise.race



// jab saare true aaye tb hi all use karna wanr agar koi bhi ek false lg rha ho to usko settle.all kar dena 
// promise .race me jo sabbse pehle excute hoga inspite of success or false 

const promise1 = new Promise((resolve) =>
    setTimeout(() => resolve("first"), 2000)
);

const promise2 = new Promise((resolve) =>
    setTimeout(() => resolve("Two"), 2000)
);
const promise3 = new Promise((resolve) =>
    setTimeout(() => resolve("Three"), 2000)
);

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
}).catch((error) => {
    console.error(error);
});














