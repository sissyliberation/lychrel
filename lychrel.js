var concat="";
var holder="";
function reverse(s){ return s.split("").reverse().join(""); } /* reverse a string */

function lychrel (num,count) { /* calculates palindrome or adds then go */

	concat+=count+". "+num+" + " + reverse(num.toString());
	concat+=" = "+ (num+parseInt(reverse(num.toString())) )+"</br>";
	num += parseInt(reverse(num.toString()));
	
	if( num == reverse(num.toString())) { /* Checking for palindrome */
		concat+="</br>The palyndrome for "+holder+ " is "+num+" , formed after "+count+ " iterations.</br></br>";
		return num;	
	}
	else {	lychrel(num,count+1); }
	return num;
}

function isNumber (o) {
  return ! isNaN (o-0) && o !== null && o !== "" && o !== false;
}

function start() {
	
	concat="</br>";
	var number=prompt("Please choose a natural number","Enter natural number here.");
	if (isNumber(number)) {
		holder = number;
		lychrel(parseInt(number),1);
		document.getElementById("demo").innerHTML=concat;
	}
	else { alert("That was not a number. Try again."); }
}