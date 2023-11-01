// Even odd
var a = 10
if(a%2==0){
    console.log("Even")
}
else{
    console.log("Odd")
}

// Leap Year
var year = 2024

if(year%400==0 || year%4==0){
    console.log("Leap Year")
}
else if(year%100==0){
    console.log("Not a leap Year")
}
else{
    console.log("Not a leap year")
}

// Greater b/w 2
var a =10, b=20

if(a>b){
    console.log("A is greater")
}
else{
    console.log("B is greater")
}


// +ve and -ve check
var a = -12
if(a>0){
    console.log("Positive Number")
}
else{
    console.log("Negative Number")
}

// Elifible for vote
var age = 12
if(age>=18){
    console.log("Eligible")
}
else{
    console.log("Not Eligible")
}


// Greatest among 3
var a=40, b=60, c=30
if(a>b){
    if(a>c){
        console.log(a)
    }
    else{
        console.log(c)
    }
}
else{
    if(b>c){
        console.log(b)
    }
    else{
        console.log(c)
    }
}

// Shopping
var amount = 100
if(amount>=1000){
    var discount = (amount*15)/100
    var payAmount = amount-discount

    console.log("Amount=",amount,"\ndiscount=",discount,"\npayAmount=",payAmount)
}
else{
    var discount = (amount*5)/100
    var payAmount = amount-discount

    console.log("Amount=",amount,"\ndiscount=",discount,"\npayAmount=",payAmount)
}


// Valid triange
var a1 = 60, a2 = 60, a3 = 50;

if(a1!=0 && a2!=0 && a3!=0){
    if((a1+a2+a3) == 180){
        console.log("Valid Triangle")
    }
    else{
        console.log("Not a valid Triangle")
    }
}
else{
    console.log("Not a valid Triangle")
}


// Calculate Grade and Percentage
var totalMarks = 500
var mark1 = 85, mark2 = 85, mark3 = 96, mark4 = 78, mark5 = 93

var calculatedMarks = mark1+mark2+mark3+mark4+mark5;
var percentage = calculatedMarks/5;

if(percentage>=81 && percentage<=100){
    console.log("percentage=",percentage,"\nGrade-A")
}
else if(payAmount>=71 && percentage<=80){
    console.log("percentage=",percentage,"\nGrade-B")
}
else if(payAmount>=61 && percentage<=70){
    console.log("percentage=",percentage,"\nGrade-C")
}
else if(payAmount>=40 && percentage<=60){
    console.log("percentage=",percentage,"\nGrade-E")
}
else{
    console.log("percentage=",percentage,"\nGrade-F")
}


// Salary of employee on his working hours
var Workinghr = 15

if(Workinghr>0){
    var salary = Workinghr*600
    console.log(salary)
}

else if(Workinghr>8){
    salary = 48000 + (Workinghr-8)*400
    console.log(salary)
}

else if(Workinghr>12){
    salary = 48000 + 1600 + (Workinghr-12)*300
    console.log(salary)
}

else if(Workinghr>8){
    salary = 48000 + 1600 + 1200 + (Workinghr-16)*200
    console.log(salary)
}

console.log("Workinghr=",Workinghr,"\nSalary=",salary)

