// let a = [ 1 , "Fardeen" , true  , 1.54 ,2,3,9,10, [ "ALi" , "Ahmed"]];
// a.push("Zain");
// console.log(a.length);
// console.log(a);
// //a.pop();
// console.log(a.length ,a);

// document.write("<h1>Array Example</h1>" );
// document.write("<h2>Array Length: " + a.length + "</h2>");
// document.write("<h2>Array Elements: " + a + "</h2>");
// console.log(a);


//document.write("Hello World We Are Here Into JavaScript"+ "<br>");

let = number = (prompt("Please Enter a number to print its table: "));
if(number==number){
    number = parseInt(number);
}
else if(isNaN(number)){
    document.write("Please enter a valid number.");
}
for(let table = 1; table<= 10; table++){
document.write(table+"x"+number+"="+(table*number)+"<br>");  
} 

document.write("Table of " + number + " printed successfully.");
