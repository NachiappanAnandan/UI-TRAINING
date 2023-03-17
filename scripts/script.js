const Calculator= {
   add:(num1 , num2) => num1+num2,
   subtract:(num1 , num2) => num1-num2,
   multiply:(num1 , num2) => num1*num2,
   divide:(num1 , num2) =>{ 
      if(num2===0){
         return  "Cannot divide by zero";
        
      }
     return (num1/num2).toFixed(2)}
}

num1 = parseInt(window.prompt("Enter value for number 1"))
num2 = parseInt(window.prompt("Enter value for number 2"))


console.log(num1 +" + "+num2+ " = "+Calculator.add(num1 , num2));
console.log(num1 +" - "+num2+ " = "+Calculator.subtract(num1 , num2));
console.log(num1 +" * "+num2+ " = "+Calculator.multiply(num1 , num2));
console.log(num1 +" / "+num2+ " = "+Calculator.divide(num1 , num2));