var Calculator= {
    num1:0,
    num2:0,
    add:function(){
        return this.num1+this.num2
    },
    subtract:function(){
        return this.num1-this.num2
    },
    multiply:function(){
        return this.num1*this.num2
    },
    divide:function(){
        return this.num1/this.num2
    }
}

Calculator.num1= 7
Calculator.num2= 3

console.log(Calculator.num1 +" + "+Calculator.num2+ " = "+Calculator.add());
console.log(Calculator.num1 +" - "+Calculator.num2+ " = "+Calculator.subtract());
console.log(Calculator.num1 +" * "+Calculator.num2+ " = "+Calculator.multiply());
console.log(Calculator.num1 +" / "+Calculator.num2+ " = "+Calculator.divide());