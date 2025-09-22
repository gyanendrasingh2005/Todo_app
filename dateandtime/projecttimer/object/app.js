//creating objects
// const product ={
//     id:1,
//     pName:"laptop",


// };


// let person={
//     name:"vinod",
//     age:30,
//     istudent:false,
//     greet:function()
//     {
//         console.log("welcome to world besr css course ");

//     },

// }




// let person={
//     name:"vinod",
//     age:30,
//     "is'tudent":false,
//     greet:function()
//     {
//         console.log("welcome to world besr css course ");

//     }, 
// }

// console.log(person.age);
// console.log(person.name);
// console.log(person["is'student"]);
// // adding the job and modifying existing one 
// person.job="web dev";
// person.age=18;
// person[`age`]=34;
// console.log(person);



// we can add dynamic keys in an object 


// let student = {
//     idtype: "A123456",
//     sName: "Vinod",
//     sAge: 29,
//     greet: function () {
//         console.log(`hey my ${this.idtype} is ${this.idtype} and my name is ${this.sName}`);
//     },
// };


// let car={
//     brand:"toyota",
//     model:"camry",
//     year:2022,
//     start:function(){
//         console.log("Engine started");

//     },
// };


// let a=10;
// const modifying=(x)=>{
//     x=20;
//   return x;
// };
// console.log(a);
// console.log(modifying(a));


// pass by reference 
// let obj={id:5,name:"kodyfier"};
// let newobj=Object.assign({},obj);
// newobj.name="thapa tec"
// console.log(newobj);

// console.log("original",newobj);

// let obj = { name: "gyanendra ", title: "singh" };
// let newobj = Object.assign({}, obj);
// newobj.name = "aastha ";
// console.log("original name is ", newobj);


// const obj1 = { name: "vinod" };
// const obj2 = { name: "vinod" };
// const obj3 = obj1;

// // Deep comparison using JSON.stringify (for simple objects)
// const isEqual = JSON.stringify(obj1) === JSON.stringify(obj2) ? true : false;



// let student ={

//     name:"gyanendra ",
//     title:"singh",
//     id:123343,
//     age:18,
//     isStudent:false,

//     greet:function()
//     {
//         console.log(`hey my id ${student.identity}&my name is ${student.name}`);

//     },



// };

// let JsonData=JSON.stringify(student);
// console.log(JsonData);
// let parseobject=JSON.parse(JsonData);
// console.log(parseobject);


// const  obj={
//     name:"kodify",
//     greet:function(){
//         console.log(this);

//     }
// };

// obj.greet();


// const obj={
//     name:"gyanendra singh",
// greet:()=>{
//     console.log(this);
// },
// };


// const product={
//     id:12345,
//     name:"gyanendra",
//     category:"e-commerce",
//     brand:"rolex",
//     price:4555127623,
//     stock:78774,
//     description:"share your feedback",

// };


// let keys=Object.keys(product);
// console.log(keys);


// let values=Object.values(product);
// console.log(values);

// let entries=Object.entries(product);
// console.log(entries);


// const target={a:1,b:2};
// const source={b:3,c:4};
// const mergeObject=Object.assign({},target,source);
// console.log(mergeObject);


// const student={


//     name:"Bob",
//     age:20,
//     grade:{
//         math:98,
//         science:68,
//         biology:69,
//     }
// };

// const addsubjectgrade=(student,computer,marks)=>{

//     if(!student.grades)
//     {
//         student.grades={};
//     }
//     return (student.grade.computer=marks);

// }
// addsubjectgrade(student,"computer",98);
// console.log(student);


 let inputArray=[{
    id:1,name:"alice"},
    {id:2,name:"Bob"},
    {id:3,name:"charlie"
 }];
 console.log(arrayToObj((inputArray)));
 const arrayToObj=(arr)=>{
    console.log(arr[2].id);
    
 }


















