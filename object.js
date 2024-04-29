
var marks =[45,90,86,84,67,54,79];    //array start index  from 0
   
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
console.log(marks[5]);
console.log(marks[6]);
//console.log(marks[7]);
let z = marks.toString();
console.log(z);

for(var i=1; i<=10; i++)    // array with for loop
console.log(marks);

// // how to check length of array 
let length = marks.length

console.log(length);
console.log(typeof(marks));

//how to add index in array
const  student = ["mansi","pooja","muskan","prince"];
console.log(student);
// push method 
student.push("suhani","sonam");   //item add from last in array by push method 
console.log(student);
// pop method item out from last in array by pull method
student.pop();
console.log(student);

//var laststudent = student.pop()
 //console.log(student);
 console.log(marks[-1]);

 // shift method (remove the first element )
const firststudent = student.shift();
console.log(firststudent)

// unshift method (add the element from start)
 student.unshift("khusi");
console.log(student);
 student.unshift("surbhi");
 console.log(student);
 
 //// create object 
  var myobject = {
    Name : "kajal",
    age : 21,
    city : "bhopal",
    birth_place : "bhopal"
  }

 // let p = myobject.toString();
  //console.log(p);

  for(var i=1; i<=10; i++)  //object with  for loop
  console.log(myobject.city); 

  ////
 const fruits = {
    name : "mango",
    color : "yellow",
    test : "sweet",
    rate : 80
 };

 console.log(myobject.toString())
 //for(var i=5; i<=10; i++)
 console.log(fruits.name);
//////////

 let arr1 = [1,2,4,5,7,8,9];
 let arr2 = [6,3,10]
 let s = arr1.toString();
 console.log(s);
  let x = arr1.concat(arr2)
 console.log(z);
///****************

const college = 
{
    name : "gyan sagar college of institute",
    place : "sagar mp",
    no : 470002,
    course : "engineering(b.tech)",                      // object always write combination of key:value
    branch : "ex, cs, cv, me" 
    
}
for (let key in college){
  console.log(college[key])
}

//console.log(college)

//??????????????????????????
var aru = "muskan";
var ary = "MUSKAN";
console.log(aru != ary);
/////
 
// let name = "muskan vishwakarma";
// function count(name){
//   for (c)
//   if(count == a || count == e || count == i ||count == o || count == u)
//   console.log(name);
//     i++
   
// }
// count();

// default parameter in function
function sum(x = 4, y = 3){
 console.log(x + y)
  return x+y;
}
sum(6,);

let t = (t,s) => t * s;
///////
 //const str = "muskan vishwakarma"
function countVowels(str)
{
  let count = 0;
  for(const char of str){
    if ( 
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
      ) {
        count++
      }
    
console.log(str.match())

  }
}
countVowels("muskan vishwakarma");

///////sort() smallest ascending order
let arr= [5,2,8,9,1,78];
arr.sort();

for (let i=0; i<=arr.length-1; i++ )
{
    if(arr[i]>arr[i+1]){
        let store = arr[i+1];
        arr[i+1]= arr[i];
        arr[i]= store;
    }
}
console.log(arr);
console.log(arr[2]);


//const alln = [10,9,67,8,9,67,87,909];
//const store = alln.indexOf();
//console.log(alln.indexOf[2])//console.log(alln.includes(23))

//console.log(x,y,...z)
// let varvar = ["suhani vishwakarma"]
  //     varvar.reverse();
  //     console.log(varvar);

  let arr5 = ["muskan", "suhsni","gswati"]
  console.log(arr5.includes("swati"));

//console.log(alln.concat(arr5));

console.log(names)
var names = "sfgfghj";


let gyan = [1,2, 3, 5, 2 ,1];
// let gyn =gyan.map((value, index) => {
//   return ((value + index) + gyan) 
// })
// console.log(gyn)


let gayn = gyan.filter((m) => {
   return m > 10
  }
)
console.log(gayn, gyan)

let gnay = gyan.reduce((h1,h2) => {
  return h1 - h2
})

console.log(gnay)

let car = {
  sname : "utksrdhsh",
  ph : 98,
  mars : 908,
  sum: function(){
      let add = this.ph + this.mars;
      console.log(add);
  }
}
console.log(car);

let o = {name:'test',age:23}
let v = o
console.log(v)
o.name = 'test1';

console.log(o)
console.log(v)