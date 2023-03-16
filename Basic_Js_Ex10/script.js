// variables

console.log(1+2);
console.log("apple"+ "orange");
console.log(1+2+"apple");
console.log("apple"+1+2);
console.log(1+true);
console.log(0==false);
console.log(1==true);
console.log(2=="2");




// section 2

var cricketTeam = ["Dhoni" , "Sachin" , "Raina" , "Jadeja" ,"Virat"  , "Ashwin" , "Rohit" , "Hardik", "Bravo" , "Williamson" , "Abd"]


// Injury to first player
cricketTeam.shift();
// console.log(cricketTeam);
console.log("length after injury " + cricketTeam.length);

// adding new player

cricketTeam.unshift("Stokes");
console.log("After adding player "+ cricketTeam.length);
cricketTeam.sort()

console.log("Sorted team  \n"  + cricketTeam);


// for (let index = 0; index < cricketTeam.length; index++) {
//    console.log();
// }
for(player of cricketTeam) console.log( player+ "-"+ Math.round(Math.random()*101));


var upperCaseNames= cricketTeam.map(player => player.toUpperCase())

console.log(upperCaseNames);





// Section 3


function displayNumber(){
    for (let index = 1; index <=100; index++) {
       console.log(index);
        
    }
}

// display current date

const currentDate = () => {
   var date= new Date();
   console.log(date.getDate()+"/"+date.getMonth()+1+"/"+date.getFullYear());
};

const convertCelsius = celcius => (celcius*9/5)+32

var average = function(arr){
    var total = 0;
    for (let index = 0; index < arr.length; index++) {
        total+=arr[index]
    }
    return total/arr.length
}

function reverseString(string){
   var revArr = string.split("")
    revArr = revArr.reverse();
    return revArr.join("")
}



// displayNumber();
var celcius = 90;


currentDate();

console.log("celcius =  "+ celcius+  " farenheit = " + convertCelsius(celcius) );



var numbers = [2,45,67,87,92.36]

console.log(Math.round(average(numbers)))

console.log(reverseString("hello"));