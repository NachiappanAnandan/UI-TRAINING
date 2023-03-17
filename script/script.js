// section 1
console.log(1+2);
console.log("apple"+ "orange");
console.log(1+2+"apple");
console.log("apple"+1+2);
console.log(1+true);
console.log(0==false);
console.log(1==true);
console.log(2=="2");

// section 2
// players array
var cricketTeam = ["Dhoni" , "Sachin" , "Raina" , "Jadeja" ,"Virat"  , "Ashwin" , "Rohit" , "Hardik", "Bravo" , "Williamson" , "Abd"]

// Injury to first player
cricketTeam.shift();
console.log("length after injury " + cricketTeam.length);

// adding new player
cricketTeam.unshift("Stokes");
console.log("After adding player "+ cricketTeam.length);

// sorting the team
cricketTeam.sort()
console.log("Sorted team  \n"  + cricketTeam);

// Adding jersey number
for(player of cricketTeam) console.log( player+ "-"+ Math.round(Math.random()*101));

// changing to uppercase
var upperCaseNames= cricketTeam.map(player => player.toUpperCase())
console.log(upperCaseNames);



// Section 3
//display numbers from 1 to 100
function displayNumber(){
    for (let index = 1; index <=100; index++) {
       console.log(index);
    }
}

// display current date
const currentDate = () => {
   var date= new Date();
    return date.getDate()+"/"+("0"+parseInt(date.getMonth()+1)).slice(-2)+"/"+date.getFullYear();
};

//convert to celcius
const convertCelsius = celcius => (celcius*9/5)+32;

//find average
var average = function(arr){
   return ((arr.reduce((prev ,current) => prev+current ))/arr.length).toFixed(2);
}

//reverse string
function reverseString(string){
    return string.split("").reverse().join("")
}

// number from 1 to 100
displayNumber();

// celcius to farenheit
var celcius = 90;
console.log("celcius =  "+ celcius+  " farenheit = " + convertCelsius(celcius));

//current date
console.log(currentDate());

// average of numbers in array
var numbers = [1,3,45.6,34,5,78]
console.log((average(numbers)))

// reverse a string
console.log(reverseString("hello"));