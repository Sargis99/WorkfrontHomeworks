
//1
function EvenOrOdd(n)
{
	if(n%2==0)
		console.log("even");
	else
		console.log("odd");
}
//2
function isDivisible(a,b)
{
	if(a%b==0)
		console.log(0);
}

//3
function newNumber(n)
{
	var secondDigit = n+n;
	var thirdDigit = secondDigit+n;
	var result = n*100+secondDigit*10+thirdDigit;
	console.log(result);
}

//4
function lastToFirst(n)
{
	var lastDigit = n%10;
	if(lastDigit!=0)
	{
		var num = n/10;
		result = lastDigit.toString()+num.toString();
		console.log(result);
	}
	else
		console.log(n);
}

//5

function avg(a,b,c,d,e,f)
{
	var sum = a+b+c+d+e+f;
	console.log(sum/5);
}

//6

function sort(a,b,c)
{
	var arr=[a,b,c];
	arr.sort();
	console.log(arr);
}


//7

function sign(x,y,z)
{
	  if (x + y + z >= 0) {
    console.log("+");
  } else if (x < 0 && y < 0 && z < 0) {
    console.log("+");
  } else if (x > 0 && y < 0 && z < 0) {
    console.log("+");
  } else if (x < 0 && y > 0 && z < 0) {
    console.log("+");
  } else {
    console.log("-");
  }
}
//8
function quadraticSolver(a,b,c){
if (a == 0)
	console.log("Invalid Input")
  
    var d = b*b - 4*a*c; 
    var sqrt_val = Math.sqrt(abs(d)); 
  
    if (d > 0) 
    { 
       result = "Solutions are"+((-b + sqrt_val)/(2*a)).toString()+"and"+((-b - sqrt_val)/(2*a)).toString();
  		console.log(result); 
    } 
    else if (d == 0) 
    { 
    	console.log(-b / (2*a)); 
    } 
  else
  	console.log("Solution does not exists");
}
//9

var n = +promt();
var i=0;
var j=0;

if(n%2===0 && (!Math.floor(n/10)))
{
	i+=1;
}

if(n%3===0 && n%10===0 )
{
	j+=1;
}

//10 

function c(digit, number)
{
	var found = false;
	while(number!=0)
	{
		if(digit == number%10)
		{
			found=true;
			break;
		}
		number/=10;
	}
	if(found)
		console.log('Yes');
	else
		console.log('No');
}

//11

function reverseFirstLast(n)
{

    output = [],
    sNumber = n.toString();

	for (var i = 0, len = sNumber.length; i < len; i += 1) {
   	 output.push(+sNumber.charAt(i));
	}
	result = output[sNumber.length-1].toString();
	fistDigit = output[0].toString();
	for(var i=1;i<sNumber.length-1;i+=1)
		result+=output[i].toString();
	console.log(result+fistDigit);
}


//12
function area(type,x,y)
{
	if(x>0 && y>0){
		switch (type){
	
	case "triangle": console.log("Square of triangle is :" + x*y/2);
	break;
	case "rectangle":  console.log("Square of rectangle is :" + x*y);
	break;
	default: brak;
}
}
else
	console.log("Please enter only positive numbers")
}
//13
function differanceofLargeAndSmal(n){
	var largest = 0; 
    var smallest = 9; 
  
    while(n != 0)  
    { 
        var r = Math.floor(n % 10); 

        largest = Math.max(r, largest); 
        smallest = Math.min(r, smallest); 
  
        n = n / 10; 
    } 
    console.log(smallest);
}
