"use strict";

///// object

//  const michaealInfo = {  /// key(propretie) : value
//     firstName : "Michael" ,
//     lastName : "jackson" ,
//     age : 25 ,
//     job : "singer" ,
//     active : false ,
//     hobbies : ["singing" , "dancing" ,"acting"]
//  }

/////// dot notation ===> name-of-object . Key
// console.log(michaealInfo.hobbies[1])

//// bracket notation : ====> name-of-object["key"]

//  console.log(michaealInfo["job"])
// console.log(michaealInfo["hobbies"][2])

// const michaealInfo = {
//   firstName: "Michael",
//   lastName: "jackson",
//   age: 25,
//   job: "singer",
// };

// const intrestedIN = prompt(
//   "what do you want to khnow about Michael ? choose between firstName , lastName , age and  job"
// );

// //// "firstName"

// console.log(michaealInfo[intrestedIN])


// const michaealInfo = {
//   firstName: "Michael",
//   lastName: "jackson",
//   age: 25,
//   job: "singer",
// };

//// how to add (key : value) in object (with .(dot) notation) ::

//// object. new-key = new value ... 


// michaealInfo.location = "america" ; 
// michaealInfo.trophies = "oscar"



///// //// how to add (key : value) in object (with [](bracket) notation) ::
//// object["new-key"] = "value" ;

// michaealInfo["gender"] = "male"
// console.log(michaealInfo)

//// edit (modification) :: 

//  const michaealInfo = {  /// key(propretie) : value
//     firstName : "Michael" ,
//     lastName : "jackson" ,
//     age : 25 ,
//     job : "singer" ,
//     active : false ,
//     hobbies : ["singing" , "dancing" ,"acting"]
//  }

//// syntax : obj.old-key = "new-value"

// console.log(michaealInfo)

// michaealInfo.firstName = "Peter"
// console.log(michaealInfo)


//// key word : this (es6) : 

const jonas = {
    firstName : "jhonas" , 
    lastName : "shmedman" , 
    bearthYear : 1993 , 
    calcAge : function (now){
        return now - this.bearthYear
    } , 

        introduce : function (){
        return `he's name is ${this.firstName} and he work as a  ${this.job}`
    } , 
    job :"developper" ,
 
}

 const michaealInfo = {  /// key(propretie) : value
    firstName : "Michael" ,
    lastName : "jackson" ,
     bearthYear : 2000 ,
    introduce : function (){
        return `he's name is ${this.firstName} and he work as a  ${this.job}`
    } , 
    age : 25 ,
    job : "singer" ,

 } 


console.log(jonas.calcAge(2025))


const Peter = {
    firstName : "peter" , 
    lastName : "karlos" , 
    bearthYear : 1994 , 
    calcAge : function (){
        return 2025 - this.bearthYear
    } , 
    job : "designer" , 

    hobbies : ["football" , "movies" , "walking"] , 

}


//// (peter) is a -31- years old -designer- and has -a/no- driver license and he love watching -movies-


///// challange correction :: 
//// obj.new-key = new-value

const mark = {
    fullName : "mark miller" , 
    mass : 78 , 
    height : 1.69 ,
    calcBmi : function (){
  this.bmi = this.mass / this.height ** 2 
  return this.bmi
    }

}


const jhon = {
    fullName : "jhon smith" , 
    mass : 92 , 
    height : 1.95 ,
        calcBmi : function (){
  this.bmi = this.mass / this.height ** 2 
  return this.bmi
    }
}


mark.calcBmi()
jhon.calcBmi()

console.log(mark)
console.log(jhon)


if (mark.bmi > jhon.bmi) {
    console.log(`${mark.fullName}'s Bmi (${Math.trunc(mark.bmi)}) is higher than ${jhon.fullName}'s Bmi (${Math.trunc(jhon.bmi)}) `)
}

else if (jhon.bmi > mark.bmi){
   console.log(`${jhon.fullName}'s Bmi (${Math.trunc(jhon.bmi)}) is higher than ${mark.fullName}'s Bmi (${Math.trunc(mark.bmi)}) `) }