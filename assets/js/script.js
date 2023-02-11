"use strict"


//ClassWork
// function getCount(num){
//     console.log(num);
//     let number=num-1;
//     if(number>0){
//         getCount(number)
//     }
// }

// getCount(4);


// function getSumOfNumbers(num){
//     let sum=0;
//     for(let i=1;i<=num;i++){
//         sum+=i

//     }

//     console.log(sum)
// }

// getSumOfNumbers(4);



// function getSumOfNumbers(num){
//     if(num==1){
//         return num;
//     }else{
//         return num+getSumOfNumbers(num-1)
//     }

// }

// console.log(getSumOfNumbers(4));



// function getFactorial(num){
//     if(num==1){
//         return num;
//     }else{
//         return num*getFactorial(num-1)
//     }
// }

// console.log(getFactorial(5));


// let numbers=[1,2,3,4,5,6,7];

// numbers.forEach(element=>{
//     console.log(element)
// });


// let numbers=[1,2,3,4,5,6,7];

// numbers.forEach((element,index)=>{
//     console.log(index)
// });


// let numbers=[1,2,3,4,5,6,7];

// numbers.forEach((element,index,arr)=>{
//     console.log(arr)
// });



// let numbers=[1,2,3,4,5,6,7];

// numbers.forEach((element,index)=>{
//     console.log(`Index:${element}, Element ${index}`)
// });



// let numbers=[1,2,3,4,5,6,7];

// numbers.forEach((element,index)=>{
//     numbers[index]=element*2
// });

// console.log(numbers);


// let numbers=[1,2,3,4,5,6,7];

// for (const item of numbers) {
//     console.log(item);    
// }


// let numbers=[1,2,3,4,5,6,7];

// let user={
//     name:"Gultac",
//     surname:"Ceferova",
//     age:18
// }

// for (const key in user) {
//    console.log(key + ":"+ user[key]);
// }



// let user1={
//     name:"Gultac",
//     surname:"Ceferova",
//     age:18
// }



// let user2={
//     name:"Novreste",
//     surname:"Aslanzade",
//     age:25
// }


// let user3={
//     name:"Lale",
//     surname:"Quliyeva",
//     age:25
// }


// let users=[user1,user2,user3]


// for (const item of users) {
//     if(item.age>20){
//         console.log(`${item.name} ${item.surname}`)
//     }
    
// }

// for (const item of users) {
//    for (const key in item) {
//     console.log(key+":"+item[key])
  
//    }
    
// }


// for(let item of users){
//     for (const key in item) {
//         if(key=="surname"){
//             console.log(key+":"+item[key])
//         }
       
//     }
// }



// let arr1=[1,2,3,4];

// console.log(arr1);

// let arr2=arr1;

// arr2[0]=100;

// console.log(arr1);


// let nums=[2,3,4,6,8,9,11];

// let result=nums.map(m=>{
//     return m*2;
// })

// console.log(nums);
// console.log(result);


// let nums=[2,3,4,6,8,9,11];

// function getNumbers(arr){
//     for (const item of nums) {
//         console.log(item)
        
//     }
// }

// getNumbers(nums);





// function getNumbers(...arr){
//     for (const item of arr) {
//         console.log(item)
        
//     }
// }

// getNumbers(1,2,3,4,5);



// function getNumbers(n,...arr){
//     for (const item of arr) {
//         console.log(item+"/"+n)
        
//     }
// }

// getNumbers(1,2,3,4,5);


// function getNumbers(n,m,...arr){
//     for (const item of arr) {
//         console.log(item+"/"+n)
        
//     }
// }

// getNumbers(1,2,3,4,5);



// let nums=[2,3,4,6,8,9,11];

// let copyArr=[...nums];
// console.log(copyArr);



// let student={
//     name:"Anar",
//     surname:"Huseynov"
    
// }

// let copyObj={...student}

// console.log(copyObj)



// let user1={
//     name:"Gultac",
//     surname:"Ceferova",
//     age:18
// }



// let user2={
//     name:"Novreste",
//     surname:"Aslanzade",
//     age:25
// }


