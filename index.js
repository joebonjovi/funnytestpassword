var password = "12345";
var name = document.getElementById('name').value;

function passcheck() {
	
	
     if(document.getElementById('pass1').value != password && document.getElementById('name').value != "") {
     alert(document.getElementById('name').value+ ', you stupid shit, Incorrect or missing Password, Try Again.');
     return false;
     }
	
	
     if(document.getElementById('pass1').value == password && document.getElementById('name').value != "") {
     alert("Thank you " +document.getElementById('name').value+".");
     }
	
	if(document.getElementById('name').value == "" && document.getElementById('pass1').value == password) {
     alert("Put your name in FUCKTARD.");
	 return false;
     }
	
	if(document.getElementById('pass1').value != password && document.getElementById('name').value == "") {
	 alert("Your name is missing FUCKTARD. \nYour Password is also missing or Incorrect.")
     return false;
     }
}		
