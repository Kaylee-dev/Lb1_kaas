var cheeseColor = prompt("Is jouw kaas geel?")

if (cheeseColor == "ja") {
	var cheeseholes = prompt("Zitten er gaten in?")
}	
else if(cheeseColor == "nee") {
	var cheeseBlue = prompt("Heeft de kaas blauwe schimmels?")
}
if (cheeseholes == "ja") {
	var cheeseExpensive = prompt("Is de kaas belachelijk duur?")
}
else if (cheeseholes == "nee") {
	var cheeshard = prompt("Is de kaas hard als steen?")
}
if (cheeseExpensive == "ja") {
	alert("Uw kaas is een Emmenthaler")
}
else if (cheeseExpensive == "nee") {
	alert("Uw kaas is een Leerdammer")
}