// let user3={
//     name:"Lale",
//     surname:"Quliyeva",
//     age:25
// }


// let users=[user1,user2,user3]

// const showAverageByAge=(arr)=>{
//     let sumOfAge=0;
//     for (const item of arr) {
//         sumOfAge+=item.age;
        
        
//     }

//     return sumOfAge/arr.length;

// }

// console.log(showAverageByAge(users))


// const checkOdd=num=>num%2==1;

// const checkEven=num=>num%2==0;

// const checkGreater=num=>num>5;
 



// function sumOfNumbersByCondition(arr,callback){
//     let sum=0;
//     for (const item of arr) {
//         if(callback(item)){
//             sum+=item;
//         }
//     }

//     return sum;
// }

// let num=[1,2,3,4,5,6,7];
// let result=sumOfNumbersByCondition(num,checkOdd);
// let result1=sumOfNumbersByCondition(num,checkEven);
// let result2=sumOfNumbersByCondition(num,checkGreater);

// console.log(result);
// console.log(result1);
// console.log(result2);



// let num=[1,2,3,4,5,6,7];

// function sumOfNumbersByCondition(arr,callback1,callback2){
//     let sum1=0;
//     let sum2=0;

//     for (const item of arr) {
//         if(callback1(item)){
//             sum1+=item;
//         }
//     }

//     for (const item of arr) {
//         if(callback2(item)){
//             sum2+=item;
//         }
//     }

//     return sum1+sum2;
// }

// let result2=sumOfNumbersByCondition(num,checkEven,checkOdd);

// console.log(result2);



// let user1={
//     name:"Gultac",
//     surname:"Ceferova",
//     age:18,
//     email:"gultac@gmail.com"
// }



// let user2={
//     name:"Novreste",
//     surname:"Aslanzade",
//     age:25,
//     email:"novreste@gmail.com"
// }


// let user3={
//     name:"Lale",
//     surname:"Quliyeva",
//     age:25,
//     email:"lale@gmail.com"
// }


// let users=[user1,user2,user3]

// function checkAge(obj){
//     return obj.age>18;
// }


// function checkName(obj){
//     return obj.name=="Novreste";
// }


// function checkEmail(obj){
//     for(let i=0;i<obj.email.length;i++){
//         if(obj.email[i]=="t"){
//             return true;
//         }
//     }
//     return false;
// }



// function getDatasByFilter(users,callback){
//     for (const item of users) {
//         if(callback(item)){
//             console.log(`${item.name} ${item.surname} ${item.age}`)
//         }
        
//     }
// }

// getDatasByFilter(users,checkAge);



// function getDatasByFilter(users,callback){
//     for (const item of users) {
//         if(callback(item)){
//             console.log(`${item.name} ${item.surname} ${item.age}`)
//         }
        
//     }
// }

// getDatasByFilter(users,checkName);



// function getDatasByFilter(users,callback){
//     for (const item of users) {
//         if(callback(item)){
//             console.log(`${item.name} ${item.surname} ${item.age}`)
//         }
        
//     }
// }

// getDatasByFilter(users,checkEmail);


// getDatasByFilter(users,m=>m.age>20);


// getDatasByFilter(users,m=>m.name=="Novreste");


// let result=user.filter(m=>m.name=="Novreste");
// console.log(result);




//Task
let user1={
    name:"FFF",
    surname:"GGG",
    age:18
}


let user2={
    name:"ZZZ",
    surname:"YYY",
    age:25
}


let user3={
    name:"XXX",
    surname:"YYY",
    age:25
}


let user4={
    name:"XXX",
    surname:"YYY",
    age:28
}

let user5={
    name:"YYY",
    surname:"NNN",
    age:17
}



let users=[user1,user2,user3,user4]


function checkAge(obj){
    return obj.age>18;
}

function getDatasByFilter(users,callback){

    const d = new Date();
    let year = d.getFullYear();

    for (const item of users) {
        if(callback(item)){

            console.log(`${item.name} ${item.surname} ${year-item.age}`)
        }        
    }
}

getDatasByFilter(users,checkAge);

